class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-1;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:1,
          stiffness:0.05
        });
        World.add(engine.world,this.link);
    } 

    dettach()
    {
      World.remove(engine.world,this.link);
     
    }
}