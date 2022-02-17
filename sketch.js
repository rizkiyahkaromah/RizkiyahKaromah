let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  y = 100;
  j = 0;
  k = 0;
  l = 0;
  m = 0;
  n = 0;
}

function draw() {
  // put drawing code here
  background(245,245,245)
  strokeWeight(1)
  line(200,0,200,200);

  fill(239,255,255)
  ellipse(100,100,150,150);
  ellipse(300,100,150,150);

  fill(255,255,255)
  ellipse(130,80,50,60);
  ellipse(70,80,50,60);

  beginShape()
  ellipse(330,80,50,60);
  ellipse(270,80,50,60);
  fill(0)
  var y = 80 + 10*Math.sin(PI/70*j)
  j+=1
  ellipse(270,y,30,35);
  var y = 80 + 10*Math.sin(PI/70*j)
  j+=1
  ellipse(330,y,30,35);
  endShape(CLOSE);
  
  fill(0)
  ellipse(70,80,30,35);
  ellipse(130,80,30,35);
  
  fill(240,128,128)
  ellipse(100,140,30,40);
  ellipse(300,140,30,40);
  

}