
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var fireFighter, fireFighterImg
var bkImg
var weight, weightImg, wall, wallImg
var weight_con_1,weight_con_2
var fire, fireImg
var button, button2
var axe1, axe2, axeImg, axecon1, axecon2

function preload(){
  bkImg=loadImage("90c5343a00cf098851f2fbea066b1bcb.jpg")
  wallImg=loadImage("wall.png")
  axeImg=loadImage("axe_1fa93.png")
  weightImg=loadImage("weight.png")
  fireImg=loadImage("fire-png.webp")
  fireFighterImg=loadImage("dc465ab6cf99cadd7143269721545a05-firefighter-with-hose-pipe.png")
}

function setup() {
  createCanvas(800,800);
  frameRate(50)

  engine = Engine.create();
  world = engine.world;
  
  wall=createSprite(70,600,50,50)
  wall.addImage(wallImg)
  wall.scale=0.8

  fireFighter=createSprite(500,700,10,10)
  fireFighter.addImage(fireFighterImg)
  fireFighter.scale=0.4

fire=createSprite(40, 700, 10, 10)
fire.addImage(fireImg)
fire.scale=0.05

  
  axe1=Bodies.circle(220,5,10)
  World.add(world, axe1)

  axe2=Bodies.circle(480,5,10)
  World.add(world, axe2)

  button = createImg('cut-icon.png');
  button.position(220,10);
  button.size(30,30);
  button.mouseClicked(drop);

  button2 = createImg('cut-icon.png');
  button2.position(480,10);
  button2.size(30,30);
  button2.mouseClicked(drop2);

  //weight=createSprite(470,400,10,10)
  //weight.addImage(weightImg)
  //weight.scale=0.2
var optionw={
isStatic: false
}
  
   weight= Bodies.circle(400,170,100, optionw)
  World.add(world, weight)

  

  rope1=new Rope(10,{x: 600, y: 20})
  rope2=new Rope(10,{x: 100, y: 20 })
  rope3=new Rope(3,{x:220, y:-10})
  rope4=new Rope(3,{x:480, y:-10})

  weight_con_1=new Link(rope1,weight)
  weight_con_2= new Link(rope2,weight)
  axecon1=new Link(rope3, axe1)
  axecon2=new Link(rope4, axe2)
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);
  image(bkImg,0,0,width,height)

  push();
  imageMode(CENTER);
  if(weight!=null){
    image(weightImg,weight.position.x,weight.position.y,100,100);
  }
  pop();
  push();
  imageMode(CENTER);
  if(axe1!=null){
    image(axeImg,axe1.position.x,axe1.position.y,50,50);
  }
  pop();
 
  push();
  imageMode(CENTER);
  if(axe2!=null){
    image(axeImg,axe2.position.x,axe2.position.y,50,50 );

    
  }
  pop();
  
if(frameCount%5===0){
  fire.scale=fire.scale+0.001
}

  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();

 
  Engine.update(engine);
  


  drawSprites()
}
function drop()
{
 
  rope3.break();
  axecon2.detatch()
  axecon2=null

}
function drop2()
{
 
  rope4.break();
  axecon1.detatch()
}

