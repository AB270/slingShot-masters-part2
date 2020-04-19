const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;
var box,box1,box2,box3,box4,ground,box5,box6,box7,box8,pl,sling,holder;




function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    

    box=new Box(750,930,30,30);
    box1=new Box(780,920,30,30);
    box2=new Box(810,950,30,30);
    box3=new Box(840,900,30,30);
    box4=new Box(870,910,30,30);

    box5=new Box2(780,900,30,30);
    box6=new Box2(810,880,30,30);
    box7=new Box2(840,850,30,30);
    box8=new Box3(810,840,30,30);
    
    
    ground=new Ground(500,1000,1000,20);
   
    pl=new Player(200,700);
    holder=new Holder(200,800,10);
    sling=new Slingshot(pl.body,holder.body);
    
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
     
    pl.display();
    holder.display();
    sling.display();
    ground.display();
    
}

function mouseDragged() {
  Matter.Body.setPosition(pl.body,{x:mouseX , y:mouseY})
  
  
  }
  
  function mouseReleased() {
  sling.fly();
  
  }