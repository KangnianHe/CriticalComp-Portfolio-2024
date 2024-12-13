let RECT_AMOUNT,RECT_SIZE,DEGREE;
let COLOR1, COLOR2;
let x = 0;
function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  RECT_SIZE = 15
  RECT_AMOUNT = width/RECT_SIZE
  DEGREE = -0.025
}

function draw() {
  COLOR1 = color (x++,70,80)
  COLOR2 = color (x++,90,70)
  background(COLOR2);
  translate(width / 2, height / 2);
  noStroke();
  rectMode(CENTER);
  for (let i = RECT_AMOUNT; i > 0; i--) {
    if (x < 360) {
      fill(i % 2 === 0 ? COLOR1 : COLOR2);
      rotate(DEGREE += 0.0001);
      rect(0, 0, RECT_SIZE * i, RECT_SIZE * i);
    } else {
      x = 0;
      fill(i % 2 === 0 ? COLOR1 : COLOR2);
      rotate(DEGREE += 0.0001);
      rect(0, 0, RECT_SIZE * i, RECT_SIZE * i);
    }
  }
}