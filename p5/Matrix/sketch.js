var sym, symSize=60;

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	background(0);
	sym = new symbol(width/2,height/2);
	sym.setToRandomSymbol();
	textSize(symSize);
}

function draw() {
sym.render();
}

function symbol(x,y){
this.x = x;
this.y = y;
this.value;

this.setToRandomSymbol = function(){
	this.value = String.fromCharCode(
		0x0900 + round(random(4,35)));
}
this.render =function(){
	fill(0,255,70);
	text(this.value,this.x,this.y);
}
}

function stream(){

}

