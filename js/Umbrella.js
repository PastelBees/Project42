class Umbrella{
    constructor(x,y){
       var options ={ 
        isStatic:true
        }

        this.x=x
        this.y=y

        this.radius=70
        this.umbrella=Bodies.circle(x,y, 70, options);
       

        World.add(world,this.umbrella)
    }

    display(){
        var pos =this.umbrella.position;
        var angle=this.umbrella.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("black");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
    }
