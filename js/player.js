class Player {
	constructor(x, y, b, a, speed) {
		this.y2 = y;
		this.y1 = y;
		this.x1 = x;
		this.x2 = innerWidth - x;
		this.b = b;
		this.a = a;
		this.speed = speed;
		this.point1 = 0;
		this.point2 = 0;		
	}

	display() {
		this.player();
		this.hasCollision();
		
	}

	player() {
		fill("WHITE");
		rect(this.x1 ,this.y1, this.b, this.a);
		rect(this.x2,this.y2, this.b, this.a);
	}

	hasCollision() {
		if (this.y1 < height - this.a) {
			if (keyIsDown( 98 ))this.y1 += this.speed;
		} 
		if(this.y1 > 0) {
			if (keyIsDown( 104 ))this.y1 -= this.speed;
		}

		if (this.y2 < height - this.a) {
			if (keyIsDown( DOWN_ARROW ))this.y2 += this.speed;
		} 
		if(this.y2 > 0) {
			if (keyIsDown( UP_ARROW ))this.y2 -= this.speed;
		}
	}

	getY1() {
		return this.y1;
	}

	getY2() {
		return this.y2;
	}

	getX1() {
		return this.x1;
	}

	getX2() {
		return this.x2;
	}

	altura(y) {
		return y + this.a;
	}

	ancho(x) {
		return x + this.b;
	}

	setPoint(player) {
		if (player==1)return this.point1++;
		else return this.point2++;
	}

	getPoint(player) {
		if (player==1)return this.point1;
		else return this.point2;
	}

}