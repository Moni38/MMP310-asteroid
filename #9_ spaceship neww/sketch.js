/*
	mmp 310 week 9
	spaceship object
*/

var spaceship = { 
	x: 350, 
	y: 200,
	w:20,
	h:85,
	size: 70,
	speed: 10,
	display: function () {
		
		fill('orange');
		triangle(
			this.x, this.y, 
			this.x - this.size/2, this.y + this.size * 2, 
			this.x + this.size/2, this.y + this.size * 2);
		
		fill('orange');
		ellipse(this.x +50, this.y + 35,this.w, this.h); 
		
		fill('orange');
		ellipse(this.x -50, this.y +35,this.w, this.h); 
		
		fill('orange');
        ellipse(this.x, this.y + this.size *2, this.size/2);
		
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







