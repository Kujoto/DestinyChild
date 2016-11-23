/*
 * @description 统一移动端屏幕分辨率，解决移动端屏幕分辨率大小不一的兼容性问题
 * @param phoneWidth {int} 屏幕分辨率宽度
 * @return void
 */
var Rxports = function (phoneWidth = 640){
    //离散放大级别
    var step = 0.125
    //基准宽度为phoneWidth
    var phoneScale = parseInt(window.screen.width) / phoneWidth
    //放大时不使用线性算法
    if (phoneScale > 1) {
        phoneScale = Math.floor(Math.sqrt(phoneScale) / step) * step;
    }
    var oMeta = document.createElement('meta')
    oMeta.name="viewport"
    if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
       // andriod 2.3
       if (parseFloat(RegExp.$1) > 2.3) {
           oMeta.content='width= ' + phoneWidth + ', minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi';
       // andriod 2.3以上
       } else {
           oMeta.content='width= ' + phoneWidth + ', target-densitydpi=device-dpi';
       }
       //其他系统
    } else {
        oMeta.content='width= ' + phoneWidth + ', user-scalable=no, target-densitydpi=device-dpi';
    }
    document.head.appendChild(oMeta)
}
	
module.exports = Rxports