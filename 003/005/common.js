function getResult(id, result) {
	var el = document.getElementById(id);
	var resultContainer = document.getElementById(result);

	return function () {
		resultContainer.innerHTML = '';
		var newParagraph = document.createElement('p');
		var str = el.value;
		newParagraph.innerHTML = str;

		if (str != null && str.length) {
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

