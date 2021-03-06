var thickness,wall;
var speed,weight,bullet;



function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

 weight = random(30,52);
 speed = random(223,321);
 
 bullet = createSprite(100,200,20,10)

}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall) ){

      bullet.velocityX = 0;
      var  damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);

      if(damage>10){
        wall.shapeColor = color(255,0,0);
      }


      if(damage<10){
        wall.shapeColor = color(0,255,0);
        
      }



  }
  
  drawSprites();
}



function hasCollided(lbullet,lwall){
     bulletRightEdge = lbullet.x + lbullet.width;
     wallLeftEdge = lwall.x;
     if(bulletRightEdge >=wallLeftEdge){
       return true
     }
       return false;    
}