var rect1,rect2,rect3,rect4,paperObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(800, 700);
		
	rect1=createSprite(500,300,10,80);
	rect2=createSprite(650,300,10,80);
	rect3=createSprite(575,345,160,10);
	rect4=createSprite(410,350,700,10);
	paperObject=createSprite(200,300,10,10);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed(){
	  if(keyCode===UP_ARROW){
		  Matter.body.applyForce(this.body,this.body.position,{x:85,y:-85})
	  }
}
  drawSprites();
 
}



