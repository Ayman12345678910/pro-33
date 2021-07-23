const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var s1

var backgroundImage
var engine, world 

function preload(){
backgroundImage = loadImage("snow1.jpg")
}

function setup() {
  engine = Engine.create()
  world = engine.world

  createCanvas(800,400);

  s1 = new Snow()  
}

function draw() {
  background(backgroundImage);
  Engine.update(engine)  
  s1.display();

}