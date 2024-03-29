import {IsOnPause,pause,pauseM, pauseSound, jojo,startClicked} from '../menu.js';

let RIGHT,LEFT,UP,RIGHT2,LEFT2,UP2;


function Controller(){
    if(!pause && startClicked){
        window.addEventListener('keydown',function(e){
            if(e.keyCode == 39) RIGHT = true;
            if(e.keyCode == 37) LEFT = true;
            if(e.keyCode == 38) UP = true;
            if(e.keyCode == 68) RIGHT2 = true;
            if(e.keyCode == 81) LEFT2 = true;
            if(e.keyCode == 90) UP2 = true;
        });
        window.addEventListener('keyup',function(e){
            if(e.keyCode == 39) RIGHT = false;
            if(e.keyCode == 37) LEFT = false;
            if(e.keyCode == 38) UP = false;  
            if(e.keyCode == 68) RIGHT2 = false;
            if(e.keyCode == 81) LEFT2 = false;
            if(e.keyCode == 90) UP2 = false;
        });
        window.addEventListener('keydown', function(e){
            if(e.keyCode == 80 && pause == false){
                console.log("efv")
                IsOnPause(true);pauseSound.play(); pauseSound.volume = 0.2;jojo.pause();}                                                            // Si P est préssé, jeu en pause.
        });
    }
}


function updateGamepad(){
    requestAnimationFrame(updateGamepad);

    const gamepad1 = navigator.getGamepads()[0];
    const gamepad2 = navigator.getGamepads()[1];

    if (!gamepad1) return;

    if(gamepad1.axes[0] < -0.1){
        LEFT = true;
    } else LEFT = false;
    if(gamepad1.axes[0] > 0.1){
        RIGHT = true;
    } else RIGHT = false;
    if(gamepad1.buttons[1].pressed == true){
        UP = true;
    } else UP = false;

    if (!gamepad2) return;
    if(gamepad2.axes[0] < -0.1){
        LEFT2 = true;
    } else LEFT2 = false;
    if(gamepad2.axes[0] > 0.1){
        RIGHT2 = true;
    } else RIGHT2 = false;
    if(gamepad2.buttons[0].pressed == true){
        UP2 = true;
    } else UP2 = false;
}


export{Controller,updateGamepad, RIGHT,LEFT,UP,RIGHT2,LEFT2,UP2};