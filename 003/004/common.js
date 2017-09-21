var w;

function openWindow() {
	w = window.open('window.html',
		'New Window',
		'width=' + screen.availWidth/2 + ',height=' + screen.availHeight/2 + ',top=' + screen.availHeight/4 + ',left=' + screen.availWidth/4);
}
function closeWindow() {
	w.close();
}

function getResult(id) {
	var el = document.getElementById(id);

	return function () {
		if (el.innerHTML.length == 11) {
			el.innerHTML = el.innerHTML + ' (openned)';
			openWindow();
		} else {
			el.innerHTML = el.innerHTML.replace(' (openned)', '');
			closeWindow();
		}
	}
}

var buttons = document.getElementsByTagName('a');

for (var i=0; i < buttons.length; i++) {
	var button = buttons[i].id;
	var generateOpen = getResult(button);
	buttons[i].addEventListener('click', generateOpen, false);
}
