//Constants
var MAX_PARAGRAPH = 10;

//First example
function addParagraph(el) {
	var container = document.getElementById(el);

	//Check paragraph on page
	var allParagpraph = document.getElementsByTagName('p');

	if (allParagpraph.length < MAX_PARAGRAPH) {
		var newParagraph = document.createElement('p');

		newParagraph.innerHTML = 'New paragraph ' + allParagpraph.length;
		container.appendChild(newParagraph);
	} else {
		//Remove all paragraph
		container.innerHTML = '';
	}
}

//Second example
function initParagraphGenerator(id) {
	var container = document.getElementById(id);
	var iterator = 0;

	return function () {
			if (iterator < MAX_PARAGRAPH) {
				var newParagraph = document.createElement('p');
				newParagraph.innerHTML = 'New paragraph ' + iterator;
				container.appendChild(newParagraph);
			} else {
				container.innerHTML = '';
				iterator = 0;
				return;
			}
			iterator++;
	}
}

//Adding event listener
var button = document.getElementById('button');

var generateDivs = initParagraphGenerator('div');

//First example
button.addEventListener(
	'click',
	function(){addParagraph('div')},
	false);

//Second example
/*button.addEventListener(
	'click',
	generateDivs,
	false);*/
