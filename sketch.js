
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  monkey =createSprite(80,315,20,20);
  monkey .addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityx=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
  FoodGroup= new Group();
  score=0;
 obstaclesGroup= new Group(); 
  

  
}


function draw() {
background(600);
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }  
  
  
  if(keyDown("space")) {
    monkey.velocityY=-12
  }
  monkey.velocityY =monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  spawnFood();
  
  spawnobstacles();
  
  
  drawSprites()
  
}
function spawnFood(){
if (frameCount % 80 === 0){
  banana = createSprite(600,250,40,10);
  banana.y = random(120,200);
  banana.velocityX = -5;
 banana.lifetime = 300;
  monkey.depth = banana.depth + 1;
banana.addImage(bananaImage);
  banana.scale=0.05;
  FoodGroup.add(banana); } 

}
function spawnobstacles(){
  if(frameCount% 80 ===0){
    obstacles= createSprite(100,250,50,10);
    obstacles.x = random(120,200);
    obstacles.velocityX = 5;
    obstacles.lifetime = 300;
   monkey.depth = obstacles.depth + 1;
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.5;
    obstaclesGroup.add(obstacles);
  } 

}

