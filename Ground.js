// Create the class for ground
class Ground {
  constructor(x,y,width,height){
      var options = {
          isStatic: true,
      }
      //Give the shape of ground
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  // make display function
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      noStroke();
      fill("Brown");
      rect(0,0,this.width,this.height);
      pop();
  }
}
