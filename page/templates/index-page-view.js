define(['talent'
	,'templates/<%=topChannel%>'
],function(talent
	,jst
) {
	var MainView = talent.Layout.extend({
		template: jst['<%=name%>/index-page']
		,className: 'well span8'
		,initialize: function() {
			talent.Context.setPageTitle('Page Title: <%=name%>');
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
	});

	return talent.BasePageView.extend({
		mainViewClass : MainView
	});
});
