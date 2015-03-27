var funnyContentTmpl = {
    "mathRound":{
    	"dest":'数字-四舍五入',
	    "fullname": 'funnyFunction.mathRound(param1,param2)',
	    "paramdest": ['param1 {Number} 需要四舍五入的数字', 'param2 {Number} 保留的位数'],
	    "treturn":'{Number}',
	    "viewCode":["funnyFunction.mathRound(123456789.6666666,2);","funnyFunction.mathRound(123456789.6666666);"],
	    "run":['funnyFunction.mathRound(123456789.6666666,2);',"funnyFunction.mathRound(123456789.6666666);"]
    },
    "mathAccMul":{
    	"dest":'数字-精确相乘',
	    "fullname": 'funnyFunction.mathAccMul(param1,param2)',
	    "paramdest": ['param1 {Number}', 'param1 {Number}'],
	    "treturn":'{Number}',
	    "viewCode":["funnyFunction.mathAccMul(365.568,5658.55);"],
	    "run":['funnyFunction.mathAccMul(365.568,5658.55);']
    },
    "commonAddSymbol":{
    	"dest":'通用-给数字|字符串加上符号',
	    "fullname": 'funnyFunction.commonAddSymbol(param1,param2,param3)',
	    "paramdest": ['param1 {Number|String} 数字|字符串', 'param2 {Number} 符号 默认:","','param3 {Number} 保留的位数 默认:3'],
	    "treturn":'{String}',
	    "viewCode":["funnyFunction.commonAddSymbol(123456789);","funnyFunction.commonAddSymbol(123456789,'#',2);"],
	    "run":['funnyFunction.commonAddSymbol(123456789);',"funnyFunction.commonAddSymbol(123456789,'#',2);"]
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
	    "run":["funnyFunction.stringUrlParse('https://github.com/chenchangwen/funnyFunction?f=1&b=2');"],
	    "showType":['dom']
    }
};


