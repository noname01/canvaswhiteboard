var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = 3;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var putPoint = function(pos) {
	if (dragging) {
		context.lineWidth = 2 * radius;
		context.lineTo(pos.clientX, pos.clientY);
		context.stroke();
		context.beginPath();
		context.arc(pos.clientX, pos.clientY, radius, 0, Math.PI * 2);
		context.fill();
		context.beginPath();
		context.moveTo(pos.clientX, pos.clientY);
		radius+=0.05;
	}
}


var brushDown = function(pos) {
	dragging = true;
	putPoint(pos);
}

var brushUp = function() {
	dragging = false;
	context.beginPath();
	radius = 3;
}


canvas.addEventListener("mousedown", brushDown);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", brushUp);
