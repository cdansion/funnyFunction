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
    "stringLen":{
    	"dest":'字符串-获得字符串（中英文）变量的长度',
	    "fullname": 'funnyFunction.stringLen(param1,param2)',
	    "paramdest": ['param1 {String}','param2 {Boolean} 中文是否算1个字节,否则算2个字节 默认:true'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.stringLen(\'123456789中文\');','funnyFunction.stringLen(\'123456789中文\',false);'],
	    "run":['funnyFunction.stringLen(\'123456789中文\');','funnyFunction.stringLen(\'123456789中文\',false);'],
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
    },
    "stringUrlFullPath":{
    	"dest":'字符串-获得当前url完整路口',
	    "fullname": 'funnyFunction.stringUrlFullPath()',
	    "treturn":'{String}',
	    "viewCode":["funnyFunction.stringUrlFullPath();"],
	    "run":["funnyFunction.stringUrlFullPath();"]
    },
    "convertObjectToString":{
    	"dest":'转换-将对象转换为字符串',
	    "fullname": 'funnyFunction.convertObjectToString(param1)',
	    "paramdest": ['param1 {Object}'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.convertObjectToString({name:"ccw",age:18});'],
	    "run":['funnyFunction.convertObjectToString({name:\"ccw\",age:18});'],
    },
    "isObjectType":{
    	"dest":'判断-javascript对象类型',
	    "fullname": 'funnyFunction.isObjectType(param1)',
	    "paramdest": ['param1 {javascript对象类型} Array|Boolean|Date|Math|Number|String|RegExp .....','param2 {Object}',],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.isObjectType("Object",{name:"ccw",age:18});','funnyFunction.isObjectType("Array",[1,2,3,4]);','funnyFunction.isObjectType("Date",new Date());'],
	    "run":['funnyFunction.isObjectType(\'Object\',{name:\'ccw\',age:18});','funnyFunction.isObjectType(\'Array\',[1,2,3,4]);','funnyFunction.isObjectType(\'Date\',new Date());'],
    },
    "arrayUnique":{
    	"dest":'数组-去重',
	    "fullname": 'funnyFunction.arrayUnique()',
	    "paramdest": ['param1 {Array}'],
	    "treturn":'{String}',
	    "viewCode":['funnyFunction.arrayUnique([11,22,11,22]);'],
	    "run":['funnyFunction.arrayUnique([11,22,11,22]);'],
    }     
};