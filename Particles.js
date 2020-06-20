// Create class for making particles
class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.3,
            friction: 0
        }
        //give the shape of particles
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.radius = radius;
        World.add(world, this.body);
    }
// make display function
    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(pos.x,pos.y);
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}
