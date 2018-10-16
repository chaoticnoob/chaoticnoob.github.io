var a,p=[],q=[],r=[], s=[], i, j, k, m, n, b=0, c=[], d=0, e, f=[], g, h=90, t, l=1;



function setup() {
createCanvas(windowWidth, windowHeight);
	setInterval(getNews,1000);
background(0);
frameRate(1);
}


function getNews() {
loadJSON("https://newsapi.org/v1/sources?language=en",gotData1);
loadJSON("https://newsapi.org/v1/articles?source="+e+"&sortBy=top&apiKey=1ea28cb7fcdc4f859f12a01515e8863b",gotData2);
}


function gotData1(data1) {
	a = data1.sources.length;
	c = data1;
//	console.log(c.sources[d].id);
	e = c.sources[d].id;
}


function gotData2(data2) {
  f = data2;
	g = data2.articles.length;
//  console.log(f);
}


function draw() {
	if(b==0){dots();}
	else{news();}
}


function dots() {
l=1;
background(0);
noStroke();
h=90;
	
for (i = 0; i < a; i++) 
{
fill(random(255));
ellipse(p[i]=random(windowWidth),q[i]=random(windowHeight),30,30);	 
}
}


function news() {
	fill(255);
	textSize(32);
	text(c.sources[d].id,30,60);
if(l)
	{
		for(k = 0; k < g; k++)
	{
  textSize(13);
	text(f.articles[k].title,90,h);
  h=h+30;
	t=f.articles[k].title;
		if(t)
			l=0;
	}}
	
}


function mousePressed() {
if(b==0){
	m=mouseX;
  n=mouseY;
  for(j = 0; j < a; j++)
     {
	
   		  r[j]=abs(p[j]-m); 
				s[j]=abs(q[j]-n);
	
		if(r[j]<50&&s[j]<50)
			{background(0);
			b=1;d=j;}
	
		 }}else{
			
		 	 b=0;
		
		 }}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
