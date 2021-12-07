import {Controller,updateGamepad} from './functions/controller.js';


import{initSky,initButton,initPlayers,initPlatforms,initWalls, initLeviers, initDoor} from './functions/init.js';



import {loopAnimation} from './functions/loopAnimation.js';

initSky();
initPlatforms();
initLeviers();
initButton();
initWalls();
initDoor();
initPlayers();


Controller();
updateGamepad();


loopAnimation();