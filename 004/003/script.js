function validateForm() {
	var a = 1;

	return function () {
		setInterval(function(){
			console.log(a);
		}, 1000);
	}
}

window.onload = validateForm();