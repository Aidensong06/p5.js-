let color1, color2;

function setup() {
  createCanvas(600, 400);
  color1 = color(100, 180, 100, 200); 
  color2 = color(255, 100, 150, 200); 
}

function draw() {
  background(212, 233, 255);
  let Atime = frameCount * 0.05; 

  noStroke();
  
  fill(250, 0, 0); 
  let redW = 300 + sin(Atime * 0.5) * 10;
  rect(0, 0, redW, 400);
  
  fill(50, 50, 150); 
  let blueH = 250 + cos(Atime * 0.5) * 10;
  rect(300, 150 + (250 - blueH), 300, blueH); 
  
  noFill();            
  stroke(255, 255, 255); 
  strokeWeight(1);
  let pulseSize = 300 + sin(Atime) * 15; 
  ellipse(150, 150, pulseSize, pulseSize);

  fill(255, 200, 0);
  let moveY = cos(Atime) * 15;
  triangle(150, 50 + moveY, 450, 50 + moveY, 300, 350 + moveY);
  
  colorMode(HSB, 360, 100, 100, 255); 
  let hueVal = (millis() * 0.04) % 360; 
  fill(hueVal, 60, 80, 200); 
  let triOffset = sin(Atime * 0.8) * 10;
  triangle(0, 400, 150 + triOffset, 200 - triOffset, 300, 400);
  colorMode(RGB, 255); 

  stroke(255);
  strokeWeight(5);
  fill(50, 50, 50); 
  let circleX = 450 + sin(Atime) * 5;
  let circleY = 120 + cos(Atime) * 5;
  ellipse(circleX, circleY, 100, 100);
  
  noStroke();
  let randomAlpha = 200 + random(55); 
  fill(255, 255, 255, randomAlpha); 
  let dotAmp = 10; 
  ellipse(150, 100 + sin(Atime) * dotAmp, 30, 30);
  ellipse(140, 130 + sin(Atime + 1) * dotAmp, 20, 20);
  ellipse(145, 157 + sin(Atime + 2) * dotAmp, 18, 18);
  ellipse(150, 180 + sin(Atime + 3) * dotAmp, 15, 15);

  stroke(0); 
  let lineW = 2 + sin(Atime * 0.7) * 1.5;
  strokeWeight(lineW);
  line(0, 0, 600, 400); 
  line(0, 400, 600, 0); 
  
  let swingX = sin(Atime * 0.4) * 20;
  stroke(255, 150, 0); 
  strokeWeight(10);
  line(300 + swingX, 0, 300 + swingX, 400); 
  stroke(0);
  strokeWeight(2);
  line(300 + swingX, 0, 300 + swingX, 400);

  noFill();
  stroke(150, 200, 100); 
  let borderPulse = 3 + sin(Atime) * 1.5;
  strokeWeight(borderPulse);
  let rectExpand = sin(Atime * 0.6) * 10;
  rect(380 - rectExpand/2, 200 - rectExpand/2, 150 + rectExpand, 150 + rectExpand);
  
  let lerpAmount = (sin(Atime * 0.6) + 1) / 2;
  let animatedColor = lerpColor(color1, color2, lerpAmount);
  
  fill(animatedColor);
  noStroke();
  quad(460, 200, 529, 270, 460, 350, 380, 270);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('abstract_animation_final', 4);
  }
}