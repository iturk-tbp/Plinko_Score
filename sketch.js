const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0
var particle 
var turn = 0
var gameState = "play"

var divisionHeight=300;
var score =0;
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

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(particle!= null){
    particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x < 300){
         score = score + 500
         particle = null
         if(turn >= 5){
           gameState = "end"
         }
       }
       else if(particle.body.position.x > 301 && particle.body.position.x<600){
        score = score + 100
        particle = null
        if(turn >= 5){
          gameState = "end"
        }
      }
      else if(particle.body.position.x > 601 && particle.body.position.x<900){
        score = score + 200
        particle = null
        if(turn >= 5){
          gameState = "end"
        }
      }
     }
   }
   else{
     if(turn<5){
       mousePressed();
     }
     else{
       textSize(100)
       fill("white")
       stroke(4)
       text("GAME OVER",50,400)
     }
   }
   
   

   fill("white")
   stroke(3)
   textSize(30)
   text(score,50,50)
   text("500",15,600)
   text("500",95,600)
   text("500",175,600)
   text("500",255,600)
   text("100",335,600)
   text("100",415,600)
   text("100",495,600)
   text("200",575,600)
   text("200",655,600)
   text("200",735,600)
}

function mousePressed(){
  if (gameState == "play"){
    turn ++
    particle = new Particle(mouseX,10,10)
  }
}