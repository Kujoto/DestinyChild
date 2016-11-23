/*
 * @description 滑动到底部触发函数
 * @param callback {function} 需要执行的函数
 * @return void
 */
var isFoot_Timer = null
var Rxports = function (callback = ()=>{}) {
    window.onscroll = function (){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动高度
        var viewH = document.documentElement.clientHeight || document.body.clientHeight;//可见高度
        var contentH = document.documentElement.scrollHeight || document.body.scrollHeight;//内容高度
        if (contentH < scrollTop + viewH + 600) {
            if (isFoot_Timer) { clearTimeout(isFoot_Timer); }
            isFoot_Timer = setTimeout(function () {  callback(); }, 1);
        } return true;
    } 
}
	
module.exports = Rxports