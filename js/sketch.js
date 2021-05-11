const b = new Ball (700, 200, 25, 8);
const p = new Player (100, innerHeight/2, 20, 80, 8);
let init = false

function setup(){
	createCanvas(innerWidth,innerHeight);
}

function draw(){
	background('red');
	if (init) {
		b.display();
		p.display();
		textSize(20);
		fill("WHITE");
		textStyle(BOLD);
		text("Jugador1: " + p.getPoint(1), width/2 - 100 , 50);
		text("Jugador2: " + p.getPoint(2), width/2 + 100, 50);
	} else {
		textSize(20);
		fill("WHITE");
		textStyle(BOLD);
		textAlign(CENTER);
		text("Presiona enter para iniciar", width/2 , height/2);
		text("Jugador1: 8-arriba, 2-abajo", width/2 , height/2 + 20);
		text("Jugador2: flecha arriba, flecha abajo", width/2 , height/2 + 40);
	}
}

function keyPressed() {
	if (keyCode === ENTER) {
		init = true;
	}

}