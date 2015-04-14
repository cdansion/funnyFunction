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
     * 通用-倒计时
     * @param1 {Date} 开始时间
     * @param2 {Number} 秒
     * @param3 {Function} 当次计算完
     * @param3 {Function} 当次超时完
     */
    commonCountDown: function (startDate, timeSeconds, onCounted, onOverTime) {
        var distance = (timeSeconds * 1000) - startDate;
        var day, hour, minute, second, totalhour;
        if (distance >= 0) {
            //相减的差数换算成天数
            day = Math.floor(distance / 86400000);
            distance -= day * 86400000;
            //相减的差数换算成小时
            hour = Math.floor(distance / 3600000);
            distance -= hour * 3600000;
            //相减的差数换算成分钟
            minute = Math.floor(distance / 60000);
            distance -= minute * 60000;
            //相减的差数换算成秒数
            second = Math.floor(distance / 1000);
            if (hour < 10)
                hour = "0" + hour;
            //判断分钟小于10时，前面加0进行占位
            if (minute < 10)
                minute = "0" + minute;
            //判断秒数小于10时，前面加0进行占位
            if (second < 10)
                second = "0" + second;
            //转换后:最大小时
            totalhour = parseInt(hour) + (day * 24);
            var timeobj = {
                hours: hour,
                minutes: minute,
                seconds: second,
                totalhours: totalhour,
                days: day
            };
            if (onCounted) {
                onCounted(timeobj);
            }
            var that = this;
            funnyCountDown = setTimeout(function () {
                if (onCounted) {
                    that.commonCountDown(startDate, timeSeconds, onCounted);
                } else {
                    that.commonCountDown(startDate, timeSeconds);
                }
            }, 1000);
            timeSeconds -= 1;
        } else {
            if (typeof funnyCountDown != "undefined") {
                clearTimeout(funnyCountDown);
                if (onOverTime) {
                    onOverTime();
                }
            }
        }
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
     * 字符串-获取string(中英文)变量的长度
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
     * 转换-object转换为string
     * @param1 {Object}
     * @return {String}
     */ 
    convertObjectToString:function(obj){
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + ':' + obj[p] + '\n';
            }
        }
        return str;
    },
    /**
     * 转换-string(日期)转换为毫秒
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
    /**
     * 转换-object(array-like)转为数组
     * @param1 {array-like object}
     * @return {Array}
     */
    convertObjectToArray:function(arrayLikeObject){
    	return [].slice.call(arrayLikeObject);
    },
    /**
     * 对象-获得属性数量
     * @param1 {array-like object}
     * @return {Array}
     */
    objectSize:function(obj){
        return Object.keys(obj).length;
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
     * 对象-调用对象自身函数
     * @param1 {Object}
     * @params {arguments}  过滤的方法名
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
