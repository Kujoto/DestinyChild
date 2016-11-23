/*
 * @description 切换面板，.active为选中
 * @param nav {string} 导航
 * @param div {string} 内容
 * @param type {string} 触发类型
 * @return void
 * @TODO 去除jquery
 */
import $ from 'assets/lib/jquery.js'
var Rxports = function (nav, div, type) {
    var nav = $(nav)
    nav.on(type, function () { 
        nav.parent().find('.active').removeClass('active')
        $(this).addClass('active')
        $(div).hide().eq($(this).index()).show()
    })
    return true; 
}
	
module.exports = Rxports



































