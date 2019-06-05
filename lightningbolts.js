var x = 30
function setup() {
createCanvas(500, 500);
background(0)
}

function draw() {
if (mouseIsPressed) {
fill(random(mouseX), 0, random(mouseY), 50);
} else {
fill(random(mouseX), 100, random(mouseY), 50);}
quad(mouseX+x, mouseY-x, mouseX, mouseY-x, mouseX+x, mouseY-x-x, mouseX, mouseY);
noStroke()
}