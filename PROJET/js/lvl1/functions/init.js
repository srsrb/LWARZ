import {Fond} from '../class/fond.js';
import {buttons, platforms,skys,WIDTH,HEIGHT,walls,grounds,ctx,gameOverImg,wall,ground,leviers,platform,doors,wall_t,walls_t} from '../global/glb_var.js';

import {Button} from '../class/button.js';

import {Player} from '../class/player.js';

import {Wall} from '../class/wall.js';

import { Door } from '../class/door.js';

import {PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure, LeviersMesure,DoorMesure,WallsInvisibleMesure} from '../global/mesure.js';
import {Platform} from '../class/platform.js';
import { Levier } from '../class/levier.js';

let loop = true;
let gmover = false;

function initSky(){
    skys.push(new Fond(0-WIDTH));
    for(let i = 0; i < 4; i++){
        skys.push(new Fond(WIDTH * i));
    }
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

function initDoor(){
    doors.push(new Door(DoorMesure[0].x,DoorMesure[0].y,DoorMesure[0].w,DoorMesure[0].h));
}

function initPlatforms(){
    //on parcourt le tableau PlatformsMesure pour creer tous les murs et les mettre dans le tableau platforms
    for(let i = 0; i <  PlatformsMesure.length; i++){
        platforms.push(new Platform(platform,PlatformsMesure[i].x, PlatformsMesure[i].y, PlatformsMesure[i].w,PlatformsMesure[i].h));
    }
    platforms[1].image = wall_t;
    PlatformsMesure[1].w = 0;
    PlatformsMesure[1].h = 0;
}

let p1;
let p2;

function initPlayers(){
    p1 = new Player(50,400,1);
    p2 = new Player(120,400,2);
    //on va initier un 2eme joueur le jour ou on en aura besoin
}

function gameOver(){
    ctx.drawImage(gameOverImg, WIDTH/2 - 100, HEIGHT/2 - 100,200,200);
    loop = false;
    gmover = true;
}

function unpause(){
    loop = true;
}

function pause(){
    loop = false;
}

function drawSprite(img,sX,sY,sW,sH,dX,dY,dW,dH){
    ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
}

export{initSky,initButton,gameOver,initPlayers,initPlatforms,initWalls,initLeviers,initDoor,p1,p2,drawSprite,loop,gmover,unpause,pause};