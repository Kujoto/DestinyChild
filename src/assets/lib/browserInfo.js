/*
 * @description 移动终端浏览器版本信息
 * @param void
 * @return versions {object} 浏览器版本信息
 * @return language {string} 浏览器语言信息
 * @TODO 待整理
 */
var Rxports = {
        versions: function(){   
                        var u = navigator.userAgent, app = navigator.appVersion
                        return {
                            trident: u.indexOf('Trident') > -1, //IE内核  
                            presto: u.indexOf('Presto') > -1, //opera内核  
                            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端  
                            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器  
                            iPad: u.indexOf('iPad') > -1, //是否iPad  
                            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
                        };  
                    }(),  
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        width: function () { return (window.innerWidth > 0) ? window.innerWidth : screen.width; }(),
        height: function () { return (window.innerHeight > 0) ? window.innerHeight : screen.height }(),
        getExplorerInfo : function() {
            var explorer = window.navigator.userAgent.toLowerCase() ;
            //ie
            if (explorer.indexOf("msie") >= 0) {
                var ver=explorer.match(/msie ([\d.]+)/)[1];
                return {type:"IE",version:ver};
            }
            //firefox
            else if (explorer.indexOf("firefox") >= 0) {
                var ver=explorer.match(/firefox\/([\d.]+)/)[1];
                return {type:"Firefox",version:ver};
            }
            //Chrome
            else if(explorer.indexOf("chrome") >= 0){
                var ver=explorer.match(/chrome\/([\d.]+)/)[1];
                return {type:"Chrome",version:ver};
            }
            //Opera
            else if(explorer.indexOf("opera") >= 0){
            var ver=explorer.match(/opera.([\d.]+)/)[1];
            return {type:"Opera",version:ver};
            }
            //Safari
            else if(explorer.indexOf("safari") >= 0){
            var ver=explorer.match(/version\/([\d.]+)/)[1];
            return {type:"Safari",version:ver};
            }
        }()
}
	
module.exports = Rxports