const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var gd;
var left;
var right;
var ball;




function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  gd =new Ground(450,350,900,12);
  right = new Ground(600,310,12,70);
  left = new Ground(750,310,12,70);
  
  var options = {
	isStatic : false,
  restitution : 0.3,
	friction : 0,
	density : 1.2
  }

  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  gd.show();
  left.show();
  right.show();

  var pos = ball.position;

  fill("white");
  ellipse(pos.x,pos.y,15);


  
  Engine.update(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:0});
  
	}

  }
