var happyMonkey, happyMonkeyImage;
var Banana, bananaImage, foodGroup;
var obstacle, obstacleImage, obstacleGroup;
var backg, backgImage;
var score;
var ground;

function preload() {

  backgImage = loadImage("jungle.png");

  happyMonkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaImage = loadImage("banana.png");

  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);

  ground = createSprite(200, 390, 400, 15);
  ground.velocityX = -5;
  ground.visible = false;

  /*backg = createSprite(200, 200, 5, 5);
  backg.velocityX = -5;
  backg.addImage(backgImage);*/

  happyMonkey = createSprite(50, 380, 5, 5);
  happyMonkey.addAnimation(happyMonkeyImage);

  score = 0;

  foodGroup = new Group();
  obstacleGroup = new Group();


}

function draw() {

  background("White");

  //console.log(happyMonkey.y);

  happyMonkey.collide(ground);

  if (ground.x < 0) {

    ground.x = ground.width / 2;

  }

  /*if (backg.x < 0) {
    backg.x = backg.width / 2;
  }*/

  if (World.frameCount % 80 === 0) {
    banana();
  }

  if (World.frameCount % 300 === 0) {
    stone();
  }

  if (keyDown("space") && happyMonkey.y >= 200) {

    happyMonkey.velocityY = -15;

  }

  happyMonkey.velocityY = happyMonkey.velocityY + 0.8;

  if (foodGroup.isTouching(happyMonkey)) {

    foodGroup.destroyEach();
    score = score + 1;

  }
  
  if(obstacleGroup.collide(happyMonkey)) {
  
  happyMonkey.scale=0.4;
  
  }


  drawSprites();
  
  stroke("Black");
  textSize(20);
  fill("Black");
  text("Score: " + score, 300, 50);

}

function banana() {

  Banana = createSprite(400, random(120, 200), 5, 5);
  Banana.addImage(bananaImage);
  Banana.scale = 0.05;
  Banana.velocityX = -5;
  Banana.lifetime = 150;
  foodGroup.add(Banana);

}

function stone() {

  obstacle = createSprite(400, 332, 5, 5);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.4;
  obstacle.velocityX = -5;
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle);

}