
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1=new Ground(600,680,1200,20)
 stone1=new Stone(600,100,100,100)
 rubber1=new Rubber(300,100,20,20)
 hammer1=new Hammer(800,500,100,20)
 sand1=new Sand(100,200,10,10)
 sand2=new Sand(130,200,10,10)
 sand3=new Sand(180,200,10,10)
 sand4=new Sand(220,200,10,10)
 iron1=new Ironbody(750,100,150,150)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display()
  stone1.display()
  rubber1.display()
  hammer1.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  iron1.display()
}



