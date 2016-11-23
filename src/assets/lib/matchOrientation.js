/*
 * @description 查询竖屏/横屏
 * @param s {string} 竖横屏时的回调函数
 * @param h {string} 横屏时的回调函数
 * @return void
 */
var mql = window.matchMedia("(orientation: portrait)")
var Rxports = function (s = ()=>{}, h = ()=>{}){
   if (mql.matches) {
        //直立方向 竖屏
        s()
    } else {
        //水平方向 横屏
        h()
    }
    // 添加一个媒体查询改变监听者
    mql.addListener(function (m) {
        if (m.matches) {
            //改变到直立方向 竖屏
            s()
        }
        else {
            // 改变到水平方向 横屏
            h()
        }
    });
    //方法二
    // window.addEventListener('orientationchange', function(event){
    //     if ( window.orientation == 180 || window.orientation==0 ) {
    //         s()
    //     }
    //     if( window.orientation == 90 || window.orientation == -90 ) {
    //         h()
    //     }
    // });
}
	
module.exports = Rxports



































