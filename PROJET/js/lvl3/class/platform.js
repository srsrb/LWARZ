import {AllplatFormes,ctx} from '../global/glb_var.js';

export class Platform{
    constructor(image,x,y,width,height,vpmove){
        this.x = x;
        this.y = y;
        this.v = vpmove ;
        this.width = width;
        this.height = height;
        this.image = image;
        AllplatFormes.push(this); // a chaque creation de platforme on la met dans le tableau platFormes
    }
    draw(){ // methode qui permet de dessiner la plateforme
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}