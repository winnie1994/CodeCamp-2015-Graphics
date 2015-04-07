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

/**Tint: If you want a red tint, for example, you might want to adjust the red color channel's intensity. 
However, how do you want to do this? Do you increase or decrease the channel, and how? 
There are many different ways to do this, and we encourage you to experiment with different ones.
Another interesting question is: how do you make an image take on a red tint without adjusting the red color channel?*/

function filterTint(){
	//TODO: fill in!
}

/**Tint: Think about how do you want to combine dark and bright colors to form different shades of grey;
in particular, how much weight does each color carries.*/
function filterGreyscale(){
	//TODO: fill in!
}

//Your filter: Now, it is time to explore your very own filter!
function filterYours(){
	//TODO: fill in!
}
