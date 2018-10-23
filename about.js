var w=0, h=0, mX=0, mY=0, pX=0, pY=0, r=10, c=0; //Dimensions
var cW=255, cB=0; //Colors




function setup() {
createCanvas(windowWidth, windowHeight);
background(cB);
}

function draw() {
  w=width, h=height;
  mX=mouseX, mY=mouseY, pX=pmouseX, pY=pmouseY; 
  if(pX===mX&&pY===mY&&r>0)
    r=r-1;
  else
    r=r+1;
  
if (c===0) 
{ 
  fill(random(255),random(255),random(255));
  ellipseMode(CENTER);
  ellipse(mX, mY, r, r);
}
if(c<2)
{

}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function ChaoticNoob(){

//  noStroke();
//  fill(cB);
//    textFont(FontBlack);
//    textSize(w/30);
//    textAlign(LEFT,TOP);
      
//      text('CHAOTIC NOOB', h, h/6,w-(h/6),h/6+(w/30));

//     textFont(FontHand);
//     textSize(w/100);

//      text(t1, h, h/6+(w/20),w-(h/6),h/2);
// }

// function Home(){

// noStroke();
// background(cB);
//   fill(cW,cB,cB);
//     textFont(FontBlack);
//     textSize(w/20);
//     textAlign(LEFT,TOP);
      
//       text('Home', h, h/6,w-(h/6),h/6+(w/30));

// }

// function TextHorizontalL(){
  
//  background(cW);
//  noStroke();
//  fill(cW,cB,cB);
//    textFont(FontBlack);
//    textSize(w/20);
//    textAlign(CENTER);
  
//      T1=text('ABOUT', w/3,h/2);  

//    function mousePressed(){
//     window.open("http://www.google.com", _self);
// }
// }

// function TextVerticalL(){

//  background(cW);
//  noStroke();
//  fill(cW,cB,cB);
//    textFont(FontBlack);
//    textSize(h/10);
//    textAlign(CENTER);
      
//      T1=text('ABOUT', w/2,h/3); 

//    function mousePressed(){
//     window.open("http://www.google.com", _self);
// }  
// }

// function TextHorizontalR(){

//  background(cW,cB,cB);
//  noStroke();
//  fill(cB);
//    textFont(FontBlack);
//    textSize(w/20);
//    textAlign(CENTER);
      
//      T2=text('EXPLORE', 2*w/3,h/2);

//    function mousePressed(){
//     window.open("http://www.google.com", _self);
// }
// }

// function TextVerticalR(){

//  background(cW,cB,cB);
//  noStroke();
//  fill(cB);
//    textFont(FontBlack);
//    textSize(h/10);
//    textAlign(CENTER);
      
//      T2=text('EXPLORE', w/2,2*h/3);
//    function mousePressed(){
//     window.open("http://www.google.com", _self);
// }
// }

function mousePressed(){

  c=c+1;
  background(cB);

}