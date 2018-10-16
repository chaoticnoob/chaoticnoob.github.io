var a, i, c=255, data, r=200;



function setup() {
a = createCanvas(windowWidth, windowHeight);
background(0);
frameRate(30);
}

function draw() {
background(0);
noStroke();

for (i = 0; i < 80; i++) 
{


fill(c);
ellipse(random(windowWidth),random(windowHeight),r/(i+1),r/(i+1));	 
}

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
