var car,wall;
var speed,weight;
var D;

function setup() {
  createCanvas(1600,400);
  speed = random(0,100);
  
  weight = random(400,1500);
  
  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "black"; 
}

function draw() {
  background(255,255,255);  
  
  if(car.collide(wall)){
  D = (0.5 * weight * speed * weight) / 22500;
  console.log(D)
  
  
  if( D <100 ){
  car.shapeColor = "green";
  }
    
  

  else if( D > 180){
    car.shapeColor = "red";
  }

  if( D >=100 && D<180){
    car.shapeColor = "yellow";
  }
  }
  drawSprites();

}