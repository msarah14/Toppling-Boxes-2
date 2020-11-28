class Bird {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };

this.body=Bodies.rectangle(x,y,50,50,options)
this.height=height;
this.width=width;
World.add(world,this.body)
    };
display(){
 push();
translate(this.body.position.x,this.body.position.y);  
rotate(this.body.angle);
rect(0,0,this.width,this.height)
pop();
}
};