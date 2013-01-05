fw.Util.type = fw.Util.type || {};
var _t = fw.Util.type;

//@fun: detect the data type.
//@re: the data type.
_t.checkType = function(obj){
	var _res = '',_type;
  if((_type = typeof obj) != 'object') _res = _type;
  else{
	  _type = Object.prototype.toString.call(obj);
		_res = _type.substring(8,_type.length-1).toLowerCase();
	}
	return _res;
};

//@fun: detect whether the data type is 'string'.
//@re: if the data type is 'string',return true. Vice verse.
_t.is_string = function(obj){
  return  _t.checkType(obj) === 'string';
};

//@fun: detects whether the date type is 'number'.
//@re: if the data type is 'number',return true.Vice verse.
_t.is_number = function(obj){
  return _t.checkType(obj) === 'number';
};

//@fun: detect whether the data type is 'array'.
//@re: if the data type is 'array',return true.Vice verse.
_t.is_array = function(obj){
  return _t.checkType(obj) === 'array';
};

//@fun: detect whether the data type is 'function'.
//@re: if the data type is 'function',return true.Vice verse.
_t.is_function = function(obj){
  return _t.checkType(obj) === 'function';
};

//@fun: detect whether the data type is 'object'.
//@re: if the data type is 'objct',return true.Vice verse.
_t.is_object = function(obj){
	return _t.checkType(obj) === 'object';
};

/*
var temp = [123,'123',"123",{},[1,2],function(){return 1}];
for(var i in temp)
	console.log(fw.Util.type.checkType(temp[i]));
*/
/*
console.log(fw.Util.type.is_number(123));
console.log(fw.Util.type.is_function(function(){return 'jjjj'}));
console.log(fw.Util.type.is_object({type:234}));
console.log(fw.Util.type.is_string("123"));
*/
