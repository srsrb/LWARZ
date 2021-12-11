import {HEIGHT,WIDTH} from './glb_var.js';

let GroundsMesure = [{ 
    x: 0,
    y: 500,
    w: 500,
    h: HEIGHT - 500,
},
{
    x: 500,
    y: 500,
    w: 500,
    h: HEIGHT - 500,
},
{
    x: 1000,
    y: 500,
    w: 500,
    h: HEIGHT - 500,
},
{
    x: 2300,
    y: 280,
    w: 500,
    h: HEIGHT - 500,
}
];

let LeviersMesure = [{
    x: 750,
    y: 450,
    w: 50,
    h: 50,
},
{
    x: 1675,
    y: 330,
    w: 50,
    h: 50,
}
];

let WallsMesure = [{
    x: 500,
    y: 250,
    w: 100,
    h: 250,
}
] ;

let WallsInvisibleMesure = [
{                   // BOX DE FIN
    x:2350,
    y:-1000,
    w:10,
    h:500
},
{
    x:2450,
    y:-1000,
    w:10,
    h:500
},
{
    x:2350,
    y:-500,
    w:100,
    h:10
},
{
    x:2700,
    y:0,
    w:10,
    h:1000
}
];

let DoorMesure=[{
    x:2650,
    y:180,
    w:50,
    h:100
}];

// On definie un tableau qui contiendra des objets qui correspondent aux mesures de chaque mur
let PlatformsMesure = [
{
    x: 1600,
    y: 380,
    w: 200,
    h: 10,
},
{
    x: 1950,                //elle monte et descends celle ci
    y: 380,
    w: 200,
    h: 10,              
}
];

let ButtonsMesure = []

export{PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure,LeviersMesure,DoorMesure,WallsInvisibleMesure};