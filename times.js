//判断数字出现做多的，如果出现次数最多的不只一个，就用第二种方法
//第一种方法
function arr () {
	var newarr =[];
	var obj = {};
	var max = 0;
	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];

		obj[arg] = obj[arg] || 0;

		obj[arg]++; 

		if (obj[arg] > max) {
			max = obj[arg];
		}
	}console.log(arg);
}

arr(1,1,3,5,3,1)


//第二种方法
function recopy (arr) {
	var Arr = Array.prototype.slice.call(arguments);
	var a = Arr[0];
	var obj = {};
	Arr.forEach(function(e){
		obj[e] = obj[e] || 0;
		obj[e]++;
	})
		console.log(obj)
}
recopy(1,1,3,3,5,3,1)