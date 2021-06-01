class Stone{
    constructor(x,y,width,height)

    {
     var option={
      
     restitution:0.5,
     density:2,
     friction:0.5
     
    
     }
    
    
     this.body=Bodies.rectangle(x,y,width,height,option)
     World.add(world,this.body)
    this.width=width;
    this.height=height;
    
    
    }
    
    display()
    
    {
        push ()
        translate(this.body.position.x,this.body.position)
        rotate(this.body.angle)
        fill("grey")
        rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
       pop ()
    }




}








