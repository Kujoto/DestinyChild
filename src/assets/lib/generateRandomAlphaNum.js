/*
 * @description 获得随机字符串
 * @param len {int} 字符串长度
 * @return {stirng} 随机字符串
 */
var Rxports = function (len = 10) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}
	
module.exports = Rxports



































