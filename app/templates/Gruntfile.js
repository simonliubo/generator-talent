module.exports = function( grunt ) {
	'use strict';
	//
	// Grunt configuration:
	//
	// https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
	//
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd H:MM") %> */'
		,watch: {
			options: {
				livereload: false
			}
			,jst: {
				files: [
					'app/templates/**/*.html'
				]
				,tasks: 'jst'
			}
		}
		,requirejs: {
			options: {
				appDir: "app"
				,baseUrl: "./scripts"
				,mainConfigFile: "app/scripts/config.js"
				,dir: "release/app"
				,optimizeCss: "none"
				,skipDirOptimize: true
				,optimize: "none"
				,preserveLicenseComments: false
				,keepBuildDir: true
				,removeCombined: false
			}
			,mainIncludeFiles:[
				'main'
				,'talent'
				,'collections/index', 'routers/index'
				,'helpers/index', 'network/index'
				,"views/common/layouts/master-layout"
				,"views/common/layouts/empty-layout"
			]
			,main: {
				options: {
					modules: [
						{
							name: "main"
							,include: '<%= requirejs.mainIncludeFiles %>'
						}
					]
				}
			}
			,home: {
				options: {
					modules: [
						{
							name: "views/home/index-page-view"
							,exclude: '<%= requirejs.mainIncludeFiles %>'
						}
					]
				}
			}
		}
		,uglify: {
			options : {
				banner: '<%= banner %>'
        		// ,report: 'gzip'
				,preserveComments: false
			}
			,main: {
				files: {
					'release/app/scripts/main.min.js': ['release/app/scripts/main.js']
				}
			}
			,home: {
				files: {
					'release/app/scripts/views/home/index-page-view.min.js': ['release/app/scripts/views/home/index-page-view.js']
				}
			}
		}
		,jst: {
			compile: {
				options: {
					prettify: true,
					// namespace: 'jst',
					processName: function(filename) {
						var index = filename.lastIndexOf('/');
						return filename.replace("app/templates/","").split(".")[0];
					},
					amd: true
				},
				files: {
					"app/scripts/templates/common.js": ["app/templates/common/**/*.html"]
					,"app/scripts/templates/home.js": ["app/templates/home/**/*.html"]
					,"app/scripts/templates/about.js": ["app/templates/about/**/*.html"]
				}
			}
		}
		,cssjoin: {
			join :{
				files: {
					'release/app/styles/all.css': ['app/styles/all.css'],
				}
			}
		}
		,cssmin: {
			options: {
				// report: 'gzip',
				banner: '<%= banner %>'
			},
			compress: {
				files: {
				  'app/styles/css/all.min.css': ['app/styles/css/all.css']
				}
			}
		}
		,connect: {
			server: {
				options: {
					hostname: 'localhost'
					// ,port: 8000
					,base: 'app'
					,open: 'http://localhost:8000'
				}
			}
		}
	});
	grunt.registerTask('js', ['jst']);
	grunt.registerTask('css', ['cssjoin','cssmin']);
	grunt.registerTask('local', ['jst','watch']);
	grunt.registerTask('server', ['jst','connect','watch']);

	// customized tasks by the project
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

};