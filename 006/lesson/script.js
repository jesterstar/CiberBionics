var STEP_CONST = 10;
var INTERVAL_STEP = 25;
var div = document.getElementById('result');
		div.style.position = 'relative';
var position = getComputedStyle(div);

function moveHandler(control) {
	var iterator = 0;
	var way = control;

	return function() {
		var startDraw = setInterval(function(){
			switch (way){
				case 'top':
				case 'bottom':
					var top = position.top.replace('px', '');
					break;
				case 'right':
				case 'left':
					var left = position.left.replace('px', '');
			}
			if (iterator == 10) {
				clearInterval(startDraw);
				iterator = 0;
			} else {
				iterator++;
				switch (way){
					case 'top':
						div.style.top = +top - STEP_CONST + 'px';
						break;
					case 'bottom':
						div.style.top = +top + STEP_CONST + 'px';
						break;
					case 'left':
						div.style.left = +left + STEP_CONST + 'px';
						break;
					case 'right':
						div.style.left = +left - STEP_CONST + 'px';
				}
			}
		}, INTERVAL_STEP);
		return startDraw;
	}
}

function moveRect(e){
	var cs = window.getComputedStyle(div);

	var left = parseInt(cs.left);
	var top = parseInt(cs.top);

	switch(e.keyCode){
		case 37:
			div.style.left = +left - STEP_CONST + 'px';
			break;
		case 38:
			div.style.top = +top + STEP_CONST + 'px';
			break;
		case 39:
			div.style.left = +left + STEP_CONST + 'px';
			break;
		case 40:
			div.style.top = +top - STEP_CONST + 'px';
	}
}

var buttonTop = document.getElementById('button-top');
var buttonBottom = document.getElementById('button-bottom');
var buttonLeft = document.getElementById('button-left');
var buttonRight = document.getElementById('button-right');

var generateTopHandler = moveHandler('top');
var generateBottomHandler = moveHandler('bottom');
var generateLeftHandler = moveHandler('left');
var generateRightHandler = moveHandler('right');

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

//Keydown event
addEventListener(
	'keydown',
	moveRect,
	false);