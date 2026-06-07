function setup() {
  createCanvas(600, 400);
  noLoop(); 
}

function draw() {
  background(225, 230, 235);

  fill(0); 
  noStroke();
  beginShape();
  vertex(252, 290); 
  vertex(348, 290); 
  bezierVertex(400, 300, 525, 350, 525, height); 
  vertex(75, height); 
  bezierVertex(75, 350, 200, 300, 252, 290);
  endShape(CLOSE);

  fill(245, 220, 190); 
  stroke(180, 150, 120);
  strokeWeight(2);
  rect(252, 240, 96, 60); 

  stroke(70, 80, 100); 
  strokeWeight(2);
  line(252, 300, 300, 340); 
  line(348, 300, 300, 340); 

  fill(40, 35, 30); 
  noStroke();
  ellipse(300, 160, 220, 190); 

  fill(245, 220, 190);
  stroke(180, 150, 120);
  strokeWeight(2);
  ellipse(210, 220, 25, 45); 
  ellipse(390, 220, 25, 45); 

  fill(245, 220, 190);
  stroke(180, 150, 120);
  strokeWeight(2);
  ellipse(300, 180, 175, 230); 

  noFill();
  stroke(190, 195, 200); 
  strokeWeight(2.5);
  arc(210, 235, 12, 12, QUARTER_PI, PI + HALF_PI); 
  arc(390, 235, 12, 12, -HALF_PI, PI - QUARTER_PI);

  push();
  fill(40, 35, 30); 
  noStroke();
  beginShape();
  vertex(200, 140);
  vertex(190, 190); 
  vertex(195, 110);
  vertex(230, 70); 
  vertex(300, 55); 
  vertex(370, 70); 
  vertex(405, 110);
  vertex(410, 190); 
  vertex(400, 140);
  vertex(380, 175); 
  vertex(360, 155);
  vertex(340, 180); 
  vertex(320, 160);
  vertex(300, 175); 
  vertex(280, 160);
  vertex(260, 180); 
  vertex(240, 155);
  vertex(220, 175); 
  endShape(CLOSE);
  pop();

  fill(255); stroke(50); strokeWeight(1.5);
  ellipse(265, 195, 32, 11); 
  ellipse(335, 195, 32, 11); 
  fill(50); noStroke(); 
  circle(265, 195, 7.5); 
  circle(335, 195, 7.5);

  noFill();
  stroke(180, 150, 120); strokeWeight(2.5);
  line(300, 215, 295, 240); 
  line(295, 240, 308, 240); 

  noFill();
  stroke(160, 110, 110); strokeWeight(2);
  bezier(275, 270, 290, 285, 310, 285, 325, 270);

  fill(60, 50, 40); 
  noStroke();
  circle(350, 208, 2); 
  circle(325, 207, 2); 
  circle(293, 247, 2); 
  circle(310, 247, 2); 
}