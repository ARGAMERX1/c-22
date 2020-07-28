const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var object;
var ball;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

engine = Engine.create();
world = engine.world;

var ground_options = {
isStatic:true

}

var ball_options = {
  restitution:1.0
}




ground = Bodies.rectangle(200,380,800,10, ground_options);
World.add(world,ground);

ball = Bodies.circle(200,100,20, ball_options);
World.add(world,ball);

}

function draw() {
  background(255,255,255);


  Engine.update(engine);
rectMode(CENTER);  
ellipseMode(RADIUS)  ;
circle(ball.position.x,ball.position.y,20);


rect(ground.position.x,ground.position.y,800,10);
rect(400,200,50,50);
  drawSprites();
}