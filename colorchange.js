var words = ["Red", "Green", "Blue", "Orange", "Pink", "Yellow"];
let d;
var i = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(300, 100, 150, 150)
  textSize(50);
  text(words[i], 50, 200);
  text(d, 50, 300)
  ellipse(300, 300, 150, 150);
  fill(words[i]);
  if (mouseIsPressed){
  i++
  d = random(words);
  if (i > 5){
   i = 0 
  }
  }
}