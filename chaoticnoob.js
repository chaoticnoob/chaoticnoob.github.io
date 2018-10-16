var w=0, h=0, mX=0, mY=0, pX=0, pY=0; //Dimensions
var cW=255, cB=0; //Colors
var T1=0, T2=0; //Elements
var Font;	//Font

function preload() {
Font = loadFont('Roboto-Black.ttf');
}

function setup() {
c=createCanvas(windowWidth, windowHeight);
	frameRate(10);
}

function draw() {
	w=width, h=height;
	mX=mouseX, mY=mouseY, pX=pmouseX, pY=pmouseY;
	
background(cB);

		stroke(cW);
		line(mX,mY,pX,pY);
	
if (w>h) 
{	
if (((h/2)-50<mY&&mY<(h/2)+50)&&((w/3)-50<mX&&mX<(w/3)+50))
{
		TextHorizontalL()
} 
else if (((h/2)-50<mY&&mY<(h/2)+50)&&((2*w/3)-50<mX&&mX<(2*w/3)+50)) 
{
		TextHorizontalR()
}
else 
{
		TextHorizontal()
}
} else 
{
if (((h/3)-50<mY&&mY<(h/3)+50)&&((w/2)-50<mX&&mX<(w/2)+50))
{
		TextVerticalL()
} 
else if (((2*h/3)-50<mY&&mY<(2*h/3)+50)&&((w/2)-50<mX&&mX<(w/2)+50)) 
{
		TextVerticalR()
}
else 
{
		TextVertical()
}
}

	}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function TextHorizontal(){

	noStroke();
	fill(cW);
  	textFont(Font);
  	textSize(w/40);
  	textAlign(CENTER);
  		
  		T1=text('CHAOTIC NOOB', w/3,h/2);
  		T2=text('PROJECTS', 2*w/3,h/2);
}

function TextVertical(){
	
	noStroke();
	fill(cW);
  	textFont(Font);
  	textSize(h/30);
  	textAlign(CENTER);
  		
  		T1=text('CHAOTIC NOOB', w/2,h/3);
  		T2=text('PROJECTS', w/2,2*h/3);
}

function TextHorizontalL(){
	
	background(cW);
	noStroke();
	fill(cW,cB,cB);
  	textFont(Font);
  	textSize(w/40);
  	textAlign(CENTER);
  		
  		T1=text('CHAOTIC NOOB', w/3,h/2);	
}

function TextVerticalL(){

	background(cW);
	noStroke();
	fill(cW,cB,cB);
  	textFont(Font);
  	textSize(h/30);
  	textAlign(CENTER);
  		
  		T1=text('CHAOTIC NOOB', w/2,h/3);  	
}

function TextHorizontalR(){

	background(cW,cB,cB);
	noStroke();
	fill(cB);
  	textFont(Font);
  	textSize(w/40);
  	textAlign(CENTER);
  		
  		T2=text('PROJECTS', 2*w/3,h/2);
}

function TextVerticalR(){

	background(cW,cB,cB);
	noStroke();
	fill(cB);
  	textFont(Font);
  	textSize(h/30);
  	textAlign(CENTER);
  		
  		T2=text('PROJECTS', w/2,2*h/3);
}