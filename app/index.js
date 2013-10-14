'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var TalentGenerator = module.exports = function TalentGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.name = "talent-demo";
	if(args.length > 0){
		this.name = args[0];
	}

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(TalentGenerator, yeoman.generators.NamedBase);

TalentGenerator.prototype.askFor = function askFor() {

	// welcome message
	var welcome =
	'\n     _-----_' +
	'\n    |       |' +
	'\n    |' + '--(o)--'.red + '|   .--------------------------.' +
	'\n   `---------麓  |    ' + 'Welcome to Talent,'.yellow + '    |' +
	'\n    ' + '( '.yellow + '_' + '麓U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
	'\n    /___A___\\   \'__________________________\'' +
	'\n     |  ~  |'.yellow +
	'\n   __' + '\'.___.\''.yellow + '__' +
	'\n 麓   ' + '`  |'.red + '掳 ' + '麓 Y'.red + ' `\n';

	console.log(welcome);
  
};

TalentGenerator.prototype.app = function app() {
};

TalentGenerator.prototype.projectfiles = function projectfiles() {
	this.directory('.','.');
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
