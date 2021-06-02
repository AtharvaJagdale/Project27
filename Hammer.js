class Hammer{

    constructor(x,y,width,height)

    {
     var option={
      
     restitution:0.5,
     density:5,
     friction:0.5
     
    
     }
    
    
     this.body=Bodies.rectangle(x,y,width,height,option)
     World.add(world,this.body)
    this.width=width;
    this.height=height;
    
    
    }
    
    display()
    
    {

        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push ()
        translate(this.body.position.x,this.body.position)
        rotate(this.body.angle)
        fill("brown")
        rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
       pop ()
    }


}