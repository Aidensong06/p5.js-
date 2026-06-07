function setup() {
  createCanvas(600, 400);
 }

function draw() {
  background(212, 233, 255);

  noStroke();
  
  fill(250, 0, 0); 
  rect(0, 0, 300, 400);
  
  fill(50, 50, 150); 
  rect(300, 150, 300, 250);
  
  noFill();            
  stroke(255, 255, 255); 
  strokeWeight(1);      
  ellipse(150, 150, 300, 300)

  
  fill(255, 200, 0);
 
  triangle(150, 50, 450, 50, 300, 350);
  
  fill(100, 180, 100, 200); 
  triangle(0, 400, 150, 200, 300, 400);

  stroke(255);
  strokeWeight(5);
  
  fill(50, 50, 50); 
  
  ellipse(450, 120, 100, 100);
  
  noStroke();
  fill(255);
  ellipse(150, 100, 30, 30);
  ellipse(140, 130, 20, 20);
  ellipse(145, 157, 18, 18);
  ellipse(150, 180, 15, 15);

  
  stroke(0); 
  strokeWeight(2);
  line(0, 0, 600, 400); 
  line(0, 400, 600, 0); 
  
  stroke(255, 150, 0); 
  strokeWeight(10);
  line(300, 0, 300, 400); 
  
  stroke(0);
  strokeWeight(2);
  line(300, 0, 300, 400);

  
  noFill();
  stroke(150, 200, 100); 
  strokeWeight(3);
  rect(380, 200, 150, 150);
  
  fill(100, 180, 100, 200);
  strokeWeight(0);
  quad(460, 200, 529, 270, 460, 350, 380, 270);
}