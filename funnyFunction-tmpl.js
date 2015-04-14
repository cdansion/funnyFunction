
var funnyContentTmpl = {
    "mathRound":{
    	"dest":'数字-四舍五入',
	    "fullname": 'funnyFunction.mathRound(param1,param2)',
	    "paramdest": ['param1 {Number} 需要四舍五入的数字', 'param2 {Number} 保留的位数'],
	    "treturn":'{Number}',
	    "viewCode":["funnyFunction.mathRound(123456789.6666666,2); //123456789.67","funnyFunction.mathRound(123456789.6666666); //123456790"]
    },
    "mathAccMul":{
    	"dest":'数字-精确相乘',
	    "fullname": 'funnyFunction.mathAccMul(param1,param2)',
	    "paramdest": ['param1 {Number}', 'param1 {Number}'],
	    "treturn":'{Number}',
	    "viewCode":["funnyFunction.mathAccMul(365.568,5658.55); //2068584.8064"]
    },
    "commonAddSymbol":{
    	"dest":'通用-给数字|字符串加上符号',
	    "fullname": 'funnyFunction.commonAddSymbol(param1,param2,param3)',
	    "paramdest": ['param1 {Number|String} 数字|字符串', 'param2 {Number} 符号 默认:","','param3 {Number} 从多少位开始加 默认:3'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.commonAddSymbol(123456789);"']
    },

    
    "commonCountDown": {
        "dest": '通用-倒计时',
        "fullname": 'funnyFunction.commonCountDown(startDate,timeSeconds,onCounted,onOverTime)',
        "paramdest": ['startDate {Date} 开始时间', 'timeSeconds {Number} 秒', 'onCounted {Function} 当次计算完回调函数 onCounted(date) date为倒计时传入的对象', 'onOverTime {Function} 当次超时完回调函数 onOverTime()'],
        "viewCode": [
        'funnyFunction.commonCountDown(@' +
        '    new Date(\'2015/4/15 23:10:15\'),@' +
        '    new Date(\'2015/4/17\').getTime()/1000,@' +
        '    function(date){@' +
        '       // date为返回的对象@' +
        '       // var timeobj = {@'+
        '       //     hours: hour,@'+
        '       //     minutes: minute,@'+
        '       //     seconds: second,@'+
        '       //     totalhours: totalhour,@'+
        '       //     days: day@'+
        '       //};@'+
        '       document.getElementById(\'hour\').innerHTML = date.hours;@' +
        '       document.getElementById(\'minute\').innerHTML = date.minutes;@' +
        '       document.getElementById(\'second\').innerHTML = date.seconds;@' +
        '    }@' +
        ');'
        ],
        "html": ["<div class='fuunyCountDown'><span id='hour'></span> <span id='minute'> </span> <span id='second'></span></div>"],
        "showType": ['custom']
    },
    "stringLen":{
    	"dest":'字符串-获取string(中英文)变量的长度',
	    "fullname": 'funnyFunction.stringLen(param1,param2)',
	    "paramdest": ['param1 {String}','param2 {Boolean} 中文是算2个字节,否算1个字节 默认:true'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.stringLen(\'123456789中文\'); //13','funnyFunction.stringLen(\'123456789中文\',false); //11']
    },
    "stringUrlParam":{
    	"dest":'字符串-获取当前url参数',
	    "fullname": 'funnyFunction.stringUrlParam(param1)',
	    "paramdest": ['param1 {String}'],
	    "treturn":'{String}',
	    "viewCode":["funnyFunction.stringUrlParam('f');"],
	    "run":["funnyFunction.stringUrlParam('f');"]
    },

    "stringUrlParse":{
    	"dest":'字符串-url解析',
	    "fullname": 'funnyFunction.stringUrlParse(param1)',
	    "paramdest": ['param1 {String}'],
	    "treturn":'{String}',
	    "viewCode":["funnyFunction.stringUrlParse('https://github.com/chenchangwen/funnyFunction?f=1&b=2');"],
	    "showType":['dom']
    },
    "stringUrlFullPath":{
    	"dest":'字符串-获取当前url完整路口',
	    "fullname": 'funnyFunction.stringUrlFullPath()',
	    "treturn":'{String}',
	    "viewCode":["funnyFunction.stringUrlFullPath();"],
	    "run":["funnyFunction.stringUrlFullPath();"]
    },
    "convertObjectToString":{
    	"dest":'转换-object转换为string',
	    "fullname": 'funnyFunction.convertObjectToString(param1)',
	    "paramdest": ['param1 {Object}'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.convertObjectToString({name:\'ccw\',age:18}); //{name:ccw,age:18}'],
    },
     "convertObjectToArray":{
    	"dest":'转换-object(array-like)转为数组',
	    "fullname": 'funnyFunction.convertObjectToArray(param1)',
	    "paramdest": ['param1 {array-like object}'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.convertObjectToArray({0:\'funny\',1:18,length:2}); //funny,18']
    },
    "convertStringToTime":{
    	"dest":'转换-string(日期)转换为毫秒',
	    "fullname": 'funnyFunction.convertStringToTime(param1)',
	    "paramdest": ['param1 {String}'],
	    "treturn":'{Number}',
	    "viewCode":['funnyFunction.convertStringToTime(\'2015-3-31 08:00:00\'); //1427760000000'],
    },
    "objectSize":{
    	"dest":'对象-获取属性数量',
	    "fullname": 'funnyFunction.objectSize(param1)',
	    "paramdest": ['param1 {Object}'],
	    "treturn":'{Number}',
	    "viewCode":[
	     "var funny={@" +
	     '  fn:function(){@'+
	     '    alert(\'fn1\');@'+
	     '  },@'+
	     '  fn2:function(){@'+
	     '    alert(\'fn2\');@'+
	     '  }@' +
	     '};@' +
	     'funnyFunction.objectSize(funny); //2'
	    ]
    },
    "isObjectType":{
    	"dest":'判断-javascript对象类型',
	    "fullname": 'funnyFunction.isObjectType(param1)',
	    "paramdest": ['param1 {javascript对象类型} Array|Boolean|Date|Math|Number|String|RegExp .....','param2 {Object}',],
	    "treturn":'{Boolean}',
	    "viewCode":['funnyFunction.isObjectType(\'Object\',{name:\'ccw\',age:18}); //true','funnyFunction.isObjectType(\'Array\',[1,2,3,4]); //true','funnyFunction.isObjectType(\'Date\',new Date()); //true']
    },
    "arrayUnique":{
    	"dest":'数组-去重',
	    "fullname": 'funnyFunction.arrayUnique(param1)',
	    "paramdest": ['param1 {Array}'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.arrayUnique([11,22,11,22]); //11,22']
    },     
    "dateDiff":{
    	"dest":'日期-计算两个日期之间的(时|分|秒|日|周|月|年) 差',
	    "fullname": 'funnyFunction.dateDiff(param1,param2)',
	    "paramdest": ['param1 {Date|String} 开始时间','param2 {Date|String} 结束时间'],
	    "treturn":'{Object} actualmintues 实际分差 actualseconds 实际秒差 其余为对比差',
	    "viewCode":['funnyFunction.dateDiff(new Date(\'2015/2/20 20:00:00\'),new Date(\'2015/3/31 20:15:50\'));','funnyFunction.dateDiff(\'2015/2/20 20:00:00\',\'2015/3/31 20:15:50\');'],
	    "showType":['dom','dom']
    },
    "objectCallFunction":{
        "dest": '对象-调用对象自身函数',
        "fullname": 'funnyFunction.objectCallFunction(param1,arguments)',
	    "paramdest": ['param1 {Object}','arguments 过滤的方法名'],
	    "viewCode":[
	     "var funny={@" +
	     '  fn:function(){@'+
	     '    alert(\'fn1\');@'+
	     '  },@'+
	     '  fn2:function(){@'+
	     '    alert(\'fn2\');@'+
	     '  }@' +
	     '};@' +
	     'funnyFunction.objectCallFunction(funny); //fn1 fn2',
	     "var funny={@" +
	     '  fn:function(){@'+
	     '    alert(\'fn1\');@'+
	     '  },@'+
	     '  fn2:function(){@'+
	     '    alert(\'fn2\');@'+
	     '  },@' +
	     '  fn3:function(){@'+
	     '    alert(\'fn3\');@'+
	     '  }@' +
	     '};@' +
	     'funnyFunction.objectCallFunction(funny,\'fn2\',\'fn3\'); //fn1',
	    ],
	    "showType":['custom','custom']
    }      
};


