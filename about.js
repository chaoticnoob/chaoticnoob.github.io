var w=0, h=0, mX=0, mY=0, b=0, i=0, j=-1; //Dimensions
var cW=255, cB=0; //Colors
var t1, t2; //tables
var p=[], q=[], d1=[], d2=[], d3=[], d4=[], d5=[]; //arrays

function preload() {
  t2 = loadJSON("data/data.json");
}

function setup() {

createCanvas(windowWidth, windowHeight);
background(cW,cB,cB);

for (i = 0; i < t2.resources.length; i++) 
{
    d1[i]=t2.resources[i].hh;
    d2[i]=t2.resources[i].url;
    d3[i]=t2.resources[i].des;    
    d4[i]=t2.resources[i].tags;


p[i]=random(50,windowWidth-50);
q[i]=random(50,windowHeight-50);   
}

}

function draw() {

w=width, h=height; 
    
dots();

textAlign(CENTER);
textStyle(BOLD);
textSize(12);
if(((w/3-w/50)<mouseX&&mouseX<(w/3+w/50))&&((9*h/10-w/75)<mouseY&&mouseY<(9*h/10+w/75)))
  {fill(cW);}
else
  {fill(cB);}
text('Chaotic Noob', w/3, 9*h/10);
if(((2*w/3-w/60)<mouseX&&mouseX<(2*w/3+w/60))&&((9*h/10-w/75)<mouseY&&mouseY<(9*h/10+w/75)))
  {fill(cW);}
else
  {fill(cB);}
text('Explore', 2*w/3, 9*h/10);



}

function dots(){


background(cW,cB,cB);
noStroke();
  
for (i = 0; i <= t2.resources.length; i++) 
{

  fill(cB);

  if(mouseX>p[i])
  {
    if(mouseY>q[i])
    {
      if((mouseX-p[i])<w/75&&(mouseY-q[i])<w/75)
        { 
          fill(cB);
          textAlign(LEFT);
          textStyle(BOLD);
          textSize(20);
          text(d1[i], h/10, h/10);
          textStyle(NORMAL);
          textSize(10);
          fill(cW);
          text(d4[i], (h/10)-10, ((h/10)+20));
          textSize(12);
          fill(cB);
          text(d3[i], h/10, ((h/10)+40));
          j=i;
          }
    }
    else{

      if((mouseX-p[i])<w/75&&(q[i]-mouseY)<w/75)
        { 
          fill(cB);
          textAlign(LEFT);
          textStyle(BOLD);
          textSize(20);
          text(d1[i], h/10, h/10);
          textStyle(NORMAL);
          textSize(10);
          fill(cW);
          text(d4[i], (h/10)-10, ((h/10)+20));
          textSize(12);
          fill(cB);
          text(d3[i], h/10, ((h/10)+40));
          j=i;
        }
    }
  }
  else
  {
    if(mouseY>q[i])
    {
      if((p[i]-mouseX)<w/75&&(mouseY-q[i])<w/75)
        { 
          fill(cB);
          textAlign(LEFT);
          textStyle(BOLD);
          textSize(20);
          text(d1[i], h/10, h/10);
          textStyle(NORMAL);
          textSize(10);
          fill(cW);
          text(d4[i], (h/10)-10, ((h/10)+20));
          textSize(12);
          fill(cB);
          text(d3[i], h/10, ((h/10)+40));
          j=i;
          }
    }
    else{

      if((p[i]-mouseX)<w/75&&(q[i]-mouseY)<w/75)
        { 
          fill(cB);
          textAlign(LEFT);
          textStyle(BOLD);
          textSize(20);
          text(d1[i], h/10, h/10);
          textStyle(NORMAL);
          textSize(10);
          fill(cW);
          text(d4[i], (h/10)-10, ((h/10)+20));
          textSize(12);
          fill(cB);
          text(d3[i], h/10, ((h/10)+40));
          j=i;
          }
    }
  }
    ellipse(p[i],q[i],w/75,w/75);
}



}






function mousePressed(){
if(((w/3-w/50)<mouseX&&mouseX<(w/3+w/50))&&((9*h/10-w/75)<mouseY&&mouseY<(9*h/10+w/75)))
  {    window.location.href="https://chaoticnoob.github.io/index.html"; 
  j=-1;  }
else if(((2*w/3-w/60)<mouseX&&mouseX<(2*w/3+w/60))&&((9*h/10-w/75)<mouseY&&mouseY<(9*h/10+w/75)))
  {    window.location.href="https://chaoticnoob.github.io/explore.html";
  j=-1;  }
if (j != -1) { window.open(d2[j]); }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
