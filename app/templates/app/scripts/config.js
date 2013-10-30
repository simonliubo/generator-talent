require.config({
	paths: {
		"backbone": "vendor/components/backbone/index"
		,"jquery": "vendor/components/jquery/index"
		,"json2": "vendor/components/json2/index"
		,"marionette": "vendor/components/marionette/index"
		,"underscore": "vendor/components/underscore/index"
		,"requirejs": "vendor/components/requirejs/index"
		,"talent" : 'vendor/components/talentjs/index'
	},
	shim: {
		'jquery': {
			exports: '$'
		}
		,'underscore': {
			exports: '_'
		}
		,'backbone': {
			deps: ['json2', 'underscore', 'jquery'],
			exports: 'Backbone'
		}
		,'marionette': {
			deps: ['backbone'],
			exports: 'Marionette'
		}
		,'talent': {
			deps: ['marionette'],
			exports: 'Talent'
		}
	}
}); 