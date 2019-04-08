/*
	mmp 310 week 9
	spaceship object
*/

var spaceship = { 
	x: 0, 
	y: 100,
	size: 50,
	speed: 10,
	display: function () {
		fill('orange');
		triangle(
			this.x, this.y, 
			this.x - this.size, this.y + this.size * 2, 
			this.x + this.size, this.y + this.size * 2
		);
	},
	update: function () {
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		}
	
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed;
		}
        
        if (keyIsDown(DOWN_ARROW)) {
			this.y += this.speed;
		}
        
         if (keyIsDown(UP_ARROW)) {
			this.y -= this.speed;
		}
	}
};

var asteroids =[];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(51);
    if (random(100)>99){
    asteroids.push(new Asteroid());
    
    }
	
	spaceship.display();
	spaceship.update();
    
    for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}







