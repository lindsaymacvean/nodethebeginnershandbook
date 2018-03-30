function start() {
	console.log("Request handler 'start' was called.");

	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (true) {
			var i = new Date().getTime();
			if (i > startTime + milliSeconds) {
				return;
			}
		}
	}
	sleep(10000);
	return "Hello Start";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;