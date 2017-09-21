function getResult(id, result) {
	var el = document.getElementById(id);
	var sum = 0;
	var resultContainer = document.getElementById(result);
	var pattern1 = /[0-9]{2} - [0-9]{2}/;
	var pattern2 = /[0-9]{2} \+ [0-9]{2}/;

	return function () {
		var newParagraph = document.createElement('p');
		var str = el.value;
		resultContainer.innerHTML = '';

		if (pattern1.test(str)) {
			sum = str.substring(0, 2) - str.substring(5, 7);
			newParagraph.innerHTML = 'Результат вычетания = ' + sum;
			resultContainer.appendChild(newParagraph);
		} else if (pattern2.test(str)) {
			sum = parseInt(str.substring(0, 2)) + parseInt(str.substring(5, 7));
			newParagraph.innerHTML = 'Результат сложения = ' + sum;
			resultContainer.appendChild(newParagraph);
		} else {
			newParagraph.innerHTML = 'Результат не подходит по шаблону =(';
			resultContainer.appendChild(newParagraph);
		}
	}
}

var button = document.getElementById('button');
var generateResult = getResult('input', 'result');

//Example click listener
button.addEventListener(
	'click',
	generateResult,
	false);

