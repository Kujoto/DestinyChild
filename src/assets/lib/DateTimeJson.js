/*
 * @description 转换时间格式
 * @param t {string} /Date格式
 * @return {Date}
 */
var Rxports = function (t) { return new Date(parseInt(t.toString().replace("/Date(", "").replace(")/", ""))) }
	
module.exports = Rxports



































