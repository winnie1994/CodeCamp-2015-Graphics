var imagewidth;
var imageheight;

//starter
function filterStarter(){
	for(var r = 0; r < imagewidth; r++){
		for(var c = 0; c < imageheight; c++){
			var redValue = getPixelRed(r,c);
			var greenValue = getPixelGreen(r,c);
			var blueValue = getPixelBlue(r,c);
			var newRedValue = redValue/2;
			var newGreenValue = greenValue/2;
			var newBlueValue = blueValue/2;
			setPixelRed(r,c,newRedValue);
			setPixelGreen(r,c,newGreenValue);
			setPixelBlue(r,c,newBlueValue);
		}
	}
}

//tint
function filterTint(){
	//TODO: fill in!
}

//greyscale!
function filterGreyscale(){
	//TODO: fill in!
}

//your filter!
function filterYours(){
	//TODO: fill in!
}