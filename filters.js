var imagewidth;
var imageheight;

function filterYours(pixels, width, height){}
//greyscale!
function filterGreyscale(){

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
}

//filter on position and color!
function filterRainbow(pixels,width,height) {
}





