'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.pages = this.name.split(',');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);


ViewGenerator.prototype.files = function files() {
	for (var i = 0; i < this.pages.length; i++) {
		var page = this.pages[i];
		var topChannel = page.split('/')[0];


		var type = 'item';
		if(page.split(':').length>1){
			type = page.split(':')[1];
			page = page.split(':')[0];
		}
		var typeMapping = {
			"item" : {
				view: 'item-view'
				,tmpl: 'item'
				,type: 'ItemView'
			}
			,"layout": {
				view: 'layout'
				,tmpl: 'layout'
				,type: 'Layout'
			}
			,"composite": {
				view: 'composite-view'
				,tmpl: 'composite'
				,type: 'CompositeView'
			}
			,"collection": {
				view: 'collection-view'
				,tmpl: 'collection'
				,type: 'CollectionView'
			}
		};

		var viewName = page+"-"+typeMapping[type].view;
		var tmplName = page+"-"+typeMapping[type].tmpl;

		var viewPath = path.join('app','scripts','views', viewName+'.js');
		var tmplPath = path.join('app', 'templates', tmplName+'.html');

		var data = {
			topChannel: topChannel
			,name: page
			,tmplRef: tmplName
			,viewType: typeMapping[type].type
			,viewPath: viewPath
			,tmplPath: tmplPath
		};
		if(this.options.del){
			var viewDir = path.dirname(viewPath);
			var tmplDir = path.dirname(tmplPath);
			
			fs.unlink(viewPath);
			fs.unlink(tmplPath);

			fs.rmdir(viewDir);
			fs.rmdir(tmplDir);
			
			console.log('   delete '+viewPath);
			console.log('   delete '+tmplPath);
		}else{
			this.template('view.js'
				,viewPath
				,data
			);
			this.template('tmpl.html'
				,tmplPath
				,data
			);
		}
	};
};
