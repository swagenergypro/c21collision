var fixedRect, movingRect;
var ob1, ob2, ob3, ob4
function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(600, 400, 50, 80);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(100,100,50,50);
  ob1.shapeColor =  "green";
  ob2 = createSprite(300,100,50,50);
  ob2.shapeColor =  "green";
  ob3 = createSprite(500,100,50,50);
  ob3.shapeColor =  "green";
  ob4 = createSprite(700,100,50,50);
  ob4.shapeColor =  "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,ob4))  {
  movingRect.shapeColor = "red";
  ob4.shapeColor = "red";

 }  else {
   
    movingRect.shapeColor = "green";
    ob4.shapeColor = "green";
  }

 
  drawSprites();
}

