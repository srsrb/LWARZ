import{vpmove,cmpt, platforms} from '../../../commun/global/lvl2/glb_var.js';
import {PlatformsMesure} from '../mesure.js';
function move_hb_plat(vali,i){ //vali = vleur de la plateforme i.
    if(PlatformsMesure[i].y >= vali - 100 && cmpt[0].platmove1 == 0){
        PlatformsMesure[i].y -= vpmove;
        platforms[i].y-=vpmove;
        if(vali - 100 == PlatformsMesure[i].y){
            cmpt[0].platmove1 = 1;
        }
    }
    if(PlatformsMesure[i].y <= vali + 100 && cmpt[0].platmove1 == 1){
        PlatformsMesure[i].y += vpmove;
        platforms[i].y+=vpmove;
        if(vali + 100 == PlatformsMesure[i].y){
            cmpt[0].platmove1 = 0;
        }
    }
}

function move_dg_plat(vali,i){ //vali = vleur de la plateforme i.
    if(PlatformsMesure[i].x >= vali - 100 && cmpt[0].platmove2 == 0){
        PlatformsMesure[i].x -= vpmove;
        platforms[i].x-=vpmove;
        if(vali - 100 == PlatformsMesure[i].x){
            cmpt[0].platmove2 = 1;
        }
    }
    if(PlatformsMesure[i].x <= vali + 100 && cmpt[0].platmove2 == 1){
        PlatformsMesure[i].x += vpmove;
        platforms[i].x+=vpmove;
        if(vali + 100 == PlatformsMesure[i].x){
            cmpt[0].platmove2 = 0;
        }
    }
}

export {move_hb_plat,move_dg_plat};