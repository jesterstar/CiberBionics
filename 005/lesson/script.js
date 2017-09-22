var NOT_A_NUMBER = 'Only numbers';
var div = document.getElementById('result');

function notNumber(){
	return NOT_A_NUMBER;
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function plusHandler(a, b) {
	var first = document.getElementById(a);
	var second = document.getElementById(b);
	var x, y;
	return function() {
		x = first.value;
		y = second.value;
		if (isNumeric(x) && isNumeric(y)) {
			div.innerHTML = +x + +y;
		} else {
			div.innerHTML = notNumber();
		}
	}
}

function minusHandler(a, b) {
	var first = document.getElementById(a);
	var second = document.getElementById(b);
	var x, y;
	return function() {
		x = first.value;
		y = second.value;
		if (isNumeric(x) && isNumeric(y)) {
			div.innerHTML = +x - +y;
		} else {
			div.innerHTML = notNumber();
		}
	}
}

function multiplyHandler(a, b) {
	var first = document.getElementById(a);
	var second = document.getElementById(b);
	var x, y;
	return function() {
		x = first.value;
		y = second.value;
		if (isNumeric(x) && isNumeric(y)) {
			div.innerHTML = +x * +y;
		} else {
			div.innerHTML = notNumber();
		}
	}
}

function dividerHandler(a, b) {
	var first = document.getElementById(a);
	var second = document.getElementById(b);
	var x, y;
	return function() {
		x = first.value;
		y = second.value;
		if (isNumeric(x) && isNumeric(y)) {
			div.innerHTML = +x / +y;
		} else {
			div.innerHTML = notNumber();
		}
	}
}

var buttonPlus = document.getElementById('button-plus');
var buttonMinus = document.getElementById('button-minus');
var buttonMultiply = document.getElementById('button-multiply');
var buttonDivider = document.getElementById('button-divide');

var generatePlusHandler = plusHandler('firstInput', 'secondInput');
var generateMinusHandler = minusHandler('firstInput', 'secondInput');
var generateMultiplyHandler = multiplyHandler('firstInput', 'secondInput');
var generateDividerHandler = dividerHandler('firstInput', 'secondInput');

buttonPlus.addEventListener(
	'click',
	generatePlusHandler,
	false);

buttonMinus.addEventListener(
	'click',
	generateMinusHandler,
	false);

buttonMultiply.addEventListener(
	'click',
	generateMultiplyHandler,
	false);

buttonDivider.addEventListener(
	'click',
	generateDividerHandler,
	false);