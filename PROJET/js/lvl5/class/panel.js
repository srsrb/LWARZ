import {ctx,AllplatFormes,panneau} from '../global/glb_var.js';
export class Panel{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width = 60;
        this.height = 65;
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(panneau,this.x,this.y,this.width,this.height);
    }
}