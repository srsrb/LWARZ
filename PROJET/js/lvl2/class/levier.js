import { AllplatFormes,buttondesac,ctx } from '../global/glb_var.js';
export class Levier{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = buttondesac;
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}