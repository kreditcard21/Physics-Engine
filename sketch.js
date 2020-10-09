//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// angry birds
var engine, world, object, object1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var option = {
     isStatic : true

  }

  var balloption = {
    restitution : 1.3
  }
  object = Bodies.rectangle(200,380,400,50,option);
  object1 = Bodies.circle(200, 300, 50, balloption);

  // add it to world
  World.add(world,object);
  World.add(world, object1);
}

function draw() {
  background(0,0,0);  // rgb (0-255)
  Engine.update(engine);
  rectMode(CENTER);
  rect (400,200,50,50);
  rect (object.position.x, object.position.y, object.width, object.height);
  ellipse (object1.position.x, object1.position.y, object1.radius);
}