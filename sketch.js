var img = [];
var ImageHover;

function preload() {
	img[0]=loadImage("1.jpg");
	img[1]=loadImage("2.jpg");
	img[2]=loadImage("3.jpg");
	img[3]=loadImage("4.jpg");
	img[4]=loadImage("5.jpg");
	img[5]=loadImage("6.jpg");
	img[6]=loadImage("7.jpg");
	img[7]=loadImage("8.jpg");
	img[8]=loadImage("9.jpg");
	img[9]=loadImage("10.jpg");
	img[10]=loadImage("11.jpg");
	img[11]=loadImage("12.jpg");
	img[12]=loadImage("13.jpg");
	img[13]=loadImage("14.jpg");
	img[14]=loadImage("15.jpg");
	img[15]=loadImage("16.jpg");
	img[16]=loadImage("17.jpg");
	img[17]=loadImage("18.jpg");
	img[18]=loadImage("19.jpg");
	img[19]=loadImage("20.jpg");
	img[20]=loadImage("21.jpg");
	img[21]=loadImage("22.jpg");
	img[22]=loadImage("23.jpg");
}

function setup() {
  createCanvas(960,640);
	img.mouseOver(ImageHover);
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

function ImageHover() {
	image(img[0],0,0,360,360);
}

}
