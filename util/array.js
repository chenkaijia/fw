fw.Util.array= fw.Util.array || {};
var _a = fw.Util.array,_util = fw.Util;

//正向查找数组元素在数组中的下标
_a.indexOf=Array.prototype.indexOf
	? function(){
		var args=Array.prototype.slice.call(arguments,1);
		return Array.prototype.indexOf.apply(arguments[0],args);
	}
	: function(){
		formIndex=formIndex || 0;
		if(formIndex<0) formIndex=Math.max(0,arr.length+formIndex);
		for(var i=formIndex,len=arr.length;i<len;i++)
			if(arr[i] == obj)
				return i;
		return -1;
	};
//反向查找数组元素在数组中的下标
_a.lastIndexOf=Array.prototype.lastIndexOf//检测是否已经定义的原始对象
	? function(){
		var args=Array.prototype.slice.call(arguments,1);
		return Array.prototype.lastIndexOf.apply(arguments[0],args);
	}
	: function(arr,obj,formIndex){
		formIndex = formIndex || arr.length;
		if(formIndex<0) formIndex=Math.max(0,arr.length+formIndex);
		for(var i=formIndex;i>=0;i--)
			if(arr[i]==obj)
				return i;
		return -1;
	};
//遍历数组，把每个数组元素作为第一个参数来执行函数
_a.forEach = Array.prototype.forEach
	? function(){
		var args=Array.prototype.slice.call(arguments,1);
		return Array.prototype.forEach.apply(arguments[0],args);
	}
	: function(arr,fun,obj){//执行obj.fun(arr[i]);
		obj = obj || window;
		if(!_util.type.is_function(obj.fun))
			throw new TypeError();//抛出异常
		for(var i in arr)
			fun.call(obj,arr[i]);
	};
//用一个自定义函数来过滤数组
_a.filter = Array.prototype.filter
	? function(){
		var args = Array.prototype.slice.call(arguments,1);
		return Array.prototype.filter.apply(arguments[0],args);
	}
	: function(arr, fun){
	  if(!_util.type.is_function(fun) || !_util.type.is_array(arr))
	    throw new TypeError();
	  var res = [];
	  for(var i in arr){
	    if(fun(arr[i]))
	      res.push(arr[i]);
	  }
		return res;
	};
//@function:traverse the array,each array element as the first parameter to execute the function
//@return: if any one or more array members makes the function execution results returned true eventually return true.false otherwise
_a.some = Array.prototype.some
  ? function(){
	  var args = Array.prototype.slice.call(arguments,1);
		return Array.prototype.some.apply(arguments[0],args);
	}
  : function(arr,fun){
	  if(!_util.type.is_function(fun) || !_util.type.is_array(arr))
			throw new TypeError();
		for(var i in arr)
		  if(fun(arr[i])) return true;
		return false;
	};
//@function: traverse the array,each array element as the first parameter to execute the function
//@return: the mapping function returns the results to deposite into the reyurned array
_a.map = Array.prototype.map
  ? function(){
	  var args = Array.prototype.slice.call(arguments,1);
		return Array.prototype.map.apply(arguments[0],args);
	}
  : function(arr, fun){
	  if(typeof fun != 'function')
			throw new TypeError();
		if(typeof arr != 'object' || arr.constructor != Array)
			throw new TypeError();
		var res = [];
		for(var i in arr)
			res.push(fun(arr[i]));
		return res;
	};
//@function: traverse the array, each array element as the first parameter to execute the function
//@return: if all the array members are making the function returning true,return true
_a.every = Array.prototype.every
  ? function(){
	  var args = Array.prototype.slice.call(arguments,1);
		return Array.prototype.every.apply(arguments[0],args);
	}
  : function(arr, fun){
	  if(typeof fun != 'function')
			throw new TypeError();
		if(typeof arr != 'object' || arr.constructor != Array)
			throw new TypeError();
	  var res = [];
		for(var i in arr)
			if(fun(!arr[i])) return false;
		return true;
	};
//console.log(Util.array.indexOf([2,3,4,5,6,7],5));
//console.log(Util.array.lastIndexOf([2,3,4,5,6,7],5));
//console.log(Util.array.forEach([2,3,4,5,6,7],function(){
//	console.log(arguments[0]);
//}));
//[2,3,4,5,6].forEach(function(){
//	console.log(arguments[0]);
//});
//console.log(Util.array.filter([2,3,4,5,6],function(){
//  return arguments[0]>4;
//}))
//console.log(Util.array.some([2,3,4,5,6,7],function(){
//  return arguments[0] > 4;
//}))
