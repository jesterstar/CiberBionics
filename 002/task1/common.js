(function(){
	var paragpraph = document.getElementsByTagName('p');

	for (var i=0; i < paragpraph.length; i++) {
		var temp = paragpraph[i];
		temp.innerHTML = 'New text';
	}
})();

var Module = {};

Module.startModule = function () {
	var paragpraph = document.getElementsByTagName('p');

	for (var i=0; i < paragpraph.length; i++) {
		var temp = paragpraph[i];
		temp.innerHTML = 'New text';
	}
};

