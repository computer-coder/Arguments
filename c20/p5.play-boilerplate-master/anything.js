function give(a,b){
  
    if (a.x-b.x < (a.width/2)+(b.width/2) && b.x-a.x < (b.width/2)+(a.width/2) && b.y-a.y < (a.height/2)+(b.height/2) && a.y-b.y < (a.height/2)+(b.height/2) ){
  
      a.shapeColor='pink'
      b.shapeColor='pink'
      //return true
    }
    else{
  
      a.shapeColor='gray'
      b.shapeColor='gray'
     //return false
    }
  
  }

  function gives(c,d){

    if (c.x-d.x < (c.width/2)+(d.width/2) && dx-c.x < (d.width/2)+(c.width/2)){
  
      c.velocityX=s3.velocityX*-1
      d.velocityX=s4.velocityX*-1
    }
  
  }