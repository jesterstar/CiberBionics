window.onload = function () {
	var DEFAULT_VALUE = '00';
	var DEFAULT_BREAKPOINT = 60;
	var timer_seconds = 0,
			timer_mitunes = 0,
			timer_hours   = 0;
	var intervalHandler;

	function count(){
		timer_seconds++;
		if (timer_seconds >= DEFAULT_BREAKPOINT) {
			timer_mitunes++;
			timer_seconds = 0;
		}
		if (timer_mitunes >= DEFAULT_BREAKPOINT) {
			timer_hours++;
			timer_mitunes = 0;
		}
		get("seconds").innerHTML = ('0' + timer_seconds).slice(-2);
		get("minutes").innerHTML = ('0' + timer_mitunes).slice(-2);
		get("hours").innerHTML = '0' + timer_hours;
	}

	get("start").onclick = function () {
		intervalHandler = setInterval(count, 1000);
	};

	get("stop").onclick = function () {
		clearInterval(intervalHandler);
	};

	get("clear").onclick = function () {
		clearInterval(intervalHandler);
		timer_seconds = timer_mitunes = timer_hours = 0;
		get("hours").innerHTML = DEFAULT_VALUE;
		get("minutes").innerHTML = DEFAULT_VALUE;
		get("seconds").innerHTML = DEFAULT_VALUE;
	};
};

var get = function (id){
	return document.getElementById(id);
};