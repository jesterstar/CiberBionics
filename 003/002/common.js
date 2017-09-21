function getQueryString() {
	var args = {};
	var sum = 0;
	var query = location.search.substring(1);
	var pairs = query.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos == -1) {
			continue;
		}
		var argname = pairs[i].substring(0, pos);
		var value = pairs[i].substring(pos + 1);
		args[argname] = value;
	}

	for (var j in args) {
		if (isNumeric(args[j])) {
			sum = sum + parseInt(args[j]);
		}
	}

	return {sum , args};
}

//Проверка на число
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Для теста примера перейдите по URL текущей страницы + ?login=admin&password=123
function print() {
	var args = getQueryString();
	var e = document.createElement("p");

	e.innerHTML = "sum: " + args.sum;

	document.body.appendChild(e);
}