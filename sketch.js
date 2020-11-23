var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;
var good;
var good_1;
function preload(){
  good_1 = loadImage("image.png");
}

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet = createSprite(50, 200, 30, 5);
  bullet.velocityX=speed/1.5;
  bullet.shapeColor="white";
  good = createSprite(800,200,100,100);
  good.addImage(good_1);
  good.visible=false;

}

function draw() {
  background(0);

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    fill("white");
    stroke("white");
    textSize(50);
    text ("RELOAD THE PAGE TO TEST AGAIN",400,height/2);
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);
      fill("red");
      stroke("red");
      textSize(40);
      text("WALL IS NOT EFFECTIVE",400,height/4);
    }
    if (damage<10){
      wall.shapeColor=color(0,255,0);
      bullet.x=1500-(thickness)/2;
      good.visible=true;
      text ("RELOAD THE PAGE TO TEST AGAIN",400,height/2);
    }
  } 
  drawSprites();
}
function hasCollided(B1,W1){
  bulletRightEdge=B1.x+(B1.width)/2;
  wallLeftEdge=W1.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  } else {
    return false;
  }
}