var car, wall;
var speed, weight;
var deformation;
function setup() {
  
  background("GRAY");
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,10,5);
 
  wall = createSprite(350,200,10,60);
  wall.shapeColor = "grey";

  deformation = (weight*speed*speed)/2/22500;
  if(deformation<100){
    car.shapeColor = ("green");
  } else if(100 <= deformation <= 180) {
    car.shapeColor = ("yellow");
  } else if(deformation>180){
    car.shapeColor = ("red");
  }
  
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  car.collide(wall);
  
  textSize(20);
  text("Deformation: " + deformation,50,100);
  
  
  drawSprites();

}