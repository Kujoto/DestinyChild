/*
 * @description 返回顶部
 * @param void
 * @return void
 */
var Rxports = function () {
        var timer = setInterval(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动高度
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop - scrollTop / 3;
            if (scrollTop == 0) { clearInterval(timer) }
        }, 30);
        return true;
}
	
module.exports = Rxports