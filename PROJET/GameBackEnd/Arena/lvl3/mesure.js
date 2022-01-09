let GroundsMesure = [{ 
    x: 0,
    y: 600,
    w: 500,
    h: 50,
},
{ 
    x: 700,
    y: 600,
    w: 200,
    h: 50,
},
{ 
    x: 1800,
    y: 150,
    w: 200,
    h: 50,
},
{
    x:2500,
    y:300,
    w:200,
    h:40
}


];

let LeviersMesure = [{
    x: 1850,
    y: 100,
    w: 50,
    h: 50,
},

];

let WallsMesure = [{
    x: 0,
    y: 0,
    w: 0,
    h: 0,
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
    y:200,
    w:50,
    h:100
}];

// On definie un tableau qui contiendra des objets qui correspondent aux mesures de chaque mur
let PlatformsMesure = [
{
    x: 1000,
    y: 500,
    w: 150,
    h: 10, 
},
{
    x: 1300,                
    y: 500,
    w: 200,
    h: 10,              
},
{
    x: 1650,                
    y: 480,
    w: 200,
    h: 10, 
},
{
    x: 1900,                
    y: 350,
    w: 200,
    h: 10, 
},
{
    x: 2200,                
    y: 300,
    w: 150,
    h: 10, 
}
];

let ButtonsMesure = []

export{PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure,LeviersMesure,DoorMesure,WallsInvisibleMesure};