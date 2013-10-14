define(['talent'
	,'templates/home'
],function(talent
	,jst
) {
	/**
	 * Inner main view class
	 * @class HomeView~MainView
	 * @extends {Backbone.View}
	 */	
	var MainView = talent.Layout.extend(
		/** @lends HomeView~MainView.prototype */
	{
		template: jst['home/index-page']
		,className: 'home-page-container'
		,initialize: function() {
			talent.Context.setPageTitle('Page Title: Home');
		}
		,regions: {
			pubblog: '.pubblog_home'
		}
		,ui:{
			start: '.btn-start'
		}
		,events:function(){
			var events = {};
			events['click ' + this.ui.start] = 'start';
			return events;
		}
		,start: function(e) {
			this.ui.start.html('button clicked!');
		}
		,onRender: function() {
		}
		,onShow: function() {
		}
		,onClose:function(){
		}
	});


	return talent.BasePageView.extend({
		mainViewClass : MainView
	});
});
