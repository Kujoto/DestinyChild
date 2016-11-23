/*
 * @description 监听鼠标滚轮
 * @param u {function} 滚轮上滑的回调函数
 * @param d {function} 滚轮下滑的回调函数
 * @return void
 */
var Rxports = function (u = ()=>{}, d = ()=>{}){
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {//IE/Opera/Chrome 
            e.wheelDelta == 120 ? u() : d();
        } else if (e.detail) {//Firefox 
            e.detail == -3 ? u() : d();
        }
    }
    /*注册事件*/
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C 
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome 
}
	
module.exports = Rxports



































