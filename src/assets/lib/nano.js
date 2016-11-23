/*！
 * JavaQuery alpha
 * 2015/10/01~2015/12/28
 * By Nano
*/
(function (global) {
    var support = {};
    nano = function (selector, context) {
        return new nano.fn.init(selector, context);
    };
    nano.fn = nano.prototype = {
    };
    nano.extend = nano.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) ||
                        (copyIsArray = jQuery.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };
    nano.extend({
        _extend: function (a, b) { for (var i in b) { a[i] = b[i]; } return a; },
    });
    nano.extend({
        _extend: function (a, b) { for (var i in b) { a[i] = b[i]; } return a; },
        isReady: true,
        error: function (msg) {
            throw new Error(msg);
        },
        noop: function () { },
        isFunction: function (obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function (obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function (obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
        },
        isPlainObject: function (obj) {
            var key;

            // Not plain objects:
            // - Any object or value whose internal [[Class]] property is not "[object Object]"
            // - DOM nodes
            // - window
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }

            // Not own constructor property must be Object
            if (obj.constructor &&
                    !hasOwn.call(obj, "constructor") &&
                    !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                return false;
            }

            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own
            for (key in obj) { }

            return key === undefined || hasOwn.call(obj, key);
        },

        isEmptyObject: function (obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },

        type: function (obj) {
            if (obj == null) {
                return obj + "";
            }

            // Support: Android<4.0, iOS<6 (functionish RegExp)
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[toString.call(obj)] || "object" :
                typeof obj;
        },

        // Evaluates a script in a global context
        globalEval: function (code) {
            var script,
                indirect = eval;

            code = jQuery.trim(code);

            if (code) {

                // If the code includes a valid, prologue position
                // strict mode pragma, execute code by injecting a
                // script tag into the document.
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {

                    // Otherwise, avoid the DOM node creation, insertion
                    // and removal by using an indirect global eval

                    indirect(code);
                }
            }
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Support: IE9-11+
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function (string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },

        nodeName: function (elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },

        each: function (obj, callback) {
            var length, i = 0;

            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        // Support: Android<4.1
        trim: function (text) {
            return text == null ?
                "" :
                (text + "").replace(rtrim, "");
        },

        // results is for internal usage only
        makeArray: function (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret,
                        typeof arr === "string" ?
                        [arr] : arr
                    );
                } else {
                    push.call(ret, arr);
                }
            }

            return ret;
        },

        inArray: function (elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },

        merge: function (first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            for (; j < len; j++) {
                first[i++] = second[j];
            }

            first.length = i;

            return first;
        },

        grep: function (elems, callback, invert) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function (elems, callback, arg) {
            var length, value,
                i = 0,
                ret = [];

            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

                // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply([], ret);
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function (fn, context) {
            var tmp, args, proxy;

            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }

            // Simulated bind
            args = slice.call(arguments, 2);
            proxy = function () {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },

        now: Date.now,

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    init = nano.fn.init = function (selectora, context) {
        var match, elem;

        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) {
            return this;
        }

        // Handle HTML strings
        if (typeof selector === "string") {
            // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            // HANDLE: $(function)
            // Shortcut for document ready
        } else if (jQuery.isFunction(selector)) {
            return rootjQuery.ready(selector);
        }

        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }

        return jQuery.makeArray(selector, this);
    },
    init.prototype = nano.fn;
    window.nano = window.n = nano;
    return nano;
})(window);
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



