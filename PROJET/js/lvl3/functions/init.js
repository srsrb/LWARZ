import {Fond} from '../class/fond.js';
import {buttons, platforms,skys,WIDTH,HEIGHT,walls,grounds,ctx,wall,ground,platform,canvas,walls_t,wall_t,leviers,doors} from '../global/glb_var.js';

import {Button} from '../class/button.js';

import {Player} from '../class/player.js';

import {Wall} from '../class/wall.js';

import {Door} from '../class/door.js';


import {PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure, LeviersMesure,WallsInvisibleMesure,DoorMesure} from '../global/mesure.js';
import {Platform} from '../class/platform.js';
import { Levier } from '../class/levier.js';
import { jojo,loseSound,winSound} from '../global/menu.js';
import {Panel} from '../class/panel.js'


let gmover = false;
let win = false;

function initSky(){
    skys.push(new Fond(0-WIDTH));
    for(let i = 0; i < 4; i++){
        skys.push(new Fond(WIDTH * i));
    }
}

function initPanel(){
    new Panel(300,540);
}

function initLeviers(){
    for(let i = 0; i <  LeviersMesure.length; i++){
        leviers.push(new Levier(LeviersMesure[i].x, LeviersMesure[i].y, LeviersMesure[i].w,LeviersMesure[i].h));
    }
}

function initButton(){
    for(let i = 0; i <  ButtonsMesure.length; i++){
        buttons.push(new Button(ButtonsMesure[i].x, ButtonsMesure[i].y, ButtonsMesure[i].w,ButtonsMesure[i].h));
    }
}

function initWalls(){
    for(let i = 0; i <  WallsMesure.length; i++){
        walls.push(new Wall(wall,WallsMesure[i].x, WallsMesure[i].y, WallsMesure[i].w,WallsMesure[i].h));
    }
    for(let i = 0; i <  GroundsMesure.length; i++){
        grounds.push(new Wall(ground,GroundsMesure[i].x, GroundsMesure[i].y, GroundsMesure[i].w,GroundsMesure[i].h));
    }
    for(let i = 0; i <  WallsInvisibleMesure.length; i++){
        walls_t.push(new Wall(wall_t,WallsInvisibleMesure[i].x, WallsInvisibleMesure[i].y, WallsInvisibleMesure[i].w,WallsInvisibleMesure[i].h));
    }
}

function initPlatforms(){
    //on parcourt le tableau PlatformsMesure pour creer tous les murs et les mettre dans le tableau platforms
    for(let i = 0; i <  PlatformsMesure.length; i++){
        platforms.push(new Platform(platform,PlatformsMesure[i].x, PlatformsMesure[i].y, PlatformsMesure[i].w,PlatformsMesure[i].h));
    }
    platforms[4].image = wall_t;
    PlatformsMesure[4].w = 0;
    PlatformsMesure[4].h = 0;
}

function initDoor(){
    doors.push(new Door(DoorMesure[0].x,DoorMesure[0].y,DoorMesure[0].w,DoorMesure[0].h));
}

let p1;
let p2;

function initPlayers(){
    p1 = new Player(50,400,1);
    p2 = new Player(120,400,2);
}

function gameOver(){
    gmover = true;
    jojo.pause();
    jojo.currentTime = 0;
    loseSound.play();
    loseSound.volume = 0.2;
}

function victory(){
    win = true;
    jojo.pause();
    jojo.currentTime = 0;
    winSound.play();
    winSound.volume = 0.2;
}

function drawSprite(img,sX,sY,sW,sH,dX,dY,dW,dH){
    ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
}

export{initSky,initButton,gameOver,initPlayers,initPlatforms,initWalls,initLeviers,p1,p2,drawSprite,gmover,initDoor,initPanel,victory,win};