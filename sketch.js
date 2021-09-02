const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var score = 0;

function preload(){
  polygonImg=loadImage("Ball.png");
  bgImg = loadImage("BgImg.jpg");
  
}
function setup() {
  var canvas = createCanvas(displayWidth , displayHeight);
  engine = Engine.create();
  
  world = engine.world;
  b1=new Pin(480,275,20);
  b2=new Pin(510,275,20);
  b3=new Pin(540,275);
  b4=new Pin(570,275);
  b5=new Pin(600,275);
  b6=new Pin(450,275);
  b7=new Pin(630,275);
  b8=new Pin(480,235);
  b9=new Pin(510,235);
  b10=new Pin(540,235);
  b11=new Pin(570,235);
  b12=new Pin(600,235);
  b13=new Pin(510,195);
  b14=new Pin(530,195);
  b15=new Pin(560,195);
  b16=new Pin(530,155);
  b17=new Pin(800,100);
  b18=new Pin(800,140);
  b19=new Pin(830,140);
  b20=new Pin(770,140);
  b21=new Pin(800,180);
  b22=new Pin(830,180);
  b23=new Pin(860,180);
  b24=new Pin(770,180);
  b25=new Pin(740,180);
  ground1=new Ground(displayWidth/2, displayHeight-10,2000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background(bgImg); 
 
  Engine.update(engine);
  fill("white")
  push();
  textSize(15)
  text("Press space to get 2nd chance,also use mouse to play",300,100);
  pop();
  push();
  textSize(25);
  text("SCORE :" + score , 300 , 150);

  fill(135,206,234);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
 // fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
 // fill("yellow");
  b13.display();
  b14.display();
  b15.display();
 // fill("lightgreen");
  b16.display();
  //fill(254,192,203);
  b17.display();
  //fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();
  //fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);

  

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score(); 

  console.log(score);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
  
}