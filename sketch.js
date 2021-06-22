var player, pStand,pRunL,pRunR,pJump,pSlide,pFall,pLanding;
var bg, bgImg;
var edges;
var platform, p1, p2, p3, p4, p5, p6, p7;


function preload(){
    bgImg = loadImage("image/mountain.jpg");
    pStand = loadAnimation("image/pStand.png","image/pBlink.png");
    pRunL = loadAnimation("image/pRun.png","image/pLeft.png");
    pRunR = loadAnimation("image/pRun.png","image/pRight.png");
    pJump = loadImage("image/pJump1.png");
    pLanding = loadAnimation("image/pJump2.png","image/pJump3.png")
    pSlide = loadImage("image/pSlide.png");
    pFall = loadImage("image/pFall.png");
    platform = loadImage("image/platform.jpg");
    
}

function setup(){
createCanvas(1000, 700);

//edges = createEdgeSprite();

bg = createSprite(500, 500, 500, 350);
bg.addImage(bgImg);
bg.scale = 4;
bg.velocityY=+0.6;

player = createSprite(100, 200, 10, 10);
player.addAnimation("standing",pStand);
player.changeAnimation("standing");

p1 = createSprite(220, 600, 100, 20);
p1.addImage(platform);
p1.velocityY =+0.6;
p2 = createSprite(440, 490, 100, 20);
p2.addImage(platform);
p2.velocityY =+0.6;
p3 = createSprite(270, 345, 100, 20);
p3.addImage(platform);
p3.velocityY =+0.6;
p4 = createSprite(490, 250, 100, 20);
p4.addImage(platform);
p4.velocityY =+0.6;
p5 = createSprite(600, 440, 100, 20);
p5.addImage(platform);
p5.velocityY =+0.6;
p6 = createSprite(850, 300, 100, 20);
p6.addImage(platform);
p6.velocityY =+0.6;
p7 = createSprite(700, 165, 100, 20);
p7.addImage(platform);
p7.velocityY =+0.6;
}

function draw(){
background(0);

edges = createEdgeSprites();

if(bg.y>400){
    bg.y=bg.height/2;
}





if(keyWentDown("space")){
    player.velocityY -=3;
    
    player.addImage(pJump);  

}

player.velocityY +=0.5;

player.collide(edges);

 //if(keyWentUp("space")){
  //   player.addAnimation("land",pLanding);
  //   player.changeAnimation("land");  
// }
 


if(keyDown(LEFT_ARROW)){
    player.y -=10;
    player.x -=6;
    player.addAnimation("run",pRunL);
    player.changeAnimation("run");
}

if(keyDown(RIGHT_ARROW)){
    player.y -=10;
    player.x +=6;
    player.addAnimation("run",pRunR);
    player.changeAnimation("run");
}

if(p1.isTouching(player)){
    player.velocityY=0;
}
if(p2.isTouching(player)){
    player.velocityY=0;
}
if(p3.isTouching(player)){
    player.velocityY=0;
}
if(p4.isTouching(player)){
    player.velocityY=0;
}
if(p5.isTouching(player)){
    player.velocityY=0;
}
if(p6.isTouching(player)){
    player.velocityY=0;
}
if(p7.isTouching(player)){
    player.velocityY=0;
}

drawSprites();

textSize(20);
fill (0);
text(mouseX+','+mouseY, mouseX, mouseY);
}