/*
	asteroid class
*/

class Asteroid {
	constructor() {
		this.x = random(width);
		this.y = -100;
		this.size = random (65,50);
		this.speed = {
			x: random(-1, 1),
			y: random(5)
		};
        this.color = ('yellow');
	}
	
	display() {
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide() {
		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
			textSize(80);
			textAlign(CENTER, CENTER);
			fill('red');
			text("GAME OVER", width/2, height/2);
			noLoop();	
		}
	}
}



