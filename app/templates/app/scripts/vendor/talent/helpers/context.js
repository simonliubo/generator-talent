/**
 * Context Object, pass global variable to all classes
 */
define(['jquery'], function($) {

	return {
		start: BSGlobal.start,
		/**
		 * 在全局存储中，通过key获取value
		 */
		getGlobal: function(key) {
			return BSGlobal[key];
		},
		/**
		 * 删除全局存储中的某个属性
		 */
		deleteGlobalProp: function(key) {
			delete BSGlobal[key];
		},
		/**
		 * 在全局存储中，设置key对应的value
		 */
		setGlobal: function(key, value) {
			BSGlobal[key] = value;
		},
		/**
		 * 修改页面的document.title
		 */
		setPageTitle: function(title) {
			document.title = title;
		}
	};
});