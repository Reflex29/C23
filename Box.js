class Box{
    constructor(x,y,width,height){
        var prop={
            restitution: 0.5,
            density: 0.5,
            friction: 0 
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