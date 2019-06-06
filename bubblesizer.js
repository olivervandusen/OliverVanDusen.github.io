var M = 0
var speed = 3
var s = 200
function setup() {
  createCanvas(700, 400);
	background(220);
}

function draw() { 
	button = createButton('Smaller');
	button.position(random(60, 62), random(380, 382));
	button.mousePressed(sizeless);
  
  button = createButton('Bigger');
	button.position(random(120, 122), random(380, 382));
	button.mousePressed(sizeplus);
	
  circle(M, 200, s);
	M = M + speed
	fill(150, 10, random(400))
	
	if (M > width) {
		speed = -3
	}
  
	if (M < 0) {
		speed = 3
  }
  
  function sizeless() {
  	s = s - 10
  }
	
  function sizeplus() {
    s = s + 10
  }
}
