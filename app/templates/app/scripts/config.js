require.config({
	paths: {
		"backbone": "vendor/components/backbone/index"
		,"jquery": "vendor/components/jquery/index"
		,"json2": "vendor/components/json2/index"
		,"marionette": "vendor/components/marionette/index"
		,"underscore": "vendor/components/underscore/index"
		,"talent" : 'vendor/talent/index'

		,"jquery.cookie": "vendor/components/jquery.cookie/index"
	},
	shim: {
		'underscore': {
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
	}
});