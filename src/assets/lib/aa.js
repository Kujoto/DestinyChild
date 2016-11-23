/*
 * @description 平滑跳转锚点
 * @param aa {string} 需要平滑跳转的链接
 * @return void
 */
import $ from 'assets/lib/jquery.js'
var Rxports = function (aa = 'test1'){
    $(aa).click(function () {
        var id = $(this).attr('href').split('#')[1];
        if(id){
            id = '#' + id;
            $('html, body').animate(
                { scrollTop: $(id).offset().top - 80 },
                500,
                function () { window.location.hash = id; }
                );
            return false;
        }
    });
    $(function (){
        var url = window.location.toString(),
            id = url.split('#')[1];
        if(id){
            $('html, body').animate({ scrollTop: $('#' + id).offset().top - 80 },500); 
        }
    })
}
	
module.exports = Rxports



































