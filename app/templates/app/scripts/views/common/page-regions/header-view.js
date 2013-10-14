define(['talent','templates/common'], function(talent, jst) {
	/**
	* Header view class
	* @author nobody
	* @extends {talent.View}
	* @class HeaderView
	*/
	return talent.CompositeView.extend(
		/** @lends HeaderView.prototype */
	{
		template: jst['common/page-regions/header']
	});

});