class Pin{
  constructor(x, y){
    var options={
      isStatic:false,
      restitution:0.1,

      density:1.2,
      friction:1.5,
      
    }
    
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    this.image=loadImage("Pin1.png");
    this.Visibility = 255;
    
    this.body=Bodies.rectangle(x,y,30,40,options);
    World.add(world,this.body)
  }
  display(){
   
    if(this.body.speed<4){
      
      var angle = this.body.angle;
      var pinPos = this.body.position;
      push();
      translate(pinPos.x, pinPos.y);
      rotate(angle);
      
      
      imageMode(CENTER);
      rectMode(CENTER);
      image(this.image, 0 ,0 );

      pop();

    }
    else{
      World.remove(world,this.body);

      
      
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      
      pop();
    }
  }

  score()
  {
    if(this.Visibility < 0 && this.Visibility > -1005)
    {
       score  += 1;
    }
  }
}