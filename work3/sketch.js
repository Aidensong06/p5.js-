let cx = 0; 
let cy = 0; 
let isSaving = false;

let isHairDetaching = false; 
let hairProg = 0.0; 
let spaceLatch = false; 

let shirtR = 0; 
let shirtG = 0; 
let shirtB = 0; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(225, 230, 235);

 
  if (isHairDetaching === true) {
    if (hairProg < 1.0) hairProg += 0.02; 
    else hairProg = 1.0; 
  } else {
    if (hairProg > 0.0) hairProg -= 0.02; 
    else hairProg = 0.0; 
  }

  
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) cx -= 3;
    if (keyCode === RIGHT_ARROW) cx += 3;
    if (keyCode === UP_ARROW) cy -= 3;
    if (keyCode === DOWN_ARROW) cy += 3;

    if ((key === 'g' || key === 'G') && isSaving === false) {
      saveGif('my_caricature', 10); 
      isSaving = true;
    }

    if (key === ' ' && spaceLatch === false) {
      isHairDetaching = !isHairDetaching; 
      spaceLatch = true; 
    }
    
   
    if (key === 'c' || key === 'C') {
      shirtR = random(50, 255);
      shirtG = random(50, 255);
      shirtB = random(50, 255);
    }
  } else {
    spaceLatch = false; 
  }

  fill(shirtR, shirtG, shirtB); 
  noStroke();
  beginShape();
  vertex(252 + cx, 290 + cy); 
  vertex(348 + cx, 290 + cy); 
  bezierVertex(400 + cx, 300 + cy, 525 + cx, 350 + cy, 525 + cx, height + cy); 
  vertex(75 + cx, height + cy); 
  bezierVertex(75 + cx, 350 + cy, 200 + cx, 300 + cy, 252 + cx, 290 + cy);
  endShape(CLOSE);

 
  if (mouseIsPressed) {
    stroke(shirtR, shirtG, shirtB);
    strokeWeight(22);
    line(252 + cx, 300 + cy, 210 + cx, 210 + cy);
    line(348 + cx, 300 + cy, 390 + cx, 210 + cy); 

    fill(245, 220, 190);
    noStroke();
    circle(210 + cx, 210 + cy, 35); 
    circle(390 + cx, 210 + cy, 35); 
  }

  
  fill(245, 220, 190); 
  stroke(180, 150, 120); strokeWeight(2);
  rect(252 + cx, 240 + cy, 96, 60); 
  stroke(70, 80, 100); strokeWeight(2);
  line(252 + cx, 300 + cy, 300 + cx, 340 + cy); 
  line(348 + cx, 300 + cy, 300 + cx, 340 + cy); 

  
  fill(40, 35, 30); noStroke();
  ellipse(300 + cx, 160 + cy, 220, 190); 

  fill(245, 220, 190); stroke(180, 150, 120); strokeWeight(2);
  ellipse(210 + cx, 220 + cy, 25, 45); 
  ellipse(390 + cx, 220 + cy, 25, 45); 
  ellipse(300 + cx, 180 + cy, 175, 230); 
  
  noFill(); stroke(190, 195, 200); strokeWeight(2.5);
  arc(210 + cx, 235 + cy, 12, 12, QUARTER_PI, PI + HALF_PI); 
  arc(390 + cx, 235 + cy, 12, 12, -HALF_PI, PI - QUARTER_PI);

  push();
  fill(40, 35, 30); noStroke();
  beginShape();
  let offYTop = -80 * hairProg;
  vertex(200 + cx, 140 + cy + offYTop);
  vertex(190 + cx, 190 + cy + offYTop);
  vertex(195 + cx, 110 + cy + offYTop);
  vertex(230 + cx, 70 + cy + offYTop);
  vertex(300 + cx, 55 + cy + offYTop);
  vertex(370 + cx, 70 + cy + offYTop);
  vertex(405 + cx, 110 + cy + offYTop);
  vertex(410 + cx, 190 + cy + offYTop);
  vertex(400 + cx, 140 + cy + offYTop);

  let offXSide = 50 * hairProg;
  let offYSide = 30 * hairProg;
  vertex(380 + cx + offXSide, 175 + cy + offYSide);
  vertex(360 + cx + offXSide, 155 + cy + offYSide);
  vertex(340 + cx + offXSide, 180 + cy + offYSide);
  vertex(320 + cx + offXSide, 160 + cy + offYSide);
  vertex(300 + cx, 175 + cy + offYSide); 
  vertex(280 + cx - offXSide, 160 + cy + offYSide);
  vertex(260 + cx - offXSide, 180 + cy + offYSide);
  vertex(240 + cx - offXSide, 155 + cy + offYSide);
  vertex(220 + cx - offXSide, 175 + cy + offYSide);
  endShape(CLOSE);
  pop();

  fill(255); stroke(50); strokeWeight(1.5);
  ellipse(265 + cx, 195 + cy, 32, 11); 
  ellipse(335 + cx, 195 + cy, 32, 11); 

  let eyeMoveX = (mouseX - 300) * 0.02;
  let eyeMoveYBase = (mouseY - 195) * 0.02; 
  let eyeMoveYHair = -8 * hairProg; 
  let eyeMoveY = eyeMoveYBase + eyeMoveYHair;

  if (eyeMoveX > 6) eyeMoveX = 6;
  if (eyeMoveX < -6) eyeMoveX = -6;
  if (eyeMoveY > 2) eyeMoveY = 2; 
  if (eyeMoveY < -7) eyeMoveY = -7; 

  fill(50); noStroke();
  circle(265 + cx + eyeMoveX, 195 + cy + eyeMoveY, 7.5); 
  circle(335 + cx + eyeMoveX, 195 + cy + eyeMoveY, 7.5);

  noFill(); stroke(180, 150, 120); strokeWeight(2.5);
  line(300 + cx, 215 + cy, 295 + cx, 240 + cy); 
  line(295 + cx, 240 + cy, 308 + cx, 240 + cy); 

  noFill(); stroke(160, 110, 110); strokeWeight(2);
  bezier(275 + cx, 270 + cy, 290 + cx, 285 + cy, 310 + cx, 285 + cy, 325 + cx, 270 + cy);

  fill(60, 50, 40); noStroke();
  circle(350 + cx, 208 + cy, 2); 
  circle(325 + cx, 207 + cy, 2); 
  circle(293 + cx, 247 + cy, 2); 
  circle(310 + cx, 247 + cy, 2); 
}