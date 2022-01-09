import { AllplatFormes,doorclose,ctx } from '../../../commun/global/lvl2/glb_var.js';
export class Door{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = doorclose;
        AllplatFormes.push(this);
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}