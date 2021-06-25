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
         var pointA=this.sling.bodyA.position;
         var pointB=this.pointB
         push();
         stroke(48,22,8);
         strokeWeight(7);

         line(pointA.x - 20, pointA.y, pointB.x-10, point.y);
    }

}
