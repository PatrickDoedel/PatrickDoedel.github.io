const Multilineinput1 = document.getElementById("Multilineinput1");
const Multilineinput2 = document.getElementById("Multilineinput2");

function calculate() {
	Multilineinput2.value = Multilineinput1.value;
}

function drawLine() {
	var canvas = document.getElementById("myCanvas");
	var canvasCursor = canvas.getContext("2d");
	canvasCursor.moveTo(0, 0);

	for (let i = 0; i < 1; i += 0.1) {
		for (let c = 0; c < 1; c += 0.1) {
			let x = i * canvas.clientWidth;
			let y = c * canvas.clientHeight;
			canvasCursor.beginPath();
			canvasCursor.arc(x, y, Math.random() * 30, 0, 2 * Math.PI);
			canvasCursor.fill();
		}

	}
	canvasCursor.stroke();

}