var funnyFunction = {
	/**
	 * 数字-四舍五入
	 * @param1 {Number} 需要四舍五入的数字
	 * @param2 {Number} 保留的位数
	 * @return {Number}
	 */
	mathRound:function(param1,param2){
        param2 = param2 || 0;
	    var vv = Math.pow(10, param2);
        return Math.round(param1 * vv) / vv;
	},
    /**
     * 数字-精确相乘
     * @param1 {Number} 数字
     * @param2 {Number} 数字
     * @return {Number}
     */
    mathAccMul:function(param1,param2){
        var m = 0,
            s1 = param1.toString(),
            s2 = param2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {}
        try {
            m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },
    /**
     * 通用-给数字|字符串加上符号
     * @param1 {Number} 数字
     * @param2 {String} 符号 默认:','
     * @param3 {Number} 保留的位数 默认:3
     * @return {String}
     */
    commonAddSymbol:function(param1,param2,param3){
        var s = param2 || ',';
        var p = param3 || 3 ;
        if(s==='$'){
            return param1;
        }
        var re = new RegExp('(-?\\d+)(\\d{'+ p +'})','');
        var num = param1 + "";
        while (re.test(num)) {
            num = num.replace(re, "$1"+s+"$2");
        }
        return num;
    },
    /**
     * 字符串-获取当前url参数
     * @param1 {String}
     * @return {String}
     */       
    stringUrlParam:function(param1){
        var reg = new RegExp("(^|&)" + param1 + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) return window.unescape(r[2]);
        return null;
    },
    /**
     * 2015-1-13 yc
     * 字符串-url解析
     * @param1 {String}
     * @return {Object}
     */ 
    stringUrlParse:function(param1){
        var anchor = document.createElement('a');
        anchor.href = param1;
        return {
            source: param1,
            protocol: anchor.protocol.replace(':', ''),
            host: anchor.hostname,
            port: anchor.port,
            query: anchor.search,
            params: (function() {
                var ret = {},
                    seg = anchor.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    str;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    str = seg[i].split('=');
                    ret[str[0]] = str[1];
                }
                return ret;
            })(),
            file: (anchor.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: anchor.hash.replace('#', ''),
            path: anchor.pathname.replace(/^([^\/])/, '/$1'),
            relative: (anchor.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: anchor.pathname.replace(/^\//, '').split('/')
        };
    },
    /**
     * 字符串-获得当前url完整路口
     * @return {String}
     */ 
    stringUrlFullPath:function(){
        return window.location.protocol + "//" + window.location.host + window.location.pathname;
    },

    /**
     * 字符串-获得字符串（中英文）变量的长度
     * @param1 {String}
     * @param2 {Boolean} 中文是算2个字节,否算1个字节
     * @return {String}
     */
    stringLen: function(param1,param2) {
        var len = 0;
        var isCn = true;
        if(param2 !== undefined)
        {
            isCn= param2;
        }
        for (var i = 0; i < param1.length; i++) {
            var c = param1.charCodeAt(i);
            //单字节加1 
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                len++;
            }
            else if(isCn){
                len += 2;
            }
            else{
                len += 1;
            }
        }
        return len;
    },

    /**
     * 转换-将对象转换为字符串
     * @param1 {Object}
     * @return {String}
     */ 
    convertObjectToString:function(o){
        var
            str = (function obj2str(o) {
                var r = [];
                if (typeof o == "string" || o === null) {
                    return o;
                }
                if (typeof o == "object") {
                    if (!o.sort) {
                        r[0] = "{";
                        for (var i in o) {
                            r[r.length] = i;
                            r[r.length] = ":";
                            if (typeof o[i] == 'object' && o[i].top && o[i].window && o[i].location) {
                                r[r.length] = "ve";
                            } else {
                                r[r.length] = obj2str(o[i]);
                            }
                            r[r.length] = ",";
                        }
                        if (r.length > 1) r[r.length - 1] = "}";
                        else r[r.length] = "}";
                    } else {
                        r[0] = "[";
                            // alert(o.length);
                        for (var i = 0; i < o.length; i++) {
                            r[r.length] = obj2str(o[i]);
                            r[r.length] = ",";
                        }
                        if (r.length > 1) r[r.length - 1] = "]";
                        else r[r.length] = "]";
                    }
                    return r.join("");
                }
                return o.toString();
            })(o);
        return str.replace(/[\r\n]/g, '');
    },
    /**
     * 转换-将日期(字符串)转换为毫秒
     * @param1 {String}
     * @return {Number}
     */
     convertStringToTime:function(param1){
        var f = param1.split(' ', 2);
        var d = (f[0] ? f[0] : '').split('-', 3);
        var t = (f[1] ? f[1] : '').split(':', 3);
        return (new Date(
            parseInt(d[0], 10) || null, (parseInt(d[1], 10) || 1) - 1,
            parseInt(d[2], 10) || null,
            parseInt(t[0], 10) || null,
            parseInt(t[1], 10) || null,
            parseInt(t[2], 10) || null
        )).getTime();
     },

    //字符串相关
    string: {
        //根据字符串计算hash数值
        hash: function(a) {
            var b, c = 1,
                d = 0;
            if (!this.IsEmpty(a))
                for (c = 0, b = a.length - 1; b >= 0; b--)
                    d = a.charCodeAt(b), c = (c << 6 & 268435455) + d + (d << 14), d = 266338304 & c, c = 0 != d ? c ^ d >> 21 : c;
            return c;
        },

        //截取定长字符串 包含中文处理  
        //(串,长度,增加...)  
        subString: function(str, len, hasDot) {
            var newLength = 0;
            var newStr = "";
            var chineseRegex = /[^\x00-\xff]/g;
            var singleChar = "";
            var strLength = str.replace(chineseRegex, "**").length;
            for (var i = 0; i < strLength; i++) {
                singleChar = str.charAt(i).toString();
                if (singleChar.match(chineseRegex) != null) newLength += 2;
                else newLength++;

                if (newLength > len) break;
                newStr += singleChar;
            }
            if (hasDot && strLength > len) newStr += "...";
            return newStr;
        },

        /*
         *json对象字符串替换
         * rpl('<div>{{data.name}}</div>',{name:"chenchangwen"})
         */
        rpl: function(tmp, data) {
            if (!ve) return false;
            tmp = tmp.replace(/\{\{(.*?)\}\}/gi, function(a, b) {
                return eval(b);
            });
            return tmp;
        }
    },
    /**
     * 日期-计算两个日期之间的(时|分|秒|日|周|月|年) 差 
     * @param1 {Date|String} 
     * @param2 {Date|String} 
     * @return {Object}
     */
    dateDiff:function(startDate, endDate){
        if(this.isObjectType("String",startDate))
        {
            startDate = new Date(startDate);
        }
        if(this.isObjectType("String",endDate))
        {
            endDate = new Date(endDate);
        }
        var _diffDate=endDate-startDate; 
        //时差
        var h=Math.floor(_diffDate/3600000); 
        //实际分差
        var m=Math.floor((_diffDate-h*3600000)/60000); 
        //对比分差
        var actualm=Math.floor(_diffDate/60000); 
        //实际秒差
        var s=(_diffDate-h*3600000-m*60000)/1000; 
        //对比秒差
        var actuals=_diffDate/1000; 
        //日差
        var d = Math.floor(_diffDate/86400000);
        //周差
        var w = Math.floor(_diffDate/(86400000*7));
        //月差
        var momth = (endDate.getMonth()+1)+((endDate.getFullYear()-startDate.getFullYear())*12)-(startDate.getMonth()+1);
        //年差
        var y = endDate.getFullYear()-startDate.getFullYear(); 
        return {
            hours:h,
            minutes:m,
            actualmintues:actualm,
            actualseconds:actuals,
            seconds:s,
            days:d,
            weeks:w,
            months:momth,
            years:y
        };
    },
    /**
     * 数组-去重
     * @param1 {Array} 
     * @return {Array}
     */
    arrayUnique:function(param1){
        var ret = [];
        var hash = {};
        for (var i = 0; i < param1.length; i++) {
            var item = param1[i];
            var key = typeof(item) + item;
            if (hash[key] !== 1) {
                ret.push(item);
                hash[key] = 1;
            }
        }
        return ret;
    },
   

    /**
     * 对象-调用方法
     * @param1 {Object}
     * @params {String}  过滤的方法名
     * @return {Array}
     */
    objectCallFunction:function(obj){
        var arg, sum = 0,
            name = '',
            fn;
        for (var fname in obj) {
            sum = 0;
            for (var i = 1; i < arguments.length; i++) {
                arg = arguments[i];
                if (fname === arg) {
                    sum++;
                }
            }
            if (sum === 0) {
                fn = obj[fname];
                if (typeof fn === 'function') {
                    fn();
                }
            }
        };
    },

    //对象相关
    obj: {
        //返回类型
        //params: Object
        type: function(object) {
            return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
        },

        //类数组对象转换成数组，如arguments
        arg2arr: function(args) {
            return Array.prototype.slice.call(args);
        },

        //返回数量
        //params: Object
        size: function(obj) {
            var size = 0,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        }
    },

    //文档对象模型相关
    dom: {

        //返回当前window大小对象
        windowSize: function() {
            var doch = window.innerHeight || document.documentElement.offsetHeight || document.body.clientHieght;
            var docw = window.innerWidth || document.documentElement.offsetWidth || document.body.clientWidth;
            var docST = document.documentElement.scrollTop || document.body.scrollTop;
            var docSL = document.documentElement.scrollLeft || document.body.scrollLeft;
            return {
                dw: docw,
                dh: doch,
                st: docST,
                sl: docSL
            };
        },

        //[jquery]获取element的实际大小及位置
        //params: element
        elementSize: function(element) {
            if (!$(element).length) return;
            var offset = $(element).offset();
            offset.bottom = offset.top + $(element).height();
            offset.right = offset.left + $(element).width();
            offset.width = $(element).width();
            offset.height = $(element).height();
            return offset;
        }
    },

    //通用相关


    //变量相关
    variable: {
        //是否为空
        isEmpty: function(a) {
            return void 0 == a || "-" == a || "" == a
        }
    },

    //样式相关
    style: {
        //返回当前元素style
        //params: element
        get: function(element) {
            return element.currentStyle || document.defaultView.getComputedStyle(element, null);
        }
    },
    /**
     * 判断-javascript对象类型
     * @param1 {javascript对象类型} Array|Boolean|Date|Math|Number|String|RegExp .....
     * @param2 {Object}
     * @return {Boolean}
     */
    isObjectType:function(type, obj){
        return toString.call(obj).indexOf('[object ' + type) == 0;
    }  
};
