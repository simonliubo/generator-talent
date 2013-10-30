define(['talent'
	,'templates/<%=topChannel%>'
],function(talent
	,jst
) {
	var MainView = talent.Layout.extend({
		template: jst['<%=name%>/index-page']
		,initialize: function() {
			
		}
		,regions: {
			// main: '.page-main-region'
		}
		,ui:{
			// item: '.ui-item'
		}
		,events:function(){
			var events = {};
			// events['click ' + this.ui.item] = 'eventHandler';
			return events;
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
		,pageTitle: '<%=name%>'
	});
});
