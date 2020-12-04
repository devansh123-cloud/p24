
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , ground;
var log1,log2,log3;



function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,620,width,20);
	log1 = new Log(900 , height-300 , 200 , 20);
	log1.shapeColor = "red";
	log2 = new Log(790,height-340, 20,100)
	log2.shapeColor = "red";
	log3 = new Log(1000,height-340, 20, 100);
	log3.shapeColor = "red";
	



	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  log1.display();
  log2.display()
  log3.display();

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-400});

  
	}
}



