var w=0, h=0, mX=0, mY=0, pX=0, pY=0; //Dimensions
var cW=255, cB=0; //Colors
var T1=0, T2=0; //Elements
var FontBlack;	//Font

function preload() {
FontBlack = loadFont('TitilliumWeb-Black.ttf');
}

function setup() {
c=createCanvas(windowWidth, windowHeight);
c.mousePressed(Click);
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
if (((h/2)-50<mY&&mY<(h/2))&&((w/3)-200<mX&&mX<(w/3)+200))
{		

		TextHorizontalL()
} 
else if (((h/2)-50<mY&&mY<(h/2))&&((2*w/3)-100<mX&&mX<(2*w/3)+100)) 
{
		TextHorizontalR()
}
else 
{
		TextHorizontal()
}
} else 
{
if (((h/3)-50<mY&&mY<(h/3))&&((w/2)-100<mX&&mX<(w/2)+100))
{
		TextVerticalL()
} 
else if (((2*h/3)-50<mY&&mY<(2*h/3))&&((w/2)-100<mX&&mX<(w/2)+100)) 
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
  	textFont(FontBlack);
  	textSize(w/30);
  	textAlign(CENTER,BASELINE);
  		
  		T1=text('CHAOTIC NOOB', w/3,h/2);
  		T2=text('PROJECTS', 2*w/3,h/2);
}

function TextVertical(){
	
	noStroke();
	fill(cW);
  	textFont(FontBlack);
  	textSize(h/20);
  	textAlign(CENTER,BASELINE);
  		
  		T1=text('CHAOTIC NOOB', w/2,h/3);
  		T2=text('PROJECTS', w/2,2*h/3);
}

function TextHorizontalL(){
	
	background(cW);
	noStroke();
	fill(cW,cB,cB);
  	textFont(FontBlack);
  	textSize(w/20);
  	textAlign(CENTER);
  
  		T1=text('ABOUT', w/3,h/2);	

  	function mousePressed(){
    window.open("http://www.google.com", _self);
}
}

function TextVerticalL(){

	background(cW);
	noStroke();
	fill(cW,cB,cB);
  	textFont(FontBlack);
  	textSize(h/10);
  	textAlign(CENTER);
  		
  		T1=text('ABOUT', w/2,h/3); 

  	function mousePressed(){
    window.open("http://www.google.com", _self);
} 	
}

function TextHorizontalR(){

	background(cW,cB,cB);
	noStroke();
	fill(cB);
  	textFont(FontBlack);
  	textSize(w/20);
  	textAlign(CENTER);
  		
  		T2=text('EXPLORE', 2*w/3,h/2);

  	function mousePressed(){
    window.open("http://www.google.com", _self);
}
}

function TextVerticalR(){

	background(cW,cB,cB);
	noStroke();
	fill(cB);
  	textFont(FontBlack);
  	textSize(h/10);
  	textAlign(CENTER);
  		
  		T2=text('EXPLORE', w/2,2*h/3);
  	function mousePressed(){
    window.open("http://www.google.com", _self);
}
}

function Click(){
	if (w>h) {	
	if (((h/2)-100<mY&&mY<(h/2)+100)&&((w/3)-200<mX&&mX<(w/3)+200))	{		
    window.location.href="https://chaoticnoob.github.io/about.html";
}else if (((h/2)-50<mY&&mY<(h/2)+50)&&((2*w/3)-100<mX&&mX<(2*w/3)+100)) {
    window.location.href="https://chaoticnoob.github.io/explore.html";
} 
}else  {	
	if (((h/3)-150<mY&&mY<(h/3))&&((w/2)-50<mX&&mX<(w/2)+50))	{		
    window.location.href="https://chaoticnoob.github.io/about.html";
}else if (((2*h/3)-50<mY&&mY<(2*h/3)+50)&&((w/2)-50<mX&&mX<(w/2)+50)) {
    window.location.href="https://chaoticnoob.github.io/explore.html";
}
} 

}