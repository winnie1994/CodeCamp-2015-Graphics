var pixelsdata;
var pixels;
(function(window, document, undefined) {

    // base image to filter
    var image = document.getElementsByTagName('img')[0];
  
   image.crossOrigin="anonymous";
   // canvas context for drawing
    var imageCanvas = document.getElementById('image-canvas');
    var canvasContext = imageCanvas.getContext('2d');
    imagewidth = imageCanvas.width;
    imageheight = imageCanvas.height;
    // DOM filter buttons
    var gry = document.getElementById('f_gry'); //greyscale
    //var vgt = document.getElementById('f_vgt');
    //var crv = document.getElementById('f_crv');
    //var rbw = document.getElementById('f_rbw');
    var per = document.getElementById('f_per'); //own invention
    var stt = document.getElementById('f_stt'); //starter
    var tnt = document.getElementById('f_tnt'); //tint
    
    
    var reset = document.getElementById('reset');
    var im1 = document.getElementById('photo1');
    var im2 = document.getElementById('photo2');
    var im3 = document.getElementById('photo3');
    var im4 = document.getElementById('photo4');
    var im5 = document.getElementById('photo5');
    
    function getImageData() {
        return canvasContext.getImageData(0, 0, imagewidth,
            imageheight);
    }

    function apply(filter) {
        pixels = getImageData();
        pixelsdata = pixels.data;
        filter();
        pixels.data = pixelsdata;
        canvasContext.putImageData(pixels, 0, 0);
    }
    
    function swapImage(n){
	image = document.getElementsByTagName('img')[n-1];
    imageheight = (imageCanvas.width/image.width)*image.height;
    canvasContext.drawImage(image, 0, 0, imagewidth, imageheight);
    }

    // when window has loaded, the image is ready to be drawn on the canvas
    window.addEventListener('load', function(event) {
        // apply appropriate filters based off which buttons were clicked
        canvasContext.drawImage(image, 0, 0, imageCanvas.width, (imageCanvas.width/image.width)*image.height);
        gry.addEventListener('click', function(event) {
            apply(filterGreyscale);
            event.preventDefault();
        });
        /*
    	vgt.addEventListener('click', function(event){
	        apply(filterVignette);
    	    event.preventDefault();
	    });
        crv.addEventListener('click', function(event) {
            apply(filterColors);
            event.preventDefault();
        });

        rbw.addEventListener('click', function(event) {
            apply(filterRainbow);
            event.preventDefault();
        });
        */
        stt.addEventListener('click', function(event){
            apply(filterStarter);
            event.preventDefault();
        });
        tnt.addEventListener('click', function(event) {
            apply(filterTint);
            event.preventDefault();
        });
    	per.addEventListener('click', function(event) {
            apply(filterYours);
            event.preventDefault();
        });

        reset.addEventListener('click', function(event) {
        canvasContext.drawImage(image, 0, 0, imageCanvas.width, (imageCanvas.width/image.width)*image.height);
            event.preventDefault();
        });
	
        im1.addEventListener('click', function(event) {
            swapImage(1);        
	});
        im2.addEventListener('click', function(event) {
            swapImage(2);        
	});
        im3.addEventListener('click', function(event) {
            swapImage(3);        
	});
        im4.addEventListener('click', function(event) {
            swapImage(4);        
	});
        im5.addEventListener('click', function(event) {
            swapImage(5);        
	});

})})(this, this.document);

function setPixelRed(row,col,value){
    pixelsdata[4*(imagewidth*col+row)]=value;
}
function setPixelGreen(row,col,value){
    pixelsdata[4*(imagewidth*col+row)+1]=value;
}
function setPixelBlue(row,col,value){
    pixelsdata[4*(imagewidth*col+row)+2]=value;
}
function getPixelRed(row,col){
    return pixelsdata[4*(imagewidth*col+row)];
}
function getPixelGreen(row,col){
    return pixelsdata[4*(imagewidth*col+row)+1];
}
function getPixelBlue(row,col){
    return pixelsdata[4*(imagewidth*col+row)+2];
}
