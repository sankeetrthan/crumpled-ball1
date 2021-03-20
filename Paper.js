class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: true,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    
    this.x=x
    this.y=y
    this.radius = radius
    this.image = loadImage("paper.png")  
    this.body = Bodies.circle(this.x,this.y,this.radius, options);
    World.add(world, this.body);
    }
  display(){
    imageMode(CENTER);
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);

    fill("yellow");


    image(this.image,0, 0, this.radius);
    pop();
  }
  };