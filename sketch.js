const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   
    var ball_options ={
        restitution: 1
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    box1 = new Box(100,100,40,50);

    box2 = new Box(120,50,40,50); 

   ground = new Ground(200,400,400,20);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    box1.display();

    box2.display();

    ground.display();
}