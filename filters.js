var imagewidth;
var imageheight;

function filterYours(pixels, width, height){}
//greyscale!
function filterGreyscale(){
for(var r = 0; r < imagewidth; r++){
	for(var c = 0; c < imageheight;c++){
		var average = (getPixelRed(r,c)+getPixelGreen(r,c)+getPixelBlue(r,c))/3;
		setPixelRed(r,c,average);
		setPixelGreen(r,c,average);
		setPixelBlue(r,c,average);
	}
}
}

//filter on color!
function filterColors() {
for(var r = 0; r < imagewidth; r++){
	for(var c = 0; c < imageheight;c++){
		var newGreenPixel = 1.2*getPixelGreen(r,c)-40;
		setPixelGreen(r,c,newGreenPixel);
		var newBluePixel = 0.9*getPixelBlue(r,c);
		setPixelBlue(r,c,newBluePixel);
	}
	}
}


//filter on position
function filterVignette(pixels, width, height){
	var mid_r = imagewidth/2;
	var mid_c = imageheight/2;
	var radius =0.6* Math.max(imagewidth, imageheight);
	for(var r = 0; r < imagewidth; r++){
		for(var c = 0; c < imageheight; c++){
			var distance = (r-mid_r)*(r-mid_r)+(c-mid_c)*(c-mid_c);
			var newRedPixel = getPixelRed(r,c)*(1-(distance)/(radius*radius));
			setPixelRed(r,c,newRedPixel);
			var newGreenPixel = getPixelGreen(r,c)*(1-(distance)/(radius*radius));
			setPixelGreen(r,c,newGreenPixel);
			var newBluePixel = getPixelBlue(r,c)*(1-(distance)/(radius*radius));
			setPixelBlue(r,c,newBluePixel);
		}
	}	


}







//filter on position and color!

function filterRainbow(pixels,width,height) {
for(var r = 0; r < imagewidth; r++){
	for(var c = 0; c < imageheight; c++){
		var red = 255*Math.abs(Math.cos(Math.PI*(r/imagewidth)));
		var green = 255*Math.abs(Math.cos(Math.PI*(1/6.0+(r/imagewidth))));
		var blue = 255*Math.abs(Math.cos(Math.PI*(1/3.0+(r/imagewidth))));
		
		var newRedPixel = 0.8*getPixelRed(r,c)+0.2*red;
		setPixelRed(r,c,newRedPixel);
		var newGreenPixel = 0.8*getPixelGreen(r,c)+0.2*green;
		setPixelGreen(r,c,newGreenPixel);
		var newBluePixel = 0.8*getPixelBlue(r,c)+0.2*blue;
		setPixelBlue(r,c,newBluePixel);
		}	
	}
	return pixels;
}





