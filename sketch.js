var fixedRect, movingRect;

var cat,rat

var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(234,267,80,20)
  wall=createSprite(1000,267,50,100)
  car.velocityX=5

  cat=createSprite(1000,500,80,10);
  rat=createSprite(234,500,10,30);
  rat.velocityX=5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(rat,cat)){
    rat.scale=2
    rat.shapeColr="yellow"
    rat.velocityX=0
  }
  

  if (isTouching(car,wall)){
  car.shapeColor="Red"
  wall.shapeColor="red"
  car.velocityX=0
  }
else{
  car.shapeColor = "green"
  wall.shapeColor="green"
}
  
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true
}
else {
 return false
}
}
