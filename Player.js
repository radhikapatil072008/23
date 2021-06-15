class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="orange"
        this.spt.scale=0.05
        this.spt.addAnimation("player",playerAnimation)
        this.spt.visible=true
    }
    move(xdir,ydir){
        this.spt.x+=xdir*grid;
        this.spt.y+=ydir*grid;
    }
    
}