function getRandomInt(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function randomizer(id) {
	var input = document.getElementById(id);
	var resultContainer = document.getElementById('result-list');

	return function () {
		if (input.value.length > 0 && isNumeric(input.value)) {
			var number = getRandomInt(1, 100);
			if (input.value < number) {
				resultContainer.innerHTML = 'загаданное значение больше введенного вами, загаданое = ' + number + '; введенное = ' + input.value;
			} else if (input.value > number) {
				resultContainer.innerHTML = 'загаданное значение меньше введенного вами, загаданое = ' + number + '; введенное = ' + input.value;
			} else if (input.value == number) {
				resultContainer.innerHTML = 'загаданое = введенному = ' + input.value;
			} else if (input.value < 0 && input.value > 100) {
				resultContainer.innerHTML = 'диапазон чисел 1 - 100';
			}
		} else if (!isNumeric(input.value) && input.value.length > 0) {
			resultContainer.innerHTML = 'введите число';
		} else if (!isNumeric(input.value) && input.value.length == 0){
			resultContainer.innerHTML = 'вы не заполнили поле';
		}
	}
}

var button = document.getElementById('button');
var generateResult = randomizer('exampleInput');

//Example click listener
button.addEventListener(
	'click',
	generateResult,
	false);