var STEP_CONST = 10;
var INTERVAL_STEP = 25;
var div = document.getElementById('result');
	div.style.position = 'relative';
var position = getComputedStyle(div);

function topHandler() {
	var iterator = 0;

	return function() {
		var startDraw = setInterval(function(){
			var top = position.top.replace('px', '');
			if (iterator == 10) {
				clearInterval(startDraw);
				iterator = 0;
			} else {
				iterator++;
				div.style.top = parseInt(top) - STEP_CONST + 'px';
			}
		}, INTERVAL_STEP);
		return startDraw;
	}
}

function bottomHandler() {
	var iterator = 0;

	return function() {
		var startDraw = setInterval(function(){
			var top = position.top.replace('px', '');
			if (iterator == 10) {
				clearInterval(startDraw);
				iterator = 0;
			} else {
				iterator++;
				div.style.top = parseInt(top) + STEP_CONST + 'px';
			}
		}, INTERVAL_STEP);
		return startDraw;
	}
}

function leftHandler() {
	var iterator = 0;

	return function() {
		var startDraw = setInterval(function(){
			var left = position.left.replace('px', '');
			if (iterator == 10) {
				clearInterval(startDraw);
				iterator = 0;
			} else {
				iterator++;
				div.style.left = parseInt(left) - STEP_CONST + 'px';
			}
		}, INTERVAL_STEP);
		return startDraw;
	}
}

function rightHandler() {
	var iterator = 0;

	return function() {
		var startDraw = setInterval(function(){
			var left = position.left.replace('px', '');
			if (iterator == 10) {
				clearInterval(startDraw);
				iterator = 0;
			} else {
				iterator++;
				div.style.left = parseInt(left) + STEP_CONST + 'px';
			}
		}, INTERVAL_STEP);
		return startDraw;
	}
}

var buttonTop = document.getElementById('button-top');
var buttonBottom = document.getElementById('button-bottom');
var buttonLeft = document.getElementById('button-left');
var buttonRight = document.getElementById('button-right');

var generateTopHandler = topHandler();
var generateBottomHandler = bottomHandler();
var generateLeftHandler = leftHandler();
var generateRightHandler = rightHandler();

buttonTop.addEventListener(
	'click',
	generateTopHandler,
	false);

buttonBottom.addEventListener(
	'click',
	generateBottomHandler,
	false);

buttonLeft.addEventListener(
	'click',
	generateLeftHandler,
	false);

buttonRight.addEventListener(
	'click',
	generateRightHandler,
	false);