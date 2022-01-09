import { AllplatFormes,ctx, WIDTH,HEIGHT,players} from '../../../commun/global/lvl4/glb_var.js';
import {scroll1,scroll2,vscroll} from "./scroll.js";
import {move_hb_plat} from "./move_plat.js";
import {pauseMenu,pause,retry,winMenu,gmover,win} from "../menu.js"; 

export function loopAnimation(){
    
    if(!gmover && !pause && !win){
        requestAnimationFrame(loopAnimation);
        ctx.clearRect(0,0, WIDTH,HEIGHT);
        AllplatFormes.forEach(element => {
            element.x -= vscroll;
            element.draw();
        });

        players.forEach(element => {
            element.x -= vscroll;
            element.update();
        });
        scroll1();
        move_hb_plat(380,1);
    }

    if(gmover){
        retry();
    }
    if(pause){
        pauseMenu();
    }
    if(win){
        winMenu();
    }
}