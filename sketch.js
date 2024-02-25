let xPos, yPos, xOld, yOld;
let t = 1;
let r, g, b;
let s1, s2, s3;

function setup() {
  createCanvas(500, 600);
  background(255);

  s1 = createSlider(0, 10, 1, 1);
  s1.position(10, height - 65);
  s1.style('width', '80px');
  s1.input(clearCanvas);
  
  s2 = createSlider(0, 10, 2, 1);
  s2.position(10, height - 35); 
  s2.style('width', '80px');
  s2.input(clearCanvas);
  
  s3 = createSlider(0, PI + 0.01, PI/2, PI/4);
  s3.position(10, height - 95); 
  s3.style('width', '80px');
  s3.input(clearCanvas);
  [re, gr, bl] = [random(255), random(255), random(255)];
}

function draw() {

  background(255, 3)
  xOld = xPos;
  yOld = yPos;

  xPos = sin(t * 0.03 * s1.value() + s3.value()) * 225 + 250; 
  yPos = sin(t * 0.03 * s2.value()) * 225 + 250; 

  t++;

  stroke(r, g, b);
  strokeWeight(3);
  line(xOld, yOld, xPos, yPos);
  
  noStroke()
  textSize(16); 
  text(`δ =  ${phaseShift()}`, 100, height - 80);
  text(`x(t) = A sin(${s1.value()} t + δ)`, 100, height - 50);
  text(`y(t) = B sin(${s2.value()} t)`, 100, height - 20)
}

function clearCanvas() {
  background(255);
  
  xOld = xPos;
  yOld = yPos;

  xPos = sin(t * 0.03 * s1.value() + s3.value()) * 225 + 250; 
  yPos = sin(t * 0.03 * s2.value()) * 225 + 250; 
  [r, g, b] = [random(255), random(255), random(255)];
}


function phaseShift() {
  if (s3.value().toFixed(2) === (PI / 4).toFixed(2)) return '0.25π'
  else if (s3.value().toFixed(2) === (PI / 2).toFixed(2)) return '0.5π'
  else if (s3.value().toFixed(2) === (3 * PI / 4).toFixed(2)) return '0.75π'
  else if (s3.value() === 0) return '0'
  else return 'π'
}

