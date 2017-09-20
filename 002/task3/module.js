var MyQuery = (function() {
	var resultArr = [], resultObj = [];
	return {
		FindClass: function(className) {
			var el = document.querySelectorAll("[class='"+className+"']");
			for (var i=0; i < el.length; i++) {
				resultArr.push(el[i]);
			}
			resultObj = {
				title: 'Выбранны элементы с классом: ' + className,
				arr: resultArr
			};
			return resultObj;
		},
		FindClassAnyother: function(className){
			var resultArr = [];
			var el = document.getElementsByTagName('*');
			for (var i=0; i < el.length; i++) {
				var elClass = el[i].getAttribute('class');
				if (elClass == className) {
					resultArr.push(el[i]);
				}
			}
			resultObj = {
				title: 'Выбранны элементы с классом: ' + className,
				arr: resultArr
			};
			return resultObj;
		}
	}
}());

var arr1 = MyQuery.FindClass('redButton');
var arr2 = MyQuery.FindClass('blueButton');
var arr3 = MyQuery.FindClass('greenButton');
var arr4 = MyQuery.FindClassAnyother('redButton');
var arr5 = MyQuery.FindClassAnyother('blueButton');
var arr6 = MyQuery.FindClassAnyother('greenButton');

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);