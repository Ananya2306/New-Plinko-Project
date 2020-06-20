// Create class for making plinkos
class Plinko{
    constructor(x,y){
      var options = {
         isStatic: true
      }
      // give shape of the plinkos
      this.body = Bodies.circle(x,y,10,options);
      this.radius = this.body.circleRadius;
      World.add(world,this.body);
    }
    // make display function
    display(){
        var pos = this.body.position;
        fill("yellow");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
