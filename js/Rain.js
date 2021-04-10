class Rain{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: .2,
            friction:0.2
            
            
        }

        this.x=x
        this.y=y
        this.radius=5
        this.rain=Bodies.circle(x,y, 5, options);
       

        World.add(world,this.rain)
    }

   
 
    
    display(){
        
        var pos =this.rain.position;
        var angle=this.rain.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop();

        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
      }


    


