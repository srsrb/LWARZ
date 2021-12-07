import {HEIGHT,WIDTH} from './glb_var.js';

let GroundsMesure = [{ 
    x: 0,
    y: 500,
    w: 500,
    h: HEIGHT - 500,
},
{
    x: 700,
    y: 500,
    w: 500,
    h: HEIGHT - 500,
},
{
    x: 1200,
    y: 500,
    w: 500,
    h: HEIGHT - 500,
},
{
    x: 1700,
    y: 180,
    w: 100,
    h: 50,
},
{
    x: 2400,
    y: 280,
    w: 500,
    h: HEIGHT - 500,
}
];

let LeviersMesure = [{
    x: 1000,
    y: 450,
    w: 100,
    h: 50,
}
];

let WallsMesure = [{
    x: 800,
    y: 350,
    w: 100,
    h: 150,
},   
{
    x: 800,
    y: 100,
    w: 100,
    h: 250,
}
] ;

let WallsInvisibleMesure = [
{                   // BOX DE FIN
    x:2450,
    y:-1000,
    w:10,
    h:500
},
{
    x:2550,
    y:-1000,
    w:10,
    h:500
},
{
    x:2450,
    y:-500,
    w:100,
    h:10
},
{
    x:2800,
    y:0,
    w:10,
    h:1000
}
];

let DoorMesure=[{
    x:2750,
    y:180,
    w:50,
    h:100
}];

// On definie un tableau qui contiendra des objets qui correspondent aux mesures de chaque mur
let PlatformsMesure = [{
    x: 270,
    y: 380,
    w: 200,
    h: 10,
},
{   
    x: 350,
    y: 260,
    w: 200,
    h: 10,
},
{
    x:1300,
    y:180,
    w:200,
    h:10,
},
{
    x:1100,
    y:180,
    w:200,
    h:10,
},
{
    x:1800,
    y:480,
    w:200,
    h:10,
},
{
    x: 2100,     //elle monte et descends celle ci
    y: 380,
    w: 200,
    h: 10,
}
];

let ButtonsMesure = [{
    x: 1700,
    y: 155,
    w: 100,
    h: 25,
}]

export{PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure,LeviersMesure,DoorMesure,WallsInvisibleMesure};