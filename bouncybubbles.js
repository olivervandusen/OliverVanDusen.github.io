var ball;
var ball2;
var ball3;
var ball4;
var gravity = 9.8/30.0;
var pushr = 5.8/30;
var pushl = 5.8/30;

class Ball {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 10;
    this.xSpeed = 0;
    this.width = width;
  }
  
  updatey(){
		if(this.y+this.width*0.5 >= height && this.ySpeed > 0) {
      this.ySpeed = this.ySpeed*(-0.8)
      this.y = height-this.width*0.5
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;
   

   this.x += this.xSpeed;
  }
  
    updatexr(){
		if(this.x+this.width*0.5 >= height && this.xSpeed > 0) {
      this.xSpeed = this.xSpeed*(-0.8)
      this.x = height-this.width*0.5
    }
   this.xSpeed += pushr;
   this.x += this.xSpeed;
   

   this.y += this.ySpeed;
  }
  
    updatexl(){
		if(this.x+this.width*0.5 >= height && this.xSpeed > 0) {
      this.xSpeed = this.xSpeed*(-0.8)
      this.x = height-this.width*0.5
    }
   this.xSpeed -= pushl;
   this.x -= this.xSpeed;
   

   this.y -= this.ySpeed;
  }
  
  draw(){
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.width)
  }
  
  reset(xp, yp){
    if(mouseIsPressed){
      this.x = mouseX - yp
      this.y = mouseY - xp
      this.xSpeed = 0
      this.ySpeed = 0
      
    }
  }
      
}

function setup() {
  createCanvas(400, 400);
  ball = new Ball(200, 200, 30)
  ball.color = "blue"
  ball2 = new Ball(100, 200, 60)
  ball2.color = "green"
  ball3 = new Ball(300, 200, 15)
  ball3.color = "red"
  ball4 = new Ball(300, 300, 10)
  ball4.color = "yellow"
  
 
}

function draw() {
  background(250, 200, 150);
  ball2.updatey();
  ball2.updatexr();
  ball2.reset(random(100), random(100));
  ball2.draw()
  
  ball.updatey();
  ball.updatexr();
  ball.reset(random(100), random(100));
  ball.draw()
  

  ball3.updatey();
  ball3.updatexr();
  ball3.reset(random(100), random(100));
  ball3.draw()
  
  ball4.updatey();
  ball4.updatexr();
  ball4.reset(random(100), random(100));
  ball4.draw()
}