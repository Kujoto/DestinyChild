/*
 * @description 获取地址栏参数
 * @param url {string} 自定义链接，为空则获取地址栏链接
 * @return object 链接的参数
 */
var Rxports = function (url) {
        url = !url ? location.search : url;
        var temp = {};
        if (url.indexOf("?") != -1) {
            var params = url.substr(url.indexOf("?") + 1).split("&");
            for (var i = 0; i < params.length; i++) {
                var param = params[i].split("=");
                temp[param[0]] = param[1];
            }
            return temp;
        } else {
            return false;
        }
    }
	
module.exports = Rxports



































