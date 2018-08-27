$(document).ready(function() {
	var canvas = $('#image');
	var ctx = canvas[0].getContext("2d");

	$('#image').on('click', function(e) {
		/*$var rect = this.getBoundingClientRect(), // abs. size of element
	    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
	    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

	    var x = (e.clientX - rect.left) * scaleX;
	    var y = (e.clientY - rect.top) * scaleY;

		var ctx = this.getContext("2d");
		
		ctx.filleStyle = "black";
		ctx.strokeStyle = "white";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();*/

		getPosition(e); 
	});
	
	var pointSize = 3;

	function getPosition(event){
		var canvas = $('#image');
		var rect = canvas[0].getBoundingClientRect();
		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;

		$('#coordinates').html(x +', '+ y); 
		drawCoordinates(x,y);
	}

	function drawCoordinates(x, y){	
		
		ctx.filleStyle = "black";
		ctx.strokeStyle = "white";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(x, y, 10, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();

		$('#coordinates').html(x +', '+ y);
	}   
});