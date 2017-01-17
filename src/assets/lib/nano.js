/*！
 * JavaQuery alpha
 * 2015/10/01~2015/12/28
 * By Nano
*/
window.onload = (function (windows) {
    //可以获取网页上任何XY坐标的文本
    //var x = 50, y = 100;
    //var range = document.caretRangeFromPoint(x, y);
    //if (range) {
    //    range.expand('word');
    //    var word = range.startContainer.textContent.substring(range.startOffset, range.endOffset);
    //    console.log(word);
    //}
    //取文本的坐标完整版
    //if (document.addEventListener) { // standard
    //    document.addEventListener('click', function onclick(e) {
    //        var r;
    //        if (document.caretRangeFromPoint) { // standard (WebKit)
    //            r = document.caretRangeFromPoint(e.pageX, e.pageY);
    //        } else if (e.rangeParent) { // Mozilla
    //            r = document.createRange();
    //            r.setStart(e.rangeParent, e.rangeOffset);
    //        }

    //        var t = r.startContainer; // should be a text node
    //        var s = r.startOffset; // number of chars from the start of text
    //        var e = s;

    //        while (s > 0) {
    //            s -= 1;
    //            r.setStart(t, s);
    //            if (/^\s/.test(r.toString())) {
    //                r.setStart(t, s += 1);
    //                break;
    //            }
    //        }
    //        var l = t.nodeValue.length;
    //        while (e < l) {
    //            e += 1;
    //            r.setEnd(t, e);
    //            if (/\s$/.test(r.toString())) {
    //                r.setEnd(t, e -= 1);
    //                break;
    //            }
    //        }

    //        window.getSelection().addRange(r);
    //        alert(r.toString());

    //    }, false);

    //} else if (document.attachEvent) { // IE

    //    document.attachEvent('onclick', function onclick(e) {
    //        if (!e) e = window.event;
    //        if (document.selection && document.selection.createRange) {
    //            var r = document.selection.createRange();
    //            r.moveToPoint(e.x, e.y);

    //            r.moveStart('word', -1);
    //            if (/^\s/.test(r.text)) r.moveStart('character', 1);
    //            r.moveEnd('word', 1);
    //            if (/\s$/.test(r.text)) r.moveEnd('character', -1);

    //            r.select();

    //            alert(r.text);
    //        }
    //    });

    //}

    //console.log
    log = function () {
        var message = Array.prototype.slice.call(arguments, 0);
        console.log.apply(console, ['[N]'].concat(message));
        //message.unshift('(app)');
        //console.log.apply(console, message);
    }


    //网页可编辑
    yes = function () { document.body.contentEditable = 'true' }

    SomeBody = function () {

        ////手机端移动DIV

        //<!--[if lt IE 9]>
        //<meta http-equiv="Refresh" content="6; url=http://windows.microsoft.com/zh-CN/windows/upgrade-your-browser/" />
        //<script>setTimeout(function () {alert('你正在使用 Internet Explorer 的过期版本。除非更新浏览器，否则你无法查看 该网页。 ');location.href = 'http://windows.microsoft.com/zh-cn/internet-explorer/download-ie'; },5000)</script>
        //<![endif]-->

        //只输入整数
        //<input onkeyup="this.value=this.value.replace(/\D/g,'')"/>


        //正则
        //手机/^1[3|4|5|7|8]\d{9}$/

        $().click(function (e) {
            /*target发起事件者 currentTarget监听事件者*/
            if (e.target == e.currentTarget) sb();
        });
        //整数的操作
        var set = (12.4 / 4.13).toFixed(0);//结果为3
        var set = parseInt(12.4 / 4.13);//结果为3
        //重写原生浏览器方法以实现新功能
        (function () {
            var oldAlert = window.alert,
                count = 0;
            window.alert = function (a) {
                count++;
                oldAlert(a + "\n You've called alert " + count + " times now. Stop, it's evil!");
            };
        })();
        //模糊log
        var _log = console.log;
        console.log = function () {
            _log.call(console, '%c' + [].slice.call(arguments).join(' '), 'color:transparent;text-shadow:0 0 2px rgba(0,0,0,.5);');
        };
        //不声明第三个变量的值交换
        var a = 1, b = 2; a = [b, b = a][0];
        //If语句的变形 运用逻辑与代替if
        flag = true && alert('Today is Sunday!');
        //如果执行体代码超过了1 条语句，则需要加花括号，而利用逗号表达式，可以执行任意条代码而不用加花括号
        if (flag = true) alert(1), alert(2), console.log(3);
        //禁止别人以iframe加载你的页面
        if (window.location != window.parent.location) window.parent.location = window.location;
        //console.table
        var data = [{ '品名': 'QQ', '数量': 4 }, { '品名': 'Wechat', '数量': 3 }];
        console.table(data);
        //$.extend,JQ扩展，添加JQ的静态方法，与具体JQ对象无关
        //对象合并
        var person = { name: "zzl" };
        $.extend(person, { sex: "male" });
        alert(person.name + person.sex);
        //根据ip获得城市
        var province = '';
        var city = '';
        jQuery.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js", function () {
            province = remote_ip_info["province"];
            city = remote_ip_info["city"];
            alert(city);
        });
        //合并到JQ合局变量中
        $.extend({
            hello: function () { alert('hello'); }
        });
        $.hello();

        $.extend({ net: {} }); //jq下的net命名空间

        $.extend($.net, {
            nethello: function () { alert('hello'); }
        })
        $.net.nethello();
        var result = $.extend(true, {}, {//true表示深度拷贝，表示子对象location也会被合并
            name: "zzl", info: { address: "beijing", work: "developer" }
        }, {
            last: "zhanling", info: { work: "software developer", county: "China" }
        });
        //$.fn.extend，添加JQ实例对象的方法扩展，$("#A1")它代表一个JQ对象
        $.fn.extend({
            GetHtml: function () {
                alert($(this).html());
            }
        });
        $("#a1").GetHtml();
        



    }
    //window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) { alert('JavaScript出现错误！\r错误信息:'+ errorMessage+'\r错误地址:'+ scriptURI+'  '+lineNumber+'行'); return true }

})(window);



!function(a,b){
    function c(){
        var b = f.getBoundingClientRect().width;
        b/i > 540 && (b = 540*i);
        var c = b/10;
        f.style.fontSize = c+"px",
        k.rem = a.rem = c
    }
    var d,
    e = a.document,
    f = e.documentElement,
    g = e.querySelector('meta[name="viewport"]'),
    h = e.querySelector('meta[name="flexible"]'),
    i = 0,
    j = 0,
    k = b.flexible||(b.flexible={});
    if(g){
        console.warn("将根据已有的meta标签来设置缩放比例");
        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        l && (j = parseFloat(l[1]),i = parseInt(1/j))
    }else if(h){
        var m = h.getAttribute("content");
        if(m){
            var n = m.match(/initial\-dpr=([\d\.]+)/),
            o = m.match(/maximum\-dpr=([\d\.]+)/);
            n && (i = parseFloat(n[1]),
            j = parseFloat((1/i).toFixed(2))),
            o && (i=parseFloat(o[1]),
            j = parseFloat((1/i).toFixed(2)))
        }
    }
    if(!i && !j){
        var p = (a.navigator.appVersion.match(/android/gi),
        a.navigator.appVersion.match(/iphone/gi)),
        q = a.devicePixelRatio;
        i = p?q>=3&&(!i||i>=3)?3:q>=2&&(!i||i>=2)?2:1:1,
        j = 1/i
    }
    if(f.setAttribute("data-dpr",i), !g)
        if(g = e.createElement("meta"), g.setAttribute("name","viewport"), g.setAttribute("content","initial-scale="+j+", maximum-scale="+j+", minimum-scale="+j+", user-scalable=no"), f.firstElementChild)
            f.firstElementChild.appendChild(g);
        else{
            var r = e.createElement("div");
            r.appendChild(g),
            e.write(r.innerHTML)
        }
    a.addEventListener("resize", function(){
        clearTimeout(d),
        d = setTimeout(c,300)}, !1),
        a.addEventListener("pageshow", function(a){
            a.persisted && (clearTimeout(d), d = setTimeout(c,300))
        }, !1),
        "complete" === e.readyState ?
        e.body.style.fontSize = 12*i+"px" :
        e.addEventListener("DOMContentLoaded", function(){
            e.body.style.fontSize = 12*i+"px"
        }, !1),
        c(),
        k.dpr = a.dpr = i,
        k.refreshRem = c,
        k.rem2px = function(a){
            var b = parseFloat(a)*this.rem;
            return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
        },
        k.px2rem = function(a){
            var b = parseFloat(a)/this.rem;
            return "string" == typeof a && a.match(/px$/)&&(b += "rem"), b
        }
    }(window, window.lib || (window.lib = {}));