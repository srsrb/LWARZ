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
perso1.src = '../../GameFrontEnd/img/lvl3/spritesheet_perso1/spritesheet1.png';
let perso2 = new Image();
perso2.src = '../../GameFrontEnd/img/lvl3/spritesheet_perso2/spritesheet2.png';
let sky = new Image();
sky.src = '../../GameFrontEnd/img/lvl3/background.png'; /*sky = new Plateforme(0, 0, WIDTH, HEIGHT,"skyblue");*/
let skys = [];
let platform = new Image();
platform.src = '../../GameFrontEnd/img/lvl3/platform.png';
let wall = new Image();
wall.src = '../../GameFrontEnd/img/lvl3/wall.png';
let ground = new Image();
ground.src = '../../GameFrontEnd/img/lvl3/ground.png';
let wall_t = new Image();
wall_t.src = '../../GameFrontEnd/img/lvl3/wall_transparent.png';
let buttons=[];
let buttondesac = new Image();
buttondesac.src = '../../GameFrontEnd/img/lvl3/button2.png';
let buttonact = new Image();
buttonact.src = '../../GameFrontEnd/img/lvl3/button1.png';
let levierdesac = new Image();
levierdesac.src = '../../GameFrontEnd/img/lvl3/levieroff.png';
let levieract = new Image();
levieract.src = '../../GameFrontEnd/img/lvl3/levieron.png';
let gameOverImg = new Image();
gameOverImg.src = "../../GameFrontEnd/img/lvl3/game-over.png";
let doors=[];
let doorclose = new Image();
doorclose.src = "../../GameFrontEnd/img/lvl3/door.png";
let dooropen = new Image();
dooropen.src = "../../GameFrontEnd/img/lvl3/dooropen.png";
let panneau = new Image();
panneau.src = "../../GameFrontEnd/img/lvl3/panneau.png";

export{canvas, ctx, HEIGHT, WIDTH,skys,sky,perso1,perso2,
    players,AllplatFormes,grounds,platforms,
    walls,buttons,gameOverImg,
    obstacles,gravite,friction,platform,wall,ground,wall_t,
    buttonact,buttondesac,vpmove,cmpt,leviers,doorclose,doors,
    walls_t,dooropen,levieract,levierdesac,panneau
};