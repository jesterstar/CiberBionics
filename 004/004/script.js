var STEP_CONST = 10;
var div = document.getElementById('result');
div.style.position = 'relative';
var position = getComputedStyle(div);

function topHandler() {
	return function () {
		var top = position.top.replace('px', '');
		div.style.top = parseInt(top) - STEP_CONST + 'px';
	}
}

function bottomHandler() {
	return function () {
		var top = position.top.replace('px', '');
		div.style.top = parseInt(top) + STEP_CONST + 'px';
	}
}

function leftHandler() {
	return function () {
		var left = position.left.replace('px', '');
		div.style.left = parseInt(left) - STEP_CONST + 'px';
	}
}

function rightHandler() {
	return function () {
		var left = position.left.replace('px', '');
		div.style.left = parseInt(left) + STEP_CONST + 'px';
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