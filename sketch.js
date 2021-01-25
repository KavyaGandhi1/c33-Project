 const  Engine = Matter.Engine;
 const  World = Matter.World;
 const  Events = Matter.Events;
 const  Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var turn = 0;
var ground;
var bg;
var gameover;
var gameState = "Play";


function preload(){
  bg = loadImage("c33 Project Image.jpg");
  gameover = loadImage("game over.jpg");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    Engine.run(engine);
    
}
 


function draw() {
  background(bg);
  textSize(20)
  fill("green");
 text("Score : "+score,20,30);
 fill("blue");
 text("500",20,700);
 text("500",100,700);
 text("500",180,700);
 text("500",260,700);
 fill("orange");
 text("100",340,700);
 text("100",420,700);
 text("100",500,700);
 fill("red");
 text("200",580,700);
 text("200",660,700);
 text("200",740,700);

 ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!= null){
     particle.display();
    if(particle.body.position.y>750){
    
      if(particle.body.position.x<300){
score = score+500;


}
if(particle.body.position.x>301 && particle.body.position.x<600){
  score = score+100;

}
if(particle.body.position.x>601 && particle.body.position.x<800){
  score = score+200;
  
}
particle  = null;

  
    }
  if(turn>= 5 ){
    gameState = "end";
  }
  
    }
if(gameState === "end"){
image(gameover,200,400,200,200);
}
   }


function mousePressed(){
  if(gameState!== "end"){
    turn++;
     particle = new Particle(mouseX,10,10);
  }
}