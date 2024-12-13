let r1, r2, r3;
let butts = [];

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  rectMode(CENTER);
  angleMode(DEGREES);
  for (let o = 0; o <= minute(); o++) {
    let bx = random(80,320);
    let by = random(175,325);
    let bz = random(0,360);
    let butt = new Butt(bx,by,bz);
    butts.push(butt);
  }
}

function draw() {
  background('#99b987');
  let cig_h = 160;
  let x;
  let m = minute();
  let s = second();
  noStroke();
  
  push();
  fill(120);
  square(width/2,270,260);
  fill(255);
  for (let x=80; x<=320; x++) {
    if (x%40==0) {
      rect(x,275,30,250);
    }
  }
  pop();
  
  push();
  noFill();
  stroke(200);
  strokeWeight(10);
  square(width/2,285,280)
  stroke(255);
  strokeWeight(15);
  square(width/2,285,300)
  pop();
  

  for(let butt of butts){
    push();
    butt.display();
    pop();
  }
 
  
  push();
  colorMode(HSB);
  if (s <= 30){
        cig_h -= s*2;
        fill(240);
        rect(width/2,height-cig_h/2,40,cig_h);
        fill(30,62,91);
        rect(width/2,375,40,50)
        fill(0,85,87-s*1.5);
        rect(width/2,height-cig_h,40,10)
      }
  console.log(s)
  pop();
  
  if(s <= 30){
    fill(255);
    textSize(30);
    text("SMOKE BREAK!!!", 80,80);
  }else{
    fill(255);
    textSize(30);
    text("Back to work...",100,80);
  }
  
}

class Butt {
  constructor(x,y,z) {
    this.posX = x;
    this.posY = y;
    this.initialAngle = z;
  }
  
  display(){
    translate(this.posX,this.posY);
    rotate(this.initialAngle);
    fill(240);
    rect(0,10,10,15);
    fill('#e79f57');
    rect(0,0,10,15);
    fill(100);
    rect(0,20,10,4);
  }
}
  