/*global createCanvas, bakground, 
noStroke,fill,rect*/

function setup(){
  createCanvas(800,500);
  background(2,100,110);
  fill(0,10,0);
  rect(200,200,400,100);
  //rect(x top L, y top L,width,height)
}

function mouseClicked(){
  if (mouseX>200&& mouseX< 600&&mouseY>200&&mouseY<300){ 
    background(255,13,300);
    fill(0,2,0);
    textSize(32);
    text("YAYYY",width/2-50,100);
    fill(2,100,0);
    rect(400,250,100);
  } 
  else {
    background(35,13,501);
    noStroke();
    fill(0,8,2);
    rect(200,200,400,100);
  }
 
}
