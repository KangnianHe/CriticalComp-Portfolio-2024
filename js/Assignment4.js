let img;

function preload(){
  img = loadImage('img/corpse.png');
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent('sketch-container');
}

function draw() {
  background(255);
  
  if (mouseIsPressed == true){
    image(img,0,0,400,600);
      } else {
    HEAD();
    LEGS();
    TORSO();
      }
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function HEAD(){
  push();
  ellipseMode(CENTER);
  noStroke();
  fill('#82262c')
  ellipse(200,130,200,120)
  fill(255);
  beginShape();
  bezier(120,130,140,110,160,110,180,130);
  bezier(180,130,160,150,140,150,120,130);
  endShape(CLOSE);
  beginShape();
  bezier(220,130,240,110,260,110,280,130);
  bezier(280,130,260,150,240,150,220,130);
  endShape(CLOSE);
  fill(0);
  ellipse(150,130,20,30);
  ellipse(250,130,20,30);
  pop();
}

function TORSO(){
  rectMode(CENTER);
  push();
  beginShape();
  vertex(184,190);
  vertex(174,200);
  vertex(164,194);
  vertex(142,198);
  vertex(145,206);
  vertex(141,208);
  bezierVertex(144,215,150,221,166,230);
  bezierVertex(176,249,176,261,175,287);
  bezierVertex(137,315,120,349,105,387);
  vertex(112,391);
  vertex(105,409);
  bezierVertex(125,447,188,441,287,427);
  vertex(252,339);
  vertex(298,423);
  bezierVertex(309,423,325,410,326,403);
  bezierVertex(299,339,290,328,245,290);
  vertex(229,286);
  vertex(238,230);
  bezierVertex(260,230,271,229,277,208);
  bezierVertex(263,194,261,193,241,195);
  vertex(232,186);
  vertex(204,190);
  endShape(CLOSE);
  
  beginShape();
  vertex(177,197);
  vertex(183,210);
  vertex(232,202);
  vertex(227,208);
  vertex(180,217);
  vertex(171,204);
  endShape(CLOSE);
  
  beginShape();
  vertex(175,280);
  vertex(230,282);
  vertex(229,286);
  vertex(174,287);
  endShape(CLOSE);
  
  beginShape();
  vertex(112,391);
  bezierVertex(135,400,185,400,258,393);
  bezierVertex(252,362,249,353,239,334);
  bezierVertex(228,317,224,315,226,286);
  vertex(220,286);
  bezierVertex(220,317,220,317,233,338);
  bezierVertex(240,350,245,358,249,386);
  bezierVertex(171,388,138,398,108,380);
  endShape();
  
  bezier(234,226,216,223,240,199,272,210);
  
  pop();
  
  push();
  beginShape();
  vertex(248,226);
  vertex(268,223);
  vertex(280,248);
  vertex(217,258);
  vertex(203,262);
  vertex(191,267);
  vertex(197,261);
  vertex(184,264);
  vertex(178,261);
  vertex(186,254);
  vertex(193,251);
  vertex(178,250);
  vertex(197,245);
  vertex(189,239);
  vertex(210,246);
  vertex(252,236);
  endShape(CLOSE);
  
  beginShape();
  vertex(170,242);
  vertex(125,239);
  bezierVertex(123,213,95,238,120,250)
  vertex(178,260);
  endShape();
  pop();
  
}

function LEGS(){
  push();
  fill('#ffe6d6')
  beginShape();
  vertex(172,428);
  bezierVertex(176,468,178,488,192,544);
  vertex(204,544)
  bezierVertex(204,500,206,490,194,437);
  endShape();
  beginShape();
  vertex(197,427)
  vertex(192,451)
  vertex(228,546)
  vertex(240,546)
  bezierVertex(238,486,236,480,224,454)
  vertex(228,423)
  endShape();
  pop();
  push();
  fill(0);
  beginShape();
  vertex(185,522);
  vertex(199,519);
  vertex(207,520);
  vertex(207,529);
  vertex(210,539);
  vertex(209,577);
  bezierVertex(197,580,196,585,186,575);
  vertex(185,560);
  vertex(188,546);
  vertex(186,542);
  vertex(190,538);
  endShape(CLOSE);
  beginShape();
  vertex(221,526);
  vertex(223,539);
  vertex(217,574);
  vertex(217,583);
  bezierVertex(240,589,237,591,243,574);
  vertex(247,524);
  vertex(240,521);
  vertex(241,525);
  vertex(236,527);
  endShape(CLOSE);
  pop();
  
}

function mousePressed(){
}