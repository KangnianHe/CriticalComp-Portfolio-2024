let Dog;
let DogUV;
let font;
let Day1 = [2,1,1];
let Day2 = [4,0,2];
let Day3 = [3,2,0];
let Day4 = [0,1,4];
let Day5 = [2,3,5];
let Day6 = [4,3,6];
let Day7 = [5,7,3];
let Week = [Day1,Day2,Day3,Day4,Day5,Day6,Day7];
let slider;

function preload () {
  Dog = loadModel('model/dog.obj')
  DogUV = loadImage('img/god.png')
  font = loadFont('font/BabyPlums.ttf')
}

function setup() {
  createCanvas(600, 600,WEBGL);
  slider = createSlider(0,6,0,1);
  slider.position (200,height/6)
  slider.size(200);
}

function draw() {
  let d = slider.value();
  textFont(font)
  textSize(20)
  rotateX(-PI/12)
  noStroke()
  background(130,160,140);
  orbitControl(5)
  
  push()
  rotateX(PI/2)
  fill('#d2e38f')
  circle(-220,-100,200)
  fill('#aeed93')
  circle(-70,100,200)
  fill('#d6ba83')
  circle(80,300,200)
  pop()
  
  push()
  fill('#d2e38f')
  text('Morning',-280,20)
  pop()
  push()
  translate(-110,20,200)
  fill('#aeed93')
  text('Noon',0,0)
  pop()
  push()
  translate(20,20,400)
  fill('#d6ba83')
  text('Evening',0,0)
  pop()
  
  push()
  rotateY(-PI/3)
  translate(-170,0,65)
  drawDog(Week[d][0])
  pop()
  
  push()
  translate(-15,0,160)
  rotateY(-PI/1.5)
  drawDog(Week[d][1])
  pop()
  
  push()
  rotateY(PI/1.2)
  translate(-200,0,-295)
  drawDog(Week[d][2])
  pop()
}

function drawDog(num){
  if(num > 0){
    for(i=1;i<=num;i++){
      translate(-40,0,0)
      rotateY(PI/6)
      push()
      rotateZ(PI)
      scale(10)
      texture(DogUV)
      model(Dog)
      pop()
    }
  }
  
}