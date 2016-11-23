/*
 * @description 获取DIV的坐标 and 手机端移动DIV
 * @param div {string} div的id
 * @return void
 * @TODO 待测试整理
 */
var Rxports = function (div){
    var div = Document.getElementById(div);
    //获取DIV的坐标
    var _l = div.getBoundingClientRect().left - div.parent()[0].getBoundingClientRect().left;
    var _t = div.getBoundingClientRect().top - div.parent()[0].getBoundingClientRect().top;
    /////手机端移动DIV
    var isdrag = false;
    var tx, x, ty, y;
    $(function () {
        div.addEventListener('touchend', function () {
            isdrag = false;
        });
        div.addEventListener('touchstart', selectmouse);
        div.addEventListener('touchmove', movemouse);
    });
    function movemouse(e) {
        if (isdrag) {
            var n = tx + e.touches[0].pageX - x;
            var m = ty + e.touches[0].pageY - y;
            $("#moveid").css({ "left": n, "top": m });
            return false;
        }
    }
    function selectmouse(e) {
        isdrag = true;
        tx = parseInt(div.style.left + 0);
        ty = parseInt(div.style.top + 0);
        y = e.touches[0].pageY;
        x = e.touches[0].pageX;
        return false;
    }
}
	
module.exports = Rxports



































