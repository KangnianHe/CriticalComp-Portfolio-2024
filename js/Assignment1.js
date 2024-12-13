let wiggleShader;

let vertSrc = `
precision highp float;

attribute vec3 aPosition;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec4 vVertexColor;

uniform float time;

void main() {
  vec3 position = aPosition;

  // Add an offset per vertex. There will be a time delay based
  // on the texture coordinates.
  position.y += 10.0 * sin(time * 0.01 + position.y * 0.06);

  vec4 viewModelPosition = uModelViewMatrix * vec4(position, 1.0);
  gl_Position = uProjectionMatrix * viewModelPosition;  

  // Pass along the color of the vertex to the fragment shader
  vVertexColor = aVertexColor;
}
`;

let fragSrc = `
precision highp float;
varying vec4 vVertexColor;

void main() {
  // Color the pixel with the vertex color
  gl_FragColor = vVertexColor;
}
`;

let ribbon1;
let ribbon2;
function preload(){
  
}
function setup() {
  createCanvas(400, 400, WEBGL);
  wiggleShader = createShader(vertSrc, fragSrc);
  ribbon1 = buildGeometry(() => {
    beginShape(QUAD_STRIP);
    let numPoints = 50;
    for (let currentPoint = 0; currentPoint < numPoints; currentPoint++) {
      let x = map(currentPoint, 0, numPoints - 1, -width / 3, width / 3);
      let y = map(currentPoint, 0, numPoints - 1, -height / 3, height / 3);
      fill(120, 80, 83);
      for (let z of [-50, 50]) {
        vertex(x, y, z/2);
      }
    }
    endShape();
  });
  ribbon2 = buildGeometry(() => {
    beginShape(QUAD_STRIP);
    let numPoints = 50;
    for (let currentPoint = 0; currentPoint < numPoints; currentPoint++) {
      let x = map(currentPoint, 0, numPoints - 1, -width / 3, width / 3);
      let y = map(currentPoint, 0, numPoints - 1, -height / 3, height / 3);
      fill(255);
      for (let z of [-50, 50]) {
        vertex(x, y, z/2);
      }
    }
    endShape();
  });
}

function draw() {
  background(255,203,199);
  noStroke();

  rotateX(PI * 0.1);
  orbitControl();
  shader(wiggleShader);
  wiggleShader.setUniform('time', millis());
  model(ribbon1);
  translate(width/45,height/40,5);
  model(ribbon2);
}