class Drop{
    constructor(x,y){
        var options = {
            friction: 0.001, 
            restitution:0.1
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius,options);
        
        
        World.add(world, this.body);
    }
    display(){
        // var pos = this.body.position; 
        // var angle = this.body.angle; 
        // push(); 
        // translate(pos.x, pos.y); 
        // rotate(angle); 
        // imageMode(CENTER); 
        // noStroke(); 
        // fill("blue")
        // ellipseMode(RADIUS); 
        // ellipse(0,0,this.radius,this.radius); 
        // pop();
        fill("blue"); 
        ellipseMode(CENTER); 
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
      }
      update(){
          if(this.body.position.y>800){
              Matter.Body.setPosition(this.body,{x: random(0,800),y: random(0,400)})
          }
      }
}