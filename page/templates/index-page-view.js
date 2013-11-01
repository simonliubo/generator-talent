define(['talent'
	,'templates/<%=topChannel%>'
],function(Talent
	,jst
) {
	var MainView = Talent.Layout.extend({
		template: jst['<%=name%>/index-page']
		,initialize: function() {
			
		}
		,regions: {
			// main: '.main-region'
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

	return Talent.BasePageView.extend({
		mainViewClass : MainView
		,pageTitle: '<%=name%>'
	});
});
