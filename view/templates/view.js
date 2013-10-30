define(['talent'
	,'templates/<%=topChannel%>'
],function(talent
	,jst
) {
	return talent.<%=viewType%>.extend({
		template: jst['<%=tmplRef%>']
		,initialize: function() {
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
});
