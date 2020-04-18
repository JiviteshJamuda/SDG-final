var Ron,bulldozer1,enmy1,bullet;

function setup() {
  createCanvas(displayWidth,600);
  // The playing character(PC)
  Ron = createSprite(25, 200, 20, 30);
  

  // First set of bulldozer and enemies
  bulldozer1 =createSprite(300, 70, 100, 50);
  bulldozer2 =createSprite(300, 190, 100, 50);
  bulldozer3 =createSprite(300, 310, 100, 50);
  bulldozer4 =createSprite(300, 430, 100, 50);
  enmy1 = createSprite(300,120,20,30);
  enmy2 = createSprite(300,240,20,30);
  enmy3 = createSprite(300,360,20,30);
  enmy4 = createSprite(300,480,20,30);

}

function draw() {
  background(0);  
  if(keyDown(UP_ARROW) || keyDown("w")){
    Ron.y -= 3;
  };
  if(keyDown(DOWN_ARROW) || keyDown("s")){
    Ron.y += 3;
  };
  if(keyDown(RIGHT_ARROW) || keyDown("d")){
    Ron.x += 3;
  };
  if(keyDown(LEFT_ARROW) || keyDown("a")){
    Ron.x -= 3;
  };
  shootBullet();

  console.log(Ron.x,Ron.y);
  drawSprites();
}

function shootBullet(){
  if(keyDown("space")){
    bullet = createSprite(Ron.x,Ron.y,10,5);
    bullet.velocityX = 5;

    if(bullet.x > 350){
      bullet.destroy();
    }

    if(bullet.isTouching(bulldozer1)){
      bulldozer1.destroy();
      bullet.destroy();
    }
    console.log(bullet.x);
  }

}
// "groupname" + . + collideEach + ("target")