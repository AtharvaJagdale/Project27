class Sand{
    constructor(x,y,radius)
    {
     var option={
      
     restitution:0.3,
     density:2,
     friction:0.3
     
    
     }
    
    
     this.body=Bodies.circle(x,y,radius,option)
     World.add(world,this.body)
     this.radius=2*radius
    
    }
    
    display()
    
    {
        push ()
        translate(this.body.position.x,this.body.position)
        rotate(this.body.angle)
        fill("blue")
        rectMode(CENTER)
       circle(this.body.position.x,this.body.position.y,this.radius)
       pop ()
    }


}








