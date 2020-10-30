var s1
var s2
var s3
var s4
var s5
var s6

function setup() {
  createCanvas(800,400);

  s1=createSprite(300,200,50,50)
  s2=createSprite(400,200,50,50)

  s3=createSprite(500,300,50,50)
  s4=createSprite(700,300,50,50)

  s5=createSprite(500,200,50,50)
  s6=createSprite(700,200,50,50)

  s3.velocityX=1
  s4.velocityX=-1
}

function draw() {
  background(0);  

  s1.y=World.mouseY
  s1.x=World.mouseX

  /**if (give()){

    s1.shapeColor='pink'
    s2.shapeColor='pink'

  }

  else{
    s1.shapeColor='gray'
    s2.shapeColor='gray'

  }
  **/

  
  drawSprites();

  give(s1,s3)
  gives(s4,s2)
}

function gives(c,d){

  if (c.x-d.x < (c.width/2)+(d.width/2) && dx-c.x < (d.width/2)+(c.width/2)){

    c.velocityX=s3.velocityX*-1
    d.velocityX=s4.velocityX*-1
  }

}