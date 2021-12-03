const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball2,ball3,ball4,ball5;
var const1,const2,const3

engine: engine;

function setup(){
  createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world
    ball1 = new Ball(200,100,50);
    ball2 = new Ball(500,300,50);
    ball3 = new Ball(600,300,50);
    ball4 = new Ball(700,300,50);
    ball5 = new Ball(800,300,50);
    const1 = new String(ball1.body,{x:400,y:100});
    const2 = new String(ball2.body,{x:500,y:100});
    const3 = new String(ball3.body,{x:600,y:100});
    const4 = new String(ball4.body,{x:700,y:100});
    const5 = new String(ball5.body,{x:800,y:100});


}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
}

function mouseReleased(){
 console.log(ball1.body.position)   
}