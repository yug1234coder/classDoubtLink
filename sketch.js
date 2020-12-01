
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var engine, world 

var toy
var body

var ConstraintToy
 





function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
toy = createSprite(300 , 400, 30 , 30)
ConstraintToy = createSprite(300, 300, 80, PI/2)
	Engine.run(engine);
  

var options = {

bodyA: toy.body,
bodyB: ConstraintToy.body,
stiffness: 0.04,
length: 10

}

var chain = Constraint.create(options)





}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



