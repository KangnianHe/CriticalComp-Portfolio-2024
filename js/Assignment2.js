let bg;
let stroke1;
let body;
let a;
function setup() {
  createCanvas(400, 400);
  frameRate(20);
  rectMode(CENTER);
  bg = 20;
  stroke1 = 255;
  //a = 0;
}

function draw() {
  translate(width/2,height/2)
  x = - mouseX;
  x2 = mouseX;
  r = random(-50,-20)
  background(bg,20);
  noStroke();
  fill(stroke1);
  circle(x/8-30,-50,r);
  circle(x2/8+30,-50,r)
  push();
  rotate(8/7*PI);
  stroke(stroke1);
  strokeWeight(8);
  noFill();
  arc(-15,-40,10+mouseX/6,20+mouseY/6,0,5/7*PI);
  pop();
}

function mousePressed(){
  bg = 255;
  stroke1 = 0;
  noStroke;
  body = color(random(100, 256), random(100, 256), random(100, 256));
  fill(body)
  rect(0,30,60+mouseX/3,300,20,20)
}

function mouseReleased(){
  bg = 20;
  stroke1 = 255;
}