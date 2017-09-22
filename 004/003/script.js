var DIV_COUNT = 3;

function getRandomPosition(element) {
	var x = document.body.offsetHeight - element.clientHeight;
	var y = document.body.offsetWidth - element.clientWidth;
	var z = document.body.offsetWidth + element.clientWidth;
	var randomX = Math.floor(Math.random() * x);
	var randomY = Math.floor(Math.random() * y);
	var randomZ = Math.floor(Math.random() * z);
	return [randomX, randomY, randomZ];
}

function createDiv(el) {
	var div = document.createElement('div');
	div.setAttribute("style", "position:absolute; background-color: #dadada; width: 100px; height: 100px;");
	document.getElementById(el).appendChild(div);
	var xy = getRandomPosition(div);
	div.style.marginBottom = xy[0] + 'px';
	div.style.top = xy[1] + 'px';
	div.style.right = xy[2] + 'px';
}

function init() {
	var iterator = 0;

	return function(){
		document.getElementById('result').innerHTML = '';
		if (iterator < DIV_COUNT) {
			for (var i=0; i < DIV_COUNT; i++) {
				createDiv('result');
			}
		} else {
			iterator = 0;
		}
		iterator++;
	}
}

window.onload = setInterval(init(), 1000);