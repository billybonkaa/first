var position;

function setup(){
  createCanvas(800, 500);
  background(20, 20, 20);
  position = 0;
}

function draw(){
  background(0, 183, 255);
  noStroke();
  fill(10, 73, 18);
  rect(0, 250, width, 250); 
  //rect(x top L, y top L, width, height)
  fill(15);
  rect(0, 300, width, 150);
 
   if (keyIsPressed&&keyCode==LEFT_ARROW)
  position--;
    if (keyIsPressed&&keyCode==RIGHT_ARROW)
  position++;
  //mountains
  fill(100,55,20)
  triangle(500-position, 250, 108-position, 250, 285-position, 135);
  // start of road lines
  stroke(255, 255, 255);
  strokeWeight(5);
  
  line(-1400-position, 375, -1350-position, 375);
  line(-1300-position, 375, -1250-position, 375);
  line(-1200-position, 375, -1150-position, 375);
  line(-1100-position, 375, -1050-position, 375);
  line(-1000-position, 375, -950-position, 375);
  line(-100-position, 375, -50-position, 375);
  line(-200-position, 375, -150-position, 375);
  line(-300-position, 375, -250-position, 375);
  line(-400-position, 375, -350-position, 375);
  line(-500-position, 375, -450-position, 375);
  line(-600-position, 375, -550-position, 375);
  line(-700-position, 375, -650-position, 375);
  line(-800-position, 375, -750-position, 375);
  line(-900-position, 375, -850-position, 375);
  line(0-position, 375, 50-position, 375);
  line(100-position, 375, 150-position, 375);
  line(200-position, 375, 250-position, 375);
  line(300-position, 375, 350-position, 375);
  line(400-position, 375, 450-position, 375);
  line(500-position, 375, 550-position, 375);
  line(600-position, 375, 650-position, 375);
  line(700-position, 375, 750-position, 375);
  line(800-position, 375, 850-position, 375);
  line(900-position, 375, 950-position, 375);
  line(1000-position, 375, 1050-position, 375);
  line(1100-position, 375, 1150-position, 375);
  line(1200-position, 375, 1250-position, 375);
  line(1300-position, 375, 1350-position, 375);
  line(1400-position, 375, 1450-position, 375);
  line(1500-position, 375, 1550-position, 375);
  line(1600-position, 375, 1650-position, 375);
  line(1700-position, 375, 1750-position, 375);
  line(1800-position, 375, 1850-position, 375);
  line(1900-position, 375, 1950-position, 375);
  line(2000-position, 375, 2050-position, 375);
  line(2100-position, 375, 2150-position, 375);
  line(2200-position, 375, 2250-position, 375);
  line(2300-position, 375, 2350-position, 375);
  line(2400-position, 375, 2450-position, 375);
  line(2500-position, 375, 2550-position, 375);
  line(2600-position, 375, 2650-position, 375);
  line(2700-position, 375, 2750-position, 375);
  line(2800-position, 375, 2850-position, 375);
  line(2900-position, 375, 2950-position, 375);
  //start of cars
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  rect(110 + position, 285, 80, 50);
  fill(0, 0, 0);
  ellipse(110 + position, 340, 30);
  ellipse(190 + position, 340, 30);
  //ellipse(x center, y center, diameter)
  //rect(x top L, y top L, width, height)
  stroke(255);
  fill(50, 0, 100);
  rect(-100 + position, 285, 80, 50);
  fill(0, 0, 0);
  ellipse(-100 + position, 340, 30);
  ellipse(-15 +  position, 340, 30);
  
  stroke(255);
  fill(12, 10, 100);
  rect(-500 + position, 285, 80, 50);
  fill(0, 0, 0);
  ellipse(-500 + position, 340, 30);
  ellipse(-415 +  position, 340, 30);
  
  stroke(255);
  fill(255, 0, 500);
  rect(1010 + position, 285, 80, 50);
  fill(0, 0, 0);
  ellipse(1010 + position, 340, 30);
  ellipse(1090 + position, 340, 30);
  //start of opposite direction cars
  stroke(255);
  fill(25, 50, 200);
  rect(510 - 2 * position, 345, 80, 50);
  fill(0, 0, 0);
  ellipse(510 - 2 * position, 400, 30);
  ellipse(590 - 2 * position, 400, 30);
  
  stroke(255);
  fill(255, 0, 500);
  rect(1010 - 2 * position, 345, 80, 50);
  fill(0, 0, 0);
  ellipse(1010 - 2 * position, 400, 30);
  ellipse(1090 - 2 * position, 400, 30);

  if (keyIsPressed&&keyCode==LEFT_ARROW)
  position--;
    if (keyIsPressed&&keyCode==RIGHT_ARROW)
  position++;
  //clouds
  fill(1000,);
  ellipse(100- position,60,50);
  ellipse(140- position, 40, 50, 50);
  ellipse(170- position, 70,50, 50);
  ellipse(130- position, 80, 50, 50);
  
  ellipse(400- position,160,50);
  ellipse(440- position, 140, 60, 60);
  ellipse(470- position, 170,50, 50);
  ellipse(430- position, 180, 50, 50);
  
  ellipse(300- position,50,50);
  ellipse(340- position, 30, 50, 50);
  ellipse(370- position, 60,50, 50);
  ellipse(330- position, 70, 50, 50);
  
  ellipse(600- position,50,50);
  ellipse(640- position, 30, 50, 50);
  ellipse(670- position, 60,50, 50);
  ellipse(630- position, 70, 50, 50);

  ellipse(650- position,50,50);
  ellipse(690- position, 30, 50, 50);
  ellipse(720- position, 60,50, 50);
  ellipse(680- position, 70, 50, 50);

  ellipse(800- position,100,50);
  ellipse(840- position, 80, 50, 50);
  ellipse(870- position, 110,50, 50);
  ellipse(830- position, 120, 50, 50);

  ellipse(50- position,60,50);
  ellipse(90- position, 40, 50, 50);
  ellipse(120- position, 70,50, 50);
  ellipse(80- position, 80, 50, 50);
  
  ellipse(1150- position,30,50);
  ellipse(1190- position, 10, 50, 50);
  ellipse(1220- position, 40,50, 50);
  ellipse(1180- position, 50, 50, 50);
  
  ellipse(890- position,170,50);
  ellipse(930- position, 150, 50, 50);
  ellipse(960- position, 180,50, 50);
  ellipse(920- position, 190, 50, 50);
  //mph sign 
  textSize(100);
  text("|",852-position,260,50);
  
  fill(300,210,0);
  textSize(500);
  text(".",795-position,200,10);
  
  fill(0,0,0);
  textSize(40);
  text("25",843-position,185,10);
  
  fill(0,0,0);
  textSize(10);
  text("MPH",852-position,198,10);
  //plane attempt
  fill(500);
  ellipse(1080-position, 100,60,10);
  ellipse(1080-position, 102,5,30);
  textSize(10);
  text("/", 1110-position, 90,60,10);
  //plane windows
  noStroke();
  fill(0);
  ellipse(1052-position, 99,4,3);
  ellipse(1080-position, 100,2,5);
  ellipse(1060-position, 100,2,5);
  ellipse(1065-position, 100,2,5);
  ellipse(1070-position, 100,2,5);
  ellipse(1075-position, 100,2,5);
  ellipse(1085-position, 100,2,5);
  ellipse(1090-position, 100,2,5);
  ellipse(1095-position, 100,2,5);
  ellipse(1100-position, 100,2,5);
  //UFO
  fill(200,200,350);
  ellipse(600-position,260-position,30,30);
  fill(100);
  ellipse(600-position,270-position,65,20);
  fill(200,200,350);
  ellipse(600-position,263-position,30,13);
  //ufo dots 
  /*
  fill(60);
  ellipse(600-position,276.5-position,3,3);
  ellipse(605-position,275.6-position,3,3);
  ellipse(610-position,275.3-position,3,3);
  ellipse(615-position,275-position,3,3);
  ellipse(620-position,274.6-position,3,3);
  ellipse(624.5-position,273.3-position,3,3);
  ellipse(628-position,272-position,3,3);
  ellipse(629-position,269-position,3,3);
  ellipse(625-position,266-position,3,3);
  ellipse(620-position,265-position,3,3);
   ellipse(595-position,275.6-position,3,3);
  ellipse(590-position,275.3-position,3,3);
  ellipse(585-position,275-position,3,3);
  ellipse(580-position,274.6-position,3,3);
  ellipse(677-position,273.3-position,3,3);
  ellipse(678-position,272-position,3,3);
  ellipse(679-position,269-position,3,3);
  ellipse(675-position,266-position,3,3);
  ellipse(670-position,265-position,3,3);
  */
}

