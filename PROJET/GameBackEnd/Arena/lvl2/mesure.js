let GroundsMesure = [{ 
    x: 0,
    y: 600,
    w: 500,
    h: 50,
},
{
    x: 500,
    y: 600,
    w: 500,
    h: 50,
},
{
    x: 1250,
    y: 600,
    w: 250,
    h: 50,
},
{
    x: 1500,
    y: 600,
    w: 500,
    h: 50,
},
{
    x: 2350,
    y: 430,
    w: 500,
    h: 50,
}
];

let LeviersMesure = [
{
    x: 1100,
    y: 100,
    w: 50,
    h: 50,
},
{
    x: 1350,
    y: 550,
    w: 50,
    h: 50,
}
];

let WallsMesure = [
{
    x: 1650,
    y: 350,
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
    y:330,
    w:50,
    h:100
}];

// On definie un tableau qui contiendra des objets qui correspondent aux mesures de chaque mur
let PlatformsMesure = [
{
    x: 850,                //elle monte et descends celle ci
    y: 330,
    w: 100,
    h: 10,              
},
{
    x: 1000,
    y: 150,
    w: 250,
    h: 10,
},
{
    x: 1050,
    y: 480,
    w: 150,
    h: 10,
},
{
    x: 2100,
    y: 500,
    w: 150,
    h: 10,
}
];


let ButtonsMesure = [
{
    x: 850,
    y: 575,
    w: 100,
    h: 25,
}
];

export{PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure,LeviersMesure,DoorMesure,WallsInvisibleMesure};