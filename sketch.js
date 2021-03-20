const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 450, 50);

  ground = new Ground(400,height, 800, 20);
  
 bin = new Dustbin(580,520,150,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);


  background("white");
  
  

  paper.display();

  ground.display();

 bin.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.setStatic(paper.body,false);
    Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y: -80})
  }
}