var ball 

function setup() {
  createCanvas(400, 400);
  ball = createSprite(20,20,10,10)
  ball.shapeColor = "blue";
}

function draw() {
  background(220);
  if(keyIsDown(UP_ARROW)) {
ball.y = ball.y-1
  }
  if(keyIsDown(DOWN_ARROW)){
ball.y = ball.y+1
  }
   if(keyIsDown(LEFT_ARROW)){
ball.x = ball.x+1
   }
   if(keyIsDown(RIGHT_ARROW)){
ball.x = ball.x-1
   }
 drawSprites() 
   
}