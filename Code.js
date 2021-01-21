let
numSlices=20;
let spin=0;

function
drawOneSlice(){
  fill("green")
  ellipse(20,20,30,30);
  fill("red");
  rect(50,50,10,10);
  fill("blue")
  ellipse(80,80,30,10);
  fill("pink")
  ellipse(80,80,10,30);
  }

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  }

function draw() {
  background(255);
  translate(width/2, height/2);
  
  for (let slice=0; slice<numSlices; slice++){
    rotate(360/numSlices+spin/10);
    drawOneSlice();
    }
  spin = spin + 1;
}
