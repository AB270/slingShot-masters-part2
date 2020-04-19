class Player{
    constructor(x, y) {
      var options = {
          
          'restitution':1.0,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50, 50, options);
      this.width = 30;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      push();
      translate(pos.x,pos.y);
      var angle=this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      fill("silver");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };