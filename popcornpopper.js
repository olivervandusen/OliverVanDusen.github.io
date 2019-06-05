let gravity = 9.8/30
let balls=[];
let numBalls=80;
let popcount = 0
let popped = 0

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new PopcornBall (
    random(width),
    random(height) 
    );
  }
}
function draw() {
  background(155, 200);
  rect(0, 400, 500, 100);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].bounce();
    balls[i].move();
    balls[i].pop();
  }
}
class PopcornBall {
  constructor(x, y) { // we could add radius or r to the constructor
    this.x = x;
    this.y = y;
    this.xspeed = random(2, 8);
    this.yspeed = -9;
    this.r = 15;
    
  }
  
  move() {
    
    this.yspeed += gravity;
    this.y += this.yspeed;
    this.x += this.xspeed;
    fill(this.x, this.y, 0);
  }
  
  bounce() {
    if (this.y >= 400){
       this.y = 400 - 15 
       this.yspeed = this.yspeed*(-.8);
       popcount++
    }
    
    if (this.x >= width){
      this.xspeed = this.xspeed*(-.8);
      this.x = width
      popcount++
    }
    
    if (this.x <= 0){
      this.xspeed = this.xspeed*(-.8);
      this.x = 0
      popcount++
    }
    
  }
  
  pop() {
    if (mouseIsPressed){
      this.x = random(150, width - 150)
      this.y = random(50, 350)
      this.yspeed = random(-50, 50)
      this.xspeed = random(-50, 50)
    }
    
    if (popcount >= 50){
      this.x = random(150, width - 150)
      this.y = random(50, 350)
      this.yspeed = random(-50, 50)
      this.xspeed = random(-50, 50)
      popcount = 0
      this.r += 30
      popped++
    }
    
    if(this.r >=60){
      this.x = 100000000
    }
  }
  
  display() {
    fill(this.x, this.y, 255); 
    ellipse(this.x, this.y, this.r, this.r);
    
  }
}