import { Controller } from "../functions/controller.js";
import { loopAnimation } from "../functions/loopAnimation.js";


let canvas = document.getElementById('canvas');
let navbar1 = document.getElementById('navbar1');
let start_btn = document.getElementById('start');
let pauseM = document.getElementById('pauseBlock');
let winBlock = document.getElementById('victoryBlock');

let getLiMenu = document.querySelectorAll('li');

let exit_btn =  document.getElementById('exit');

let hover = new Audio("/music/hover3.mp3");
let jojo = new Audio("/music/jojo.mp3");
hover.volume = 0.09;
let loseSound = new Audio("/music/lose.mp3");
let pauseSound = new Audio("/music/pause.mp3");
let winSound = new Audio("../music/win.mp3");
winSound.volume = 0.09;

let pause = false;

let startClicked = false;



let level_button = document.getElementById('level');
let module = document.getElementById('module');
let overlay = document.getElementById('overlay');
let header = document.getElementById('header1');





level_button.addEventListener('click', (e)=> {
    e.preventDefault();
    module.style.opacity = 1;
    module.style.transform = 'scale(1)';
    overlay.style.opacity = 1;
    overlay.style.zIndex = 1;
    module.style.display = 'flex';
    header.style.zIndex = 2;
});

overlay.addEventListener('click', ()=>{
    overlay.style.opacity = 0;
    module.style.opacity = 0;
    module.style.transform = 'scale(0)';
    module2.style.opacity = 0;
    module2.style.transform = 'scale(0)';
    overlay.style.zIndex = -1;
    header2.style.zIndex = -10;
    header.style.zIndex = -10;
})

let module2 = document.getElementById('module2');
let settings_button = document.getElementById('settings');
let header2 = document.getElementById('header2');

settings_button.addEventListener('click', (e)=> {
    e.preventDefault();
    module2.style.opacity = 1;
    module2.style.transform = 'scale(1)';
    overlay.style.opacity = 1;
    overlay.style.zIndex = 1;
    module2.style.display = 'flex';
    header2.style.zIndex = 2;
});

// fait reference au settings quand tu perds et au pause
let settings_btn = document.querySelectorAll('.settings_btn');
for(let i = 0; i < 2; i++){
    settings_btn[i].addEventListener('click', (e)=> {
        e.preventDefault();
        module2.style.opacity = 1;
        module2.style.transform = 'scale(1)';
        overlay.style.opacity = 1;
        overlay.style.zIndex = 1;
        module2.style.display = 'flex';
        header2.style.zIndex = 2;
    });
}


for(let i = 0; i < 4; i++){
    getLiMenu[i].addEventListener('mouseover', ()=>{
        if (hover.paused && hover.currentTime == 0) {
            hover.play();
        }
    })
}

for(let i = 0; i < 4; i++){
    getLiMenu[i].addEventListener('mouseout', ()=>{

        hover.pause();
        hover.currentTime = 0;
    })
}


play_pause_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    pauseM.style.transform = 'translateY(-3000px)';
    canvas.style.opacity = 1;
    IsOnPause(false);
    Controller();
    if(jojo.paused) {
        //jojo.play();
    }
})



start_btn.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    startClicked = true;
    
    Controller();

    //jojo.play();
    //jojo.volume = 0.05;
    
    navbar1.style.transform = 'translateY(-1300px)';
    canvas.style.display = "block";
    canvas.style.transform = 'translateY(0px)';
    canvas.style.transition = '1.2s opacity, 0.5s transform';
    canvas.style.opacity = '1';
    
})

exit_btn.addEventListener('click', ()=>{
    window.close();
})

function IsOnPause(state){
    pause = state;
    loopAnimation();
}

function pauseMenu(){

    pauseM.style.transform = 'translateY(-1800px)';
    canvas.style.transition = '0.2s opacity';
    canvas.style.opacity = '0.9';
}

function winMenu(){

    winBlock.style.transform = 'translateY(-2390px)';
    canvas.style.transition = '0.2s opacity';
    canvas.style.opacity = '0.9';
}

function retry(){
    let navbar2 = document.getElementById('navbar2');

    navbar2.style.transform = 'translateY(-1200px)';
    canvas.style.opacity = '0.7';
}

export {retry,pauseMenu,pause,IsOnPause,pauseM,startClicked,jojo,loseSound,pauseSound,winSound,winMenu};