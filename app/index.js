'use strict';
var util = require('util');
var path = require('path');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');


var TalentGenerator = module.exports = function TalentGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.argument('name', { type: String, required: false });
	this.name = this.name || path.basename(process.cwd());

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
		// this.log.write().write();
		// this.log.ok('type "'+chalk.red("grunt server")+'" to start your project!');
	});

};

util.inherits(TalentGenerator, yeoman.generators.NamedBase);

TalentGenerator.prototype.askFor = function askFor() {

	// welcome message
	var welcome = 'Welcome to '+chalk.red('TalentJS')+'!';

	this.log(welcome);
  
};

TalentGenerator.prototype.projectfiles = function projectfiles() {
	this.directory('.', '.');
	// this.mkdir(path.join('app', 'images'));
	// this.mkdir(path.join('app', 'scripts'));
	// this.mkdir(path.join('app', 'scripts', 'vendor'));
	// this.mkdir(path.join('app', 'scripts', 'helpers'));
	// this.mkdir(path.join('app', 'scripts', 'routers'));
	// this.mkdir(path.join('app', 'scripts', 'network'));
	// this.mkdir(path.join('app', 'scripts', 'models'));
	// this.mkdir(path.join('app', 'scripts', 'collections'));
	// this.mkdir(path.join('app', 'scripts', 'views'));
	// this.mkdir(path.join('app', 'scripts', 'views', 'common'));
	// this.mkdir(path.join('app', 'styles'));
	// this.mkdir(path.join('app', 'styles', 'sass'));
	// this.mkdir(path.join('app', 'styles', 'css'));
	// this.mkdir(path.join('app', 'templates'));
	// this.mkdir(path.join('app', 'images'));


	// this.template('_package.json', 'package.json');
	// this.copy('_Gruntfile.js', 'Gruntfile.js');
	// this.copy('_README.md', 'README.md');
};
