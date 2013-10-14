define(['talent', 'templates/common'],
	function(talent, jst) {
	/**
	* Sidebar view class
	* @author nobody
	* @extends {talent.View}
	* @class SidebarView
	*/
	return talent.Layout.extend(
		/** @lends SidebarView.prototype */
	{
		template: jst['common/page-regions/sidebar']
		,tagName : 'ul'
		,className : 'nav nav-list'
	});

});