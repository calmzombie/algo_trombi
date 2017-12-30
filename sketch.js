var img = [];

function preload() {
	soundFormats('mp3', 'ogg');
	mySound = loadSound('music.mp3');

	img[0]=loadImage("images/1.jpg");
	img[1]=loadImage("images/2.jpg");
	img[2]=loadImage("images/3.jpg");
	img[3]=loadImage("images/4.jpg");
	img[4]=loadImage("images/5.jpg");
	img[5]=loadImage("images/6.jpg");
	img[6]=loadImage("images/7.jpg");
	img[7]=loadImage("images/8.jpg");
	img[8]=loadImage("images/9.jpg");
	img[9]=loadImage("images/10.jpg");
	img[10]=loadImage("images/11.jpg");
	img[11]=loadImage("images/12.jpg");
	img[12]=loadImage("images/13.jpg");
	img[13]=loadImage("images/14.jpg");
	img[14]=loadImage("images/15.jpg");
	img[15]=loadImage("images/16.jpg");
	img[16]=loadImage("images/17.jpg");
	img[17]=loadImage("images/18.jpg");
	img[18]=loadImage("images/19.jpg");
	img[19]=loadImage("images/20.jpg");
	img[20]=loadImage("images/21.jpg");
	img[21]=loadImage("images/22.jpg");
	img[22]=loadImage("images/23.jpg");
}

function setup() {
  createCanvas(960,640);
	mySound.setVolume(0.1);
	mySound.loop();

	function mouseOver(){
		filter(BLUR, 6);
	}
}

function draw() {
image(img[0], 0, 0, 160,160);
image(img[1], 160, 0, 160,160);
image(img[2], 320, 0, 160,160);
image(img[3], 480, 0, 160,160);
image(img[4], 640, 0, 160,160);
image(img[5], 800, 0, 160,160);
image(img[7], 0, 160, 160,160);
image(img[8], 160, 160, 160,160);
image(img[9], 320, 160, 160,160);
image(img[10], 480, 160, 160,160);
image(img[11], 640, 160, 160,160);
image(img[12], 800, 160, 160,160);
image(img[14], 0, 320, 160,160);
image(img[15], 160, 320, 160,160);
image(img[16], 320, 320, 160,160);
image(img[17], 480, 320, 160,160);
image(img[18], 640, 320, 160,160);
image(img[19], 800, 320, 160,160);
image(img[21], 0, 480, 160,160);
image(img[22], 160, 480, 160,160);
image(img[6], 320, 480, 160,160);
image(img[13], 480, 480, 160,160);
image(img[20], 640, 480, 160,160);
}
