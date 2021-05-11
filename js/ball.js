class Ball {
	constructor(x, y, d, speed) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.speed = speed;
		this.speedY = this.speed;
		this.speedX = this.speed;
		this.rX = this.x;
		this.ry = this.y;
	}

	display() {
		fill("WHITE")
		circle(this.x, this.y, this.d);
		this.moveY();
		this.moveX();
		this.hasCollision();
		this.collisionPlayer();
	}

	moveY() {
		this.y += this.speedY;
	}

	moveX() {
		this.x += this.speedX;
	}

	hasCollision() {
		if (this.y + this.d / 2 >= height) {
			this.speedY = - this.speed;
		} else if(this.y - this.d / 2 <= 0) {
			this.speedY = + this.speed;
		}
		if (this.x + this.d / 2 >= width) {
			p.setPoint(1);
			this.reiniciar();
		} else if(this.x - this.d / 2 <= 0) {
			p.setPoint(2);
			this.reiniciar();
		}
	}

	collisionPlayer(){
		if ((this.x - this.d / 2 <= p.ancho(p.getX1()) && this.x - this.d / 2 >= p.getX1()) && (this.y >= p.getY1() && this.y <= p.altura(p.getY1()))) {
			this.speedX = +this.speed;
		} 

		if ((this.x + this.d / 2 >= p.getX2() && this.x + this.d / 2 <= p.ancho(p.getX2())) && (this.y >= p.getY2() && this.y <= p.altura(p.getY2()))) {
			this.speedX = -this.speed;
		}
	}

	reiniciar(){
		this.x = this.rX;
		this.y = this.ry;
	}

}