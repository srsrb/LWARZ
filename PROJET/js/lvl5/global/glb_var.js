// GLOBAL VARIABLES


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const HEIGHT = canvas.height;
const WIDTH = canvas.width;

const gravite = 1;
const friction = 0.9;
const vpmove = 1;             // Variable Platform Move = VPMOVE
let cmpt = [                    // tableau d'objets de compteur.
    {
        platmove1:0,
        platmove2:0
    },
    {
        x:0
    },
    {
        x:0
    }
];

let AllplatFormes = []; //tableau qui va contenir tout contenir ex : mur, button, platfomes etc...
let grounds = [];
let platforms = []; // tableau qui contient toutes les plateformes
let walls = []; // tableau qui contient tous les murs
let walls_t = [];
let obstacles = [];// tableau qui contient tous les obstacles
let leviers = [];//tableau des leviers
let players = []; // tableau qui va contenir tous les joueurs si on en a plusieurs
let perso1 = new Image();
perso1.src = 'img/spritesheet_perso1/spritesheet1.png';
let perso2 = new Image();
perso2.src = 'img/spritesheet_perso2/spritesheet2.png';
let sky = new Image();
sky.src = 'img/background.png'; /*sky = new Plateforme(0, 0, WIDTH, HEIGHT,"skyblue");*/
let skys = [];
let platform = new Image();
platform.src = 'img/platform.png';
let wall = new Image();
wall.src = 'img/wall.png';
let ground = new Image();
ground.src = 'img/ground.png';
let wall_t = new Image();
wall_t.src = 'img/wall_transparent.png';
let buttons=[];
let buttondesac = new Image();
buttondesac.src = 'img/button2.png';
let buttonact = new Image();
buttonact.src = 'img/button1.png';
let levierdesac = new Image();
levierdesac.src = 'img/levieroff.png';
let levieract = new Image();
levieract.src = 'img/levieron.png';
let gameOverImg = new Image();
gameOverImg.src = "img/game-over.png";
let doors=[];
let doorclose = new Image();
doorclose.src = "img/door.png";
let dooropen = new Image();
dooropen.src = "img/dooropen.png";

export{canvas, ctx, HEIGHT, WIDTH,skys,sky,perso1,perso2,
    players,AllplatFormes,grounds,platforms,
    walls,buttons,gameOverImg,
    obstacles,gravite,friction,platform,wall,ground,wall_t,buttonact,buttondesac,vpmove,cmpt,leviers,doorclose,doors,walls_t,dooropen,levieract,levierdesac
};