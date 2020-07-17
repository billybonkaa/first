/*global createCanvas, 
ellipse,mouseX,mouseY,
noStroke,fill,background*/

var drawing;
var r,g,b;

function setup(){
  createCanvas(800,500);
  background(0,0,0);
  drawing=true;
}

function draw(){
  fill(255)
  rect(10,10,100,50);
  rect(150, 10, 100, 50);
  fill(0);
  textSize(25);
  text("Draw", 12, 35);
  text("Erase", 152, 35);
  if(mouseIsPressed){
    if(mouseX>10 && mouseX<110 && mouseY>10 && mouseY<60){
      drawing = true;
    }
    if(mouseX>150 && mouseX<200 && mouseY>10 && mouseY<60){
      drawing = false;
    }
  }
}
function mouseDragged(){
  if(drawing){
    noStroke();
    fill(mouseX/2.75,mouseY/7,mouseY/1);
    ellipse(mouseX,mouseY,20,20);
    fill(r,g,b);
  }
  if(!drawing){
    noStroke();
    fill(0);
    ellipse(mouseX,mouseY,20,20);
  }
}
/*
function mouseDragged(){
  fill(r,g,b);
  r=random(0,256);
  g=random(0,256);
  b=random(0,256);
  ellipse(mouseX,mouseY,randomSize);
  randomSize=random(1,101);
}*/

/*
function mouseDragged(){
  noStroke();
  fill(mouseX/2.5,mouseY/2.5,mouseY/1.5)
  ellipse(mouseX,mouseY,20,20);
  //ellipse(x center,y center, diameter)
}
*/

