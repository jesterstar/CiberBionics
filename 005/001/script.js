var NOT_A_NUMBER = 'Only numbers';
var div = document.getElementById('result');

function notNumber(){
	return NOT_A_NUMBER;
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Calculator constructor function
 * @param {string} a - first element selector
 * @param {string} b - second element selector
 * @param {string} type - type of calculating operation
 */
function Calculator(a, b, type) {
	var first = document.getElementById(a);
	var second = document.getElementById(b);
	var x, y;
	return function() {
		x = first.value;
		y = second.value;
		if (!isNumeric(x) && !isNumeric(y)) {
			div.innerHTML = notNumber();
		} else {
			switch(type) {
				case 'addition':
					div.innerHTML = +x + +y;
					break;
				case 'subtraction':
					div.innerHTML = +x - +y;
					break;
				case 'multiplication':
					div.innerHTML = +x * +y;
					break;
				case 'division':
					div.innerHTML = +x / +y;
			}
		}
	}
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

var generatePlusHandler = Calculator('firstInput', 'secondInput', 'addition');
var generateMinusHandler = Calculator('firstInput', 'secondInput', 'subtraction');
var generateMultiplyHandler = Calculator('firstInput', 'secondInput', 'multiplication');
var generateDividerHandler = Calculator('firstInput', 'secondInput', 'division');

var test = Calculator('firstInput', 'secondInput', 'buttons');

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