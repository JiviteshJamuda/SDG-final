var Ron,mazeWall1,bulldozer1,enmy1,bullet,bulletGroup,wallG;
var score1,score2,score3,scoreCount = 0,door;
var enemyImg,bushImg,mazeBack,bulletImg,bulldozerImg,keyImg;
var runAnimation,explodeAnimation,standImg;
var enemyCount = 8;

function preload(){
  bulldozerImg = loadImage("sprites/bulldozer.png");
  enemyImg = loadImage("sprites/enemy.png");
  bushImg = loadImage("sprites/bush.png");
  bulletImg = loadImage("sprites/bullet.png");
  keyImg = loadImage("sprites/key.png");
  runAnimation = loadAnimation("sprites/run1.png","sprites/run2.png","sprites/run3.png","sprites/run5.png","sprites/run6.png","sprites/run7.png","sprites/run8.png","sprites/run9.png","sprites/run10.png","sprites/run11.png","sprites/run12.png");
  standImg = loadImage("sprites/run7.png");
  explodeAnimation = loadImage("sprites/boom.gif");
}

function setup() {
  createCanvas(displayWidth,550);
  
  mazeBack = createSprite(865,270,50,50);
  mazeBack.addImage(bushImg);
  wallG = createGroup();
  topWall = createSprite(750,-5,2999,10)
  topWall.visible = false;
  bottomWall = createSprite(750,555,2999,10);
  bottomWall.visible = false;
  leftWall = createSprite(-2,275,10,1000);
  leftWall.visible = false;
  wallG.add(topWall);
  wallG.add(bottomWall);
  wallG.add(leftWall);

  mazeWall1 = createSprite(600,80,10,160);
  wallG.add(mazeWall1);
  mazeWall2 = createSprite(600,390,10,320);
  wallG.add(mazeWall2);
  mazeWall3 = createSprite(650,275,10,420);
  wallG.add(mazeWall3);
  mazeWall4 = createSprite(710,60,130,10);
  wallG.add(mazeWall4);
  mazeWall5 = createSprite(700,275,10,320);
  wallG.add(mazeWall5);
  mazeWall6 = createSprite(765,490,240,10);
  wallG.add(mazeWall6);
  mazeWall7 = createSprite(950,60,240,10);
  wallG.add(mazeWall7);
  mazeWall7 = createSprite(1065,115,10,100);
  wallG.add(mazeWall7);
  mazeWall8 = createSprite(1095,105,50,10);
  wallG.add(mazeWall8);
  mazeWall9 = createSprite(1120,120,10,280);
  wallG.add(mazeWall9);
  mazeWall10 = createSprite(1120,430,10,240);
  wallG.add(mazeWall10);
  mazeWall11 = createSprite(1065,360,10,270);
  wallG.add(mazeWall11);
  mazeWall12 = createSprite(1000,490,120,10);
  wallG.add(mazeWall12);
  mazeWall13 = createSprite(1010,525,10,60);
  wallG.add(mazeWall13);
  mazeWall14 = createSprite(1010,400,10,70);
  wallG.add(mazeWall14);
  mazeWall15 = createSprite(880,430,260,10);
  wallG.add(mazeWall15);
  mazeWall16 = createSprite(850,380,200,10);
  wallG.add(mazeWall16);
  mazeWall17 = createSprite(755,275,10,200);
  wallG.add(mazeWall17);
  mazeWall18 = createSprite(822,110,254,10);
  wallG.add(mazeWall18);
  mazeWall19 = createSprite(945,275,10,200);
  wallG.add(mazeWall19);
  mazeWall20 = createSprite(1010,200,10,190);
  wallG.add(mazeWall20);
  mazeWall21 = createSprite(1035,275,60,10);
  wallG.add(mazeWall21);
  mazeWall22 = createSprite(975,230,60,10);
  wallG.add(mazeWall22);
  mazeWall22 = createSprite(850,80,10,50);
  wallG.add(mazeWall22);
  mazeWall23 = createSprite(850,140,10,50);
  wallG.add(mazeWall23);
  mazeWall24 = createSprite(890,255,10,160);
  wallG.add(mazeWall24);
  mazeWall25 = createSprite(850,170,90,10);
  wallG.add(mazeWall25);
  mazeWall26 = createSprite(810,250,10,70);
  wallG.add(mazeWall26);
  mazeWall27 = createSprite(827,332,50,10);
  wallG.add(mazeWall27);
  mazeWall28 = createSprite(850,250,80,10);
  wallG.add(mazeWall28);
  mazeWall28 = createSprite(850,342,10,80);
  wallG.add(mazeWall28);
  mazeWall29 = createSprite(810,462,10,55);
  wallG.add(mazeWall29);
  mazeWall28 = createSprite(880,407,10,50);
  wallG.add(mazeWall28);
  mazeWall29 = createSprite(860,5,520,10);
  wallG.add(mazeWall29);
  mazeWall29 = createSprite(860,545,520,10);
  wallG.add(mazeWall29);
  wallG.setColorEach("rgb(130,90,71)")

  // The playing character(PC)
  Ron = createSprite(25, 200, 20, 30);
  Ron.scale=0.25;
  Ron.setCollider("rectangle",-35,0,100,150);

  // First set of bulldozer
  bulldozer1 =createSprite(370, 70, 100, 50);
  bulldozer1.addImage(bulldozerImg);
  bulldozer1.scale = 0.5; 

  bulldozer2 =createSprite(370, 190, 100, 50);
  bulldozer2.addImage(bulldozerImg);
  bulldozer2.scale = 0.5;

  bulldozer3 =createSprite(370, 310, 100, 50);
  bulldozer3.addImage(bulldozerImg);
  bulldozer3.scale = 0.5;

  bulldozer4 =createSprite(370, 430, 100, 50);
  bulldozer4.addImage(bulldozerImg);
  bulldozer4.scale = 0.5;
  
  // First set of enemies
  enmy1 = createSprite(250,70,20,30);
  enmy1.addImage(enemyImg);
  enmy1.scale = 0.2;

  enmy2 = createSprite(250,190,20,30);
  enmy2.addImage(enemyImg);
  enmy2.scale = 0.2;

  enmy3 = createSprite(250,310,20,30);
  enmy3.addImage(enemyImg);
  enmy3.scale = 0.2;

  enmy4 = createSprite(250,430,20,30);
  enmy4.addImage(enemyImg);
  enmy4.scale = 0.2;

  bulletGroup = new Group();

  // door
  door = createSprite(1125,285,10,50);
  door.shapeColor = "rgb(92,25,22)"

  // keys
  score1 = createSprite(925,405,10,10);
  score1.addImage(keyImg);
  score1.setCollider("rectangle",-20,0,20,30);

  score2 = createSprite(895,85,10,10);
  score2.addImage(keyImg);
  score2.setCollider("rectangle",-20,0,20,30);

  score3 = createSprite(1115,75,10,10);
  score3.addImage(keyImg);
  score3.setCollider("rectangle",-20,0,20,30);

}

function draw() {
  background(10);
  Ron.collide(wallG);
  Ron.collide(door);

  if(keyIsDown(UP_ARROW) || keyDown("w")){
    Ron.y -= 10;
    Ron.addAnimation("running",runAnimation);
  }else{
    Ron.addImage(standImg);
  };

  if(keyIsDown(DOWN_ARROW) || keyDown("s")){
    Ron.y += 10;
    Ron.addAnimation("running",runAnimation);
  }else{
    Ron.addImage(standImg);
  };

  if(keyIsDown(RIGHT_ARROW) || keyDown("d") && enemyCount === 0){
    Ron.x += 10;
    Ron.addAnimation("running",runAnimation);
  }else{
    Ron.addImage(standImg);
  };

  if(keyIsDown(LEFT_ARROW) || keyDown("a") && enemyCount === 0){
    Ron.x -= 10;
    Ron.addAnimation("running",runAnimation);
  }else{
    Ron.addImage(standImg);
  };

  if (Ron.isTouching(score1)){
    score1.destroy();
    scoreCount +=  1;
  };
  if (Ron.isTouching(score2)){
    score2.destroy();
    scoreCount +=  1;
  };
  if (Ron.isTouching(score3)){
    score3.destroy();
    scoreCount +=  1;
  }
  
  if(scoreCount === 3){
    door.destroy();
  }

  // creating bullets
  
if(bulletGroup.isTouching(bulldozer1)){
  bulldozer1.destroy();
  imageMode(CENTER);
  image(explodeAnimation,bulldozer1.x,bulldozer1.y);
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(bulldozer2)){
  bulldozer2.destroy();
  imageMode(CENTER);
  image(explodeAnimation,bulldozer2.x,bulldozer2.y);
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(bulldozer3)){
  bulldozer3.destroy();
  imageMode(CENTER);
  image(explodeAnimation,bulldozer3.x,bulldozer3.y);
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(bulldozer4)){
  bulldozer4.destroy();
  imageMode(CENTER);
  image(explodeAnimation,bulldozer4.x,bulldozer4.y);
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(enmy1)){
  enmy1.destroy();
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(enmy2)){
  enmy2.destroy();
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(enmy3)){
  enmy3.destroy();
  bulletGroup.destroyEach();
  enemyCount -= 1;
}
if(bulletGroup.isTouching(enmy4)){
  enmy4.destroy();
  bulletGroup.destroyEach();
  enemyCount -= 1;
}

  shootBullets(); 

  console.log(Ron.x,Ron.y);
  drawSprites();
  camera.position.x = Ron.x;
  camera.position.y = Ron.y;
}

function shootBullets(){
  if(keyDown("space") && frameCount % 2 === 0 && enemyCount != 0){
   bullet=createSprite(10,10,20,10);
   bullet.addImage(bulletImg);
   bullet.setCollider("rectangle",0,-10,15,10);
   bullet.x=Ron.x+20;
   bullet.y=Ron.y+2;
   bullet.velocityX=5;
   bullet.lifetime = 75;
   bulletGroup.add(bullet);
  }
}