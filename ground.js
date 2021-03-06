class Ground {
    constructor (x,y,width,height) {
        var prop={
            isStatic: true,
            density: 1,
            friction: 0.4 
        };

        this.body = Bodies.rectangle(x,y,width,height,prop);
        this.width = width;
        this.height = height;
        
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
    
