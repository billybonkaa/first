var GameOn,lives,score,yPos_red;
var moon1_x,moon1_y,moon1_size;
var moon2_x,moon2_y,moon2_size;
var decrease_size_moon1,decrease_size_moon2;
var cow

function setup(){
  createCanvas(400,400);
  frameRate(75);
  background(200,170,310);
  GameOn=true;
  decrease_size_moon1 = decrease_size_moon2 = 0.5;
  lives=3;
  score=0;
  yPos_red=200;

  moon1_x=440;
  moon1_y=random(100,350);
  moon1_size=random(50,100);
  
  moon2_x=540;
  moon2_y=random(100,350);
  moon2_size=random(50,100);
}


function draw(){
  if(GameOn==true){
    background(200,170,310);
    noStroke();
    fill(180,150,290);
    if(lives==3){
      ellipse(30,30,30);
      ellipse(30,70,30);
      ellipse(30,110,30);
   }
   else if (lives==2){
      ellipse(30,30,30);
      ellipse(30,70,30);
    }
    else if (lives==1){
      ellipse(30,30,30);
    } 
    else{
      GameOn=false; 
    }
    rect(180,15,200,60,60);
    fill(255);
    textSize(32);
    text("Score: "+score, 220,55);
  //cow
    fill(255);
    ellipse(100,yPos_red-20,35,40);
    ellipse(100,yPos_red,50,40);
    ellipse(89,yPos_red-30,30,12)
    ellipse(110,yPos_red-30,30,12)
  
   if(keyIsPressed&&keyCode==UP_ARROW){
      yPos_red-=5
    }
   else if(keyIsPressed&&keyCode==DOWN_ARROW){
      yPos_red+=5;
    } 
   if(yPos_red>=385){
      yPos_red=385;
    }
   if(yPos_red<=15){
      yPos_red=15;
    } 
    fill(255,200,50)
    ellipse(moon1_x,moon1_y,moon1_size,moon1_size);
    ellipse(moon2_x,moon2_y,moon2_size,moon1_size);
    //line(x1,y1,x2,y2)
    moon1_x=moon1_x-decrease_size_moon1;
    moon2_x=moon2_x-decrease_size_moon2;

   if(moon1_x<0-moon1_size / 2){
      moon1_x=500;
      moon1_y=random (0,400);
      moon1_size=random (50,100);
      decrease_size_moon1+= 0.5;
      lives++; 
    }
     if(moon2_x<0-moon2_size / 2){
      moon2_x=500;
      moon2_y=random (0,400);
      moon2_size=random (50,100);
      decrease_size_moon2+= 0.5;
      lives++; 
    }
     if(moon1_x <yPos_red+15&&moon1_y>yPos_red-15){
      if(moon1_x<115&&moon1_x+moon1_size>85){
        moon1_x=500;
        moon1_y=random (0,400);
        moon1_size=random (50,100);
        decrease_size_moon1+=0.5;
        lives--;
      }
    }
     if(moon2_x <yPos_red+15&&moon2_y>yPos_red-15){
      if(moon2_x<115&&moon2_x+moon2_size>85){
        moon2_x=500;
        moon2_y=random (0,400);
        moon2_size=random (50,100);
        decrease_size_moon2+=0.5;
        lives--;
      }
    }
} // end on GameOn
else{
    background(250,130,180);
    noStroke();
    fill(230,110,160);
    rect(50,100,300,200,60);
    
    fill(250,130,180);
    rect(70,120,260,56,60);
    rect(70,200,260,56,60);
    
    fill(255);
    textSize(35);
    text("Score: "+score,140,160);
    text("Restart",150,240);
}}
