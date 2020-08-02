class paper {
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
      paperObject.body= Matter.Bodies.circle(10,20,2,options)
      
          this.image=loadImage("paper.png");
    
      
        World.add(world,paperObject.body )
    }
    dispaly(){
        var pos=paperObject.body.position;
        var angle=paperObject.angle;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image);
        pop ();
    }
}