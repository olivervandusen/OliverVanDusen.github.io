var boxes = []
//let clear = true;
let i = 0

function setup() {
  createCanvas(600, 400)
    boxes.splice(0, i)
    i = 0;
    clearbutton = createButton("clear");
    clearbutton.position(290, 390);
    clearbutton.mousePressed(setup);

}

function mouseDragged() {
  let h = random(10, 50);
  let w = random(10, 50);
  boxes [i] = new Box(mouseX, mouseY, h, w);
  console.log("hi")
  i++
}
  
function draw() {
  background(0, 50);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].move();
    boxes[i].show();
  }


  //function clear() {
    //  boxes.splice(0, i)
  //}
}

class Box {
 constructor(x, y, h, w) {
   this.x = x;
   this.y = y;
   this.h = h;
   this.w = w;
 }
  
 move() {
   this.x += random(-3, 3);
   this.y += random(-3, 3);
 }
  
 show() {   
   stroke(200, 30, 150);
   strokeWeight(2);
   //fill(255, 10);
   noFill();
   rect(this.x, this.y, this.h, this.w);
 }
}