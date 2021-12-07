import { AllplatFormes,ctx, WIDTH,HEIGHT,players} from "../global/glb_var.js";
import {scroll1,vscroll} from "./scroll.js";
import {move_hb_plat} from "./move_plat.js";
import { loop } from "../functions/init.js";

export function loopAnimation(){
    if(loop){
        requestAnimationFrame(loopAnimation);
        ctx.clearRect(0,0, WIDTH,HEIGHT);
        AllplatFormes.forEach(element => { // c'est comme une boucle for je prefere celle la 
            element.x -= vscroll;
            element.draw();// on parcourt tous les elements du tableau plaformes pour ensuite les dessiner
        });

        players.forEach(element => {
            element.x -= vscroll;
            element.update();
        })
        scroll1();
        move_hb_plat(380,5);
        //move_dg_plat(350,1);
    }
}