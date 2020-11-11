var movingRect;
var fixedRect;
var object1;
var object2;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 10, 80, 30);
  fixedRect=createSprite(400,790,50,80);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="green";
  fixedRect.debug=false;
  movingRect.debug=false;

  fixedRect.velocityY=-4;
  movingRect.velocityY=4;

  object1 = createSprite(1000,400,80,30);
  object2 = createSprite(500,400,50,80);
  object1.shapeColor = "purple";
  object2.shapeColor = "red";

  object1.velocityX = -4;
  object2.velocityX = 4;
}

function draw() {
  background(0); 
  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  console.log(movingRect.y-fixedRect.y);
bounceoff(object1,object2);
bounceoff(movingRect,fixedRect);
 
  
  drawSprites();
}
