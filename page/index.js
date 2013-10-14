'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
	// By calling `NamedBase` here, we get the argument to the subgenerator call
	// as `this.name`.
	yeoman.generators.NamedBase.apply(this, arguments);

	if(this.name.indexOf('{') > -1){
		this.pages = parsePath(this.name);
	}else{
		this.pages = this.name.split(',');	
	}
	
	if(this.options.res){
		var resPages = [];
		for (var i = 0; i < this.pages.length; i++) {
			var page = this.pages[i];
			resPages.push(page);
			resPages.push(path.join(page, 'show'));
			resPages.push(path.join(page, 'edit'));
			resPages.push(path.join(page, 'create'));
		};
		this.pages = resPages;
	}
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);


var deleteFolderRecursive = function(path) {
	if( fs.existsSync(path) ) {
		fs.readdirSync(path).forEach(function(file,index){
			var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteFolderRecursive(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};
PageGenerator.prototype.files = function files() {
	
	for (var i = 0; i < this.pages.length; i++) {
		var page = this.pages[i];
		var topChannel = page.split('/')[0];

		var viewPath = path.join('app','scripts','views', page, 'index-page-view.js');
		var tmplPath = path.join('app', 'templates', page, 'index-page.html');

		var data = {
			topChannel: topChannel
			,name: page
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
			this.template('index-page-view.js'
				,viewPath
				,data
			);
			this.template('index-page.html'
				,tmplPath
				,data
			);
		}
	};
};


/*
 
 {a/{a1/a2,a3},b}/{c,d}/{e,f}
 {{a0/a1,a2}/{a3,a4},b}/{c,d}/{e,f}

*/
function parsePath(path){
	// console.log(path)

	if(path.indexOf('/') == -1){
		if(path.indexOf('{') == -1){
			return [path];
		}else{
			return path.slice(1,-1).split(',');
		}
	}
	var topSections = parseTopSection(path, '/');

	var firstSection = topSections.shift();
	if(!firstSection) return [];


	var prefixArray = [];
	if(firstSection.indexOf('{') == -1){
		prefixArray.push(firstSection);
	}else{
		var subSections = parseTopSection(firstSection.slice(1,-1));
	

		for (var i = 0; i < subSections.length; i++) {
			prefixArray = prefixArray.concat(parsePath(subSections[i]));
		};
	}

	var finalResult = [];
	
	for (var i = 0; i < prefixArray.length; i++) {
		var prefix = prefixArray[i];
		var postArray = parsePath(topSections.join('/'));
		for (var j = 0; j < postArray.length; j++) {
			finalResult.push(prefix+'/'+postArray[j]);
		};
	};

	return finalResult;
}



function parseTopSection(subString, sign){
	if(subString == '') return [];

	sign = sign || ',';

	var subArray = [];
	var count = 0, commaPos = [], lastPos=0;
	for (var i = 0; i < subString.length; i++) {
		var char = subString[i];
		if(char == '{') count++;
		if(char == '}') count--;
		if(char == sign && count == 0) {
			subArray.push(subString.slice(lastPos, i));
			lastPos = i + 1;
		}
	};
	if(lastPos > 0) {
		subArray.push(subString.slice(lastPos));
	}

	// {a,b,c/d}
	if(subArray.length == 0){
		subArray = subString.slice(1,-1).split(',');
	}
	return subArray;
}