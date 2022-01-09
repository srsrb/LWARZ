import{WIDTH,players} from '../../../commun/global/lvl3/glb_var.js';
import {PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure, LeviersMesure,DoorMesure,WallsInvisibleMesure} from '../mesure.js';

let vscroll = 0;

function scroll1(){
    if(players[0].x +players[0].width >= WIDTH/2 && players[0].x > players[1].x){
        if(players[0].vx > 0.5 ){
            vscroll = Math.ceil(players[0].vx-1)+0.5;
        }
    }
    else if(players[1].x +players[1].width >= WIDTH/2 && players[1].x > players[0].x){
        if(players[1].vx > 0.5 ){
            vscroll = Math.ceil(players[1].vx-1)+0.5;
        }
    }
    else{
        vscroll = 0;
    }
    for(let i = 0; i < GroundsMesure.length; i++){
        GroundsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < ButtonsMesure.length; i++){
        ButtonsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < PlatformsMesure.length; i++){
        PlatformsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < WallsMesure.length; i++){
        WallsMesure[i].x -= vscroll;
    }
    
    for(let i = 0; i < LeviersMesure.length; i++){
        LeviersMesure[i].x -= vscroll;
    }

    for(let i = 0; i < DoorMesure.length; i++){
        DoorMesure[i].x -= vscroll;
    }

    for(let i = 0; i < WallsInvisibleMesure.length; i++){
        WallsInvisibleMesure[i].x -= vscroll;
    }
}

function scroll2(){

    vscroll = 1;

    for(let i = 0; i < GroundsMesure.length; i++){
        GroundsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < ButtonsMesure.length; i++){
        ButtonsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < PlatformsMesure.length; i++){
        PlatformsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < WallsMesure.length; i++){
        WallsMesure[i].x -= vscroll;
    }

    for(let i = 0; i < LeviersMesure.length; i++){
        LeviersMesure[i].x -= vscroll;
    }

    for(let i = 0; i < DoorMesure.length; i++){
        DoorMesure[i].x -= vscroll;
    }

    for(let i = 0; i < WallsInvisibleMesure.length; i++){
        WallsInvisibleMesure[i].x -= vscroll;
    }
}

export {scroll1,scroll2,vscroll};