var boxes = []
let i = 0

function setup() {
  createCanvas(600, 400);
  for (j = 0; j < 100 ; j++) {
    let h = random(40, 80);
    boxes [i] = new Box(random(100, 500), random(100, 300), h, h);
    i++
}}

function draw() {
  
function mouseDragged(){
  let h = random(40, 80);
    new Box(mouseX, mouseY, h, h);
    }
  background(0, 50);
  for (let n = 0; n < boxes.length; n++) {
    boxes[n].move();
    boxes[n].show();
}}

function mouseClicked(){
  for(i = 0; i < boxes.length; i++){
    boxes[i].clicked()
  }
}

class Box {
 constructor(x, y, h, w) {
   this.x = x;
   this.y = y;
   this.h = h;
   this.w = w;
   this.color = "black";
 }
  
 move() {
   this.x += random(-3, 3);
   this.y += random(-3, 3);
 }
 
 clicked(){
   let d = dist(mouseX, mouseY, this.x, this.y);
   if (d < this.w * 0.5){
     boxes.splice(i, 1);
  }
 }
  
 show() {   
   stroke(200, 30, 150);
   strokeWeight(2);
   //fill(255, 10);
   fill(this.color);
   ellipse(this.x, this.y, this.h, this.w);
 }
}