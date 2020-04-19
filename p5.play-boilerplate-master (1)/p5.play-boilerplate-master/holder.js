class Holder{
constructor(x,y,radius){
  var options={
  'isStatic':true

  }
  this.body=Bodies.circle(x,y,radius,options)
  this.radius=10;

}

display(){
  var pos=this.body.position;
  ellipseMode(CENTER);
  fill("white");
  ellipse(pos.x,pos.y,10);

}


};