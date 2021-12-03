class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200,
            damping: 0
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        Matter.World.add(world, this.sling);

    }

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
           
            
            pop();
        }
    }
    }