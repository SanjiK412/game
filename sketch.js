var mask, vaccine, sanitizer, maskImg, vaccineImg, sanitizerImg
var  girlplayer, girlplayerImg;
var crowd, crowdImg
var edge1, edge2, edge3, edge4, school, schoolImg;
var backgroundsprite, backgroundImg, virus1, virus1Img, virus2, virus2Img;
var score=0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var lives=3;
var mask2, mask2Img, vaccine2, vaccine2Img, sanitizer2, sanitizer2Img;
var restart, restartImg;

function preload(){
 girlplayerImg=loadImage("./girlplayer.gif")
  maskImg=loadImage("./mask.png")
  mask2Img=loadImage("./mask.png")
  vaccineImg=loadImage("./vaccine.png")
  vaccine2Img=loadImage("./vaccine.png")
  sanitizerImg=loadImage("./sanitizer.png")
  sanitizer2Img=loadImage("./sanitizer.png")
 crowdImg=loadImage("./crowd.png")
backgroundImg=loadImage("./bck.jpg")
virus1Img=loadImage("./virus1.png")
virus2Img=loadImage("./virus2.png")
schoolImg=loadImage("./school.png")
restartImg=loadImage("./restart.png")
}

function setup(){
var canvas = createCanvas(1300,700);


mask=createSprite(455,300,20,20)
mask.addImage("mask", maskImg)
mask.scale=0.2;
mask2=createSprite(740, 260,20,20)
mask2.addImage("mask2", mask2Img)
mask2.scale=0.2
mask2.visible=false;
vaccine=createSprite(101, 74,10,10)
vaccine.addImage("vaccine", vaccineImg)
vaccine.scale=0.09
vaccine2=createSprite(1175, 95,10, 10)
vaccine2.addImage("vaccine", vaccineImg)
vaccine2.scale=0.09
vaccine2.visible=false;
sanitizer=createSprite(767,380,15,15)
sanitizer.addImage("sanitizer", sanitizerImg)
sanitizer.scale=0.1
sanitizer2=createSprite(1000,90,15,15)
sanitizer2.addImage("sanitizer2", sanitizerImg)
sanitizer2.scale=0.1
sanitizer2.visible=false;
girlplayer=createSprite(90,365,20,20)
girlplayer.addImage("girlplayer", girlplayerImg)
girlplayer.scale=0.55
crowd=createSprite(600, 520, 20, 20)
crowd.addImage("crowd", crowdImg)
crowd.scale=0.6
virus1=createSprite(250,200, 10, 10)
virus1.addImage("virus1",virus1Img)
virus1.scale=0.2;
virus2=createSprite(960,200, 10, 10)
virus2.addImage("virus2",virus2Img)
virus2.scale=0.2;
edge1=createSprite(600,5,2000,5)
edge2=createSprite(600,615,2000,5)
edge3=createSprite(5,299, 5,1000)
edge4=createSprite(1296,285, 5, 1000)
school=createSprite(1170,450,20,20)
school.addImage("school", schoolImg)
school.scale=0.09;
school=createSprite(1170,450,20,20)
school.addImage("school", schoolImg)
school.scale=0.09;
restart=createSprite(650, 350)
restart.addImage("restart", restartImg)
restart.scale=1;
restart.visible=false;

virus1.velocityY=10;
virus2.velocityY=-25;

}

function draw(){ 
//image(backgroundImg, -displayWidth*4, displayHeight/2, displayWidth*4, displayHeight)
background(backgroundImg); 


if (gameState===PLAY){
   score = score + Math.round(getFrameRate()/60);
}

if(keyDown("RIGHT_ARROW") && girlplayer.y >=159) {
 girlplayer.x = girlplayer.x + 20;
 }
 if(keyDown("LEFT_ARROW") && girlplayer.y >=159) {
 girlplayer.x = girlplayer.x - 20;
 }
 if(keyDown("UP_ARROW")){
   girlplayer.y=girlplayer.y-20;
 }
 if(keyDown("DOWN_ARROW")){
  girlplayer.y=girlplayer.y+20;
}

virus1.bounceOff(edge1)
virus2.bounceOff(edge1)
virus1.bounceOff(edge2)
virus2.bounceOff(edge2)


girlplayer.bounceOff(edge1)
girlplayer.bounceOff(edge2)
girlplayer.bounceOff(edge4)

if(girlplayer.isTouching(virus1, virus2)){
  lives=-1
}

if(girlplayer.isTouching(mask)){
  text("great job!",590, 210)
  lives=+1
  mask.visible=false;
}
if(girlplayer.isTouching(mask2)){
  text("great job!",590, 210)
  lives=+1
  mask2.visible=false;
}
if(girlplayer.isTouching(vaccine)){
  text("great job!", 590, 210)
  lives=+1
  vaccine.visible=false;
}
if(girlplayer.isTouching(sanitizer)){
  text("great job!", 590, 210)
  lives=+1
 sanitizer.visible=false;
}
if(girlplayer.isTouching(sanitizer2)){
  text("great job!", 590, 210)
  lives=+1
 sanitizer2.visible=false;
}


if(girlplayer.isTouching(school)){
  text("YOU REACHED SCHOOL SAFELY, YOU WIN!", 200,50);
  restart.visible=true;
}

if(girlplayer.isTouching(virus1)){
  girlplayer.x=90;
  girlplayer.y=365;
  mask2.visible=true;
  vaccine2.visible=true;
  sanitizer.visible=true;
  sanitizer2.visible=true;
  vaccine.visible=true;
  mask.visible=true;
}
if(girlplayer.isTouching(virus2)){
  girlplayer.x=90;
  girlplayer.y=365;
  vaccine2.visible=true;
  sanitizer.visible=true;
  sanitizer2.visible=true;
  vaccine.visible=true;
  mask.visible=true;
  mask2.visible=true;
}

text("lives=" +lives, 1072, 60)
textSize(15)
text("Collect all the safety measures, stay away from the virus and crowd!", 357, 142)
text("REACH SCHOOL↘", 515, 175)
text("If you catch the virus, the safety measures will double", 410, 110)

   drawSprites();
   text(mouseX + "," + mouseY, mouseX, mouseY)
}