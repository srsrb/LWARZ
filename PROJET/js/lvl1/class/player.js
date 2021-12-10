import {ctx,perso1,perso2,
    players,grounds,platforms,leviers,
    gravite,friction,walls,buttons,HEIGHT,wall,wall_t, buttondesac,buttonact,cmpt, platform,doors,walls_t,dooropen,levieract
} from '../global/glb_var.js';

import {PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure, LeviersMesure,DoorMesure,WallsInvisibleMesure} from '../global/mesure.js';

import {RIGHT,LEFT,UP,RIGHT2,LEFT2,UP2} from '../functions/controller.js';

import{gameOver,p1,p2,drawSprite} from '../functions/init.js';

let cmptend = 0;

export class Player{
    constructor(x, y, whichplayer){
        this.x = x;
        this.y = y;
        this.width = 48;
        this.height = 60;
        this.frameX = 0;
        this.frameY = 0;
        this.jump = 30;
        this.move = false;
        this.jumping = true;
        this.btn = 0;
        this.vx = 0;
        this.vy = 0;
        this.velocity = .5;
        this.whichplayer = whichplayer;// viariable temporaire qu'on pourrais peut etre utiliser plus tard si on plusieurs joueurs
        players.push(this);// de meme a chaque creation de joueur on le met dans le tableau players au cas on a plusieurs joueurs apres
    }

    draw(){
        if(this.whichplayer==1){
            drawSprite(perso1, this.width * this.frameX, 0, this.width, this.height, this.x, this.y,this.width,this.height);
        }
        else if(this.whichplayer==2){
            drawSprite(perso2, this.width * this.frameX, 0, this.width, this.height, this.x, this.y,this.width,this.height);
        }
    }
    
    update(){
        if(this.whichplayer == 1){

            cmpt[this.whichplayer].x += 1;                          //Ce compteur est le compteur pour changer le sprite du personnage 1. 

            if(UP && this.jumping == false){
                this.vy -= this.jump;
                this.jumping = true;
            }

            if(LEFT){
                this.vx -= this.velocity;
                this.move = true;
                if(this.frameX < 4){
                    this.frameX = 4;
                }
            }
    
            if(RIGHT){
                this.vx += this.velocity;
                this.move = true;
                if(this.frameX > 3){
                    this.frameX = 0;
                }
            }
            
            if(!RIGHT && !LEFT || RIGHT && LEFT){this.move = false;}

            this.vy += gravite;
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= friction;
            this.vy *= friction;
            
            if(this.x + this.width < 0){
                gameOver();
            }

            if(this.y > HEIGHT){
                gameOver();
            }
        }


        if(this.whichplayer == 2){

            cmpt[this.whichplayer].x += 1;          //Ce compteur est le compteur pour changer le sprite du personnage 2. 

            if(UP2 && this.jumping == false){
                this.vy -= this.jump;
                this.jumping = true;
            }

            if(LEFT2){
                this.vx -= this.velocity;
                this.move = true;
                if(this.frameX < 4){
                    this.frameX = 4;
                }
            }
    
            if(RIGHT2){
                this.vx += this.velocity;
                this.move = true;
                if(this.frameX > 3){
                    this.frameX = 0;
                }
            }

            if(!RIGHT2 && !LEFT2 || RIGHT2 && LEFT2){this.move = false;}

            if(this.y > HEIGHT){
                gameOver();
            }

            this.vy += gravite;
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= friction;
            this.vy *= friction;
    
            if(this.x + this.width < 0){
                gameOver();
            }
        }

        this.Bouge(this.whichplayer);
        this.WallsCollision();
        this.GroundsCollision();
        this.LeviersCollision();
        this.PlatformsCollision();
        this.PlayersCollision();
        this.WallsInvisibleCollision();
        this.DoorCollision();
        this.draw();
    }

    Bouge(i){
        if(this.frameX < 3 && this.move && cmpt[i].x >= 7){
            this.frameX++;
            cmpt[i].x = 0;
        }
        else if(this.frameX == 3){this.frameX = 0;}
        else if(!this.move && this.frameX < 3){this.frameX = 0;}

        if(this.frameX > 3 && this.move && cmpt[i].x >= 7){
            this.frameX++;
            cmpt[i].x = 0;
        }
        else if(this.frameX == 7){this.frameX = 4;}
        else if(!this.move && this.frameX > 3){this.frameX = 4;}
    }

    DoorCollision(){
        if(
            this.x + this.width - 10 >= DoorMesure[0].x &&                         // + 10 et - 10 sont pour qu'il tombe des que ses pieds sortent de la plateforme
            this.x + 10 <= (DoorMesure[0].x + DoorMesure[0].w) &&
            this.y + this.height >= DoorMesure[0].y && 
            this.y <= DoorMesure[0].y + DoorMesure[0].h
        ){
            cmptend++;
            doors[0].image = dooropen;
            this.x = WallsInvisibleMesure[0].x + WallsInvisibleMesure[0].w + 5;
            this.y = WallsInvisibleMesure[2].y - this.height;
            if(cmptend==2){
                //win();
                gameOver();
            }
        }
    }

    GroundsCollision(){
        for(let i = 0; i < grounds.length; i++){
            if(                                                                      
                this.y + this.height - 1 > (GroundsMesure[i].y) &&
                this.y <= (GroundsMesure[i].y + GroundsMesure[i].h) &&
                this.x + this.width >= (GroundsMesure[i].x) &&
                this.x + this.width - 5 < (GroundsMesure[i].x)                         
                ){
                this.x = GroundsMesure[i].x - this.width;
                this.vx = 0;
            }
            else if(                                                                       
                this.y + this.height - 1> (GroundsMesure[i].y) &&
                this.y < (GroundsMesure[i].y + GroundsMesure[i].h) &&
                this.x < (GroundsMesure[i].x + GroundsMesure[i].w) &&
                this.x + 5 > (GroundsMesure[i].x + GroundsMesure[i].w)                     
                ){
                this.x = GroundsMesure[i].x + GroundsMesure[i].w;
                this.vx = 0;
            }
            
            else{
                if(                                                                        
                    this.x + this.width >= GroundsMesure[i].x &&
                    this.x <= (GroundsMesure[i].x + GroundsMesure[i].w) &&
                    this.y + this.height >= (GroundsMesure[i].y) &&
                    this.y + this.height <= (GroundsMesure[i].y + GroundsMesure[i].h)
                    ){
                    this.y = GroundsMesure[i].y - this.height;    
                    this.vy = 0;
                    this.jumping = false;
                }
                else if(
                    this.x + this.width >= GroundsMesure[i].x &&
                    this.x <= (GroundsMesure[i].x + GroundsMesure[i].w) &&
                    this.y + this.height >= (GroundsMesure[i].y + GroundsMesure[i].h) &&
                    this.y <= (GroundsMesure[i].y + GroundsMesure[i].h)
                ){
                    this.y = GroundsMesure[i].y + GroundsMesure[i].h;
                    this.vy = 1;
                }
            }
        }
    }

    LeviersCollision(){// gerer les collisions avec tous les leviers
        for(let i = 0; i < leviers.length; i++){
            if(
                this.y + this.height - 1 > (LeviersMesure[i].y) &&
                this.y <= (LeviersMesure[i].y + LeviersMesure[i].h) &&
                this.x + this.width >= (LeviersMesure[i].x) &&
                this.x + this.width - 5 < (LeviersMesure[i].x)
                ){
    
                leviers[i].image = levieract;
                if(i==0){
                    walls[0].image = wall_t;
                    WallsMesure[0].w = 0;
                    WallsMesure[0].h = 0;
                }
                else if(i==1){
                    platforms[1].image = platform;
                    PlatformsMesure[1].w = 200;
                    PlatformsMesure[1].h = 10;
                }
            }
            else if(
                this.y + this.height - 1 > (LeviersMesure[i].y) &&
                this.y <= (LeviersMesure[i].y + LeviersMesure[i].h) &&
                this.x <= (LeviersMesure[i].x + LeviersMesure[i].w) &&
                this.x + 5 > (LeviersMesure[i].x + LeviersMesure[i].w)
            ){
                leviers[i].image = levieract;
                if(i==0){
                    walls[0].image = wall_t;
                    WallsMesure[0].w = 0;
                    WallsMesure[0].h = 0;
                }
                else if(i==1){
                    platforms[1].image = platform;
                    PlatformsMesure[1].w = 200;
                    PlatformsMesure[1].h = 10;
                }
            }
            else{
                if(                                                                        
                    this.x + this.width >= LeviersMesure[i].x &&
                    this.x <= (LeviersMesure[i].x + LeviersMesure[i].w) &&
                    this.y + this.height >= (LeviersMesure[i].y) &&
                    this.y + this.height <= (LeviersMesure[i].y + LeviersMesure[i].h)
                    ){
                    leviers[i].image = levieract;
                    if(i==0){
                        walls[0].image = wall_t;
                        WallsMesure[0].w = 0;
                        WallsMesure[0].h = 0;
                    }
                    else if(i==1){
                        platforms[1].image = platform;
                        PlatformsMesure[1].w = 200;
                        PlatformsMesure[1].h = 10;
                    }
                }
                else if(
                    this.x + this.width >= LeviersMesure[i].x &&
                    this.x <= (LeviersMesure[i].x + LeviersMesure[i].w) &&
                    this.y + this.height >= (LeviersMesure[i].y + LeviersMesure[i].h) &&
                    this.y <= (LeviersMesure[i].y + LeviersMesure[i].h)
                ){
                    leviers[i].image = levieract;
                    if(i==0){
                        walls[0].image = wall_t;
                        WallsMesure[0].w = 0;
                        WallsMesure[0].h = 0;
                    }
                    else if(i==1){
                        platforms[1].image = platform;
                        PlatformsMesure[1].w = 200;
                        PlatformsMesure[1].h = 10;
                    }
                }
            }
        }
    }


    PlatformsCollision(){// gerer les collisions avec toutes les plateformes 
        for(let i = 0; i < platforms.length; i++){
            if(
                this.x + this.width - 10 >= PlatformsMesure[i].x &&                         // + 10 et - 10 sont pour qu'il tombe des que ses pieds sortent de la plateforme
                this.x + 10 <= (PlatformsMesure[i].x + PlatformsMesure[i].w) &&
                this.y + this.height >= (PlatformsMesure[i].y) &&
                this.y + this.height <= (PlatformsMesure[i].y + PlatformsMesure[i].h)
                ){
    
                this.y =  PlatformsMesure[i].y - this.height;    
                this.vy = 0;
                this.jumping = false;
            } 
        }
    }


    WallsCollision(){// gerer les collisions avec tous les murs 
        for(let i = 0; i < walls.length; i++){
            if(WallsMesure[i].w != 0 && WallsMesure[i].h != 0){
                if(                                                                        //Collisions mur coté gauche
                    this.y + this.height - 1 > (WallsMesure[i].y) &&
                    this.y <= (WallsMesure[i].y + WallsMesure[i].h) &&
                    this.x + this.width >= (WallsMesure[i].x) &&
                    this.x + this.width - 5 < (WallsMesure[i].x)                           //car vx < 5 (vx max = 4.9999....9)
                    ){
    
                    this.x = WallsMesure[i].x - this.width;
                    this.vx = 0;
                }
                else if(                                                                        //Collisions mur coté droit
                    this.y + this.height - 1 > (WallsMesure[i].y) &&
                    this.y <= (WallsMesure[i].y + WallsMesure[i].h) &&
                    this.x <= (WallsMesure[i].x + WallsMesure[i].w) &&
                    this.x + 5 > (WallsMesure[i].x + WallsMesure[i].w)                     //car vx < 5 (vx max = 4.9999....9)
                    ){
    
                    this.x = WallsMesure[i].x + WallsMesure[i].w;
                    this.vx = 0;
                }
                
                else{
                    if(                                                                        //Collisions haut du mur 
                        this.x + this.width >= WallsMesure[i].x &&
                        this.x <= (WallsMesure[i].x + WallsMesure[i].w) &&
                        this.y + this.height >= (WallsMesure[i].y) &&
                        this.y + this.height <= (WallsMesure[i].y + WallsMesure[i].h)
                        ){
                        this.y = WallsMesure[i].y - this.height;    
                        this.vy = 0;
                        this.jumping = false;
                    }
                    else if(
                        this.x + this.width >= WallsMesure[i].x &&
                        this.x <= (WallsMesure[i].x + WallsMesure[i].w) &&
                        this.y + this.height >= (WallsMesure[i].y + WallsMesure[i].h) &&
                        this.y <= (WallsMesure[i].y + WallsMesure[i].h)
                    ){
                        this.y = WallsMesure[i].y + WallsMesure[i].h;
                        this.vy = 1;
                    }
                }
            }
        }
    }

    ButtonsCollision(){// gerer les collisions avec tous les boutons
        for(let i = 0; i < buttons.length; i++){
            this.btn=0;
            if(
                this.y + this.height - 1 > (ButtonsMesure[i].y) &&
                this.y <= (ButtonsMesure[i].y + ButtonsMesure[i].h) &&
                this.x + this.width >= (ButtonsMesure[i].x) &&
                this.x + this.width - 5 < (ButtonsMesure[i].x)
                ){
                
                this.x = ButtonsMesure[i].x - this.width;
                this.vx = 0;
            }
            else if(
                this.y + this.height - 1 > (ButtonsMesure[i].y) &&
                this.y <= (ButtonsMesure[i].y + ButtonsMesure[i].h) &&
                this.x <= (ButtonsMesure[i].x + ButtonsMesure[i].w) &&
                this.x + 5 > (ButtonsMesure[i].x + ButtonsMesure[i].w)
            ){
                this.x = ButtonsMesure[i].x + ButtonsMesure[i].w;
                this.vx = 0;
            }
            
            else{
                if(
                    this.x + this.width >= ButtonsMesure[i].x &&
                    this.x <= (ButtonsMesure[i].x + ButtonsMesure[i].w) &&
                    this.y + this.height >= (ButtonsMesure[i].y) &&
                    this.y + this.height <= (ButtonsMesure[i].y + ButtonsMesure[i].h)
                    ){
                        //on a pas de bouttons ici
                }
            }
        }
    }

    WallsInvisibleCollision(){// gerer les collisions avec tous les murs 
        for(let i = 0; i < walls_t.length; i++){
            if(WallsInvisibleMesure[i].w != 0 && WallsInvisibleMesure[i].h != 0){
                if(                                                                        //Collisions mur coté gauche
                    this.y + this.height - 1 > (WallsInvisibleMesure[i].y) &&
                    this.y <= (WallsInvisibleMesure[i].y + WallsInvisibleMesure[i].h) &&
                    this.x + this.width >= (WallsInvisibleMesure[i].x) &&
                    this.x + this.width - 5 < (WallsInvisibleMesure[i].x)                           //car vx < 5 (vx max = 4.9999....9)
                    ){
    
                    this.x = WallsInvisibleMesure[i].x - this.width;
                    this.vx = 0;
                }
                else if(                                                                        //Collisions mur coté droit
                    this.y + this.height - 1 > (WallsInvisibleMesure[i].y) &&
                    this.y <= (WallsInvisibleMesure[i].y + WallsInvisibleMesure[i].h) &&
                    this.x <= (WallsInvisibleMesure[i].x + WallsInvisibleMesure[i].w) &&
                    this.x + 5 > (WallsInvisibleMesure[i].x + WallsInvisibleMesure[i].w)                     //car vx < 5 (vx max = 4.9999....9)
                    ){
    
                    this.x = WallsInvisibleMesure[i].x + WallsInvisibleMesure[i].w;
                    this.vx = 0;
                }
                
                else{
                    if(                                                                        //Collisions haut du mur 
                        this.x + this.width >= WallsInvisibleMesure[i].x &&
                        this.x <= (WallsInvisibleMesure[i].x + WallsInvisibleMesure[i].w) &&
                        this.y + this.height >= (WallsInvisibleMesure[i].y) &&
                        this.y + this.height <= (WallsInvisibleMesure[i].y + WallsInvisibleMesure[i].h)
                        ){
                        this.y = WallsInvisibleMesure[i].y - this.height;    
                        this.vy = 0;
                        this.jumping = false;
                    }
                    else if(
                        this.x + this.width >= WallsInvisibleMesure[i].x &&
                        this.x <= (WallsInvisibleMesure[i].x + WallsInvisibleMesure[i].w) &&
                        this.y + this.height >= (WallsInvisibleMesure[i].y + WallsInvisibleMesure[i].h) &&
                        this.y <= (WallsInvisibleMesure[i].y + WallsInvisibleMesure[i].h)
                    ){
                        this.y = WallsInvisibleMesure[i].y + WallsInvisibleMesure[i].h;
                        this.vy = 1;
                    }
                }
            }
        }
    }


    PlayersCollision(){// gerer les collisions avec les joueurs
        if(this.whichplayer == 1){                                  //perso 1
            if(
                this.y + this.height > (p2.y) &&
                this.y <= (p2.y + p2.height) &&
                this.x + this.width >= (p2.x) &&
                this.x + this.width - 10 < (p2.x)
                ){
                
                this.x = p2.x - this.width;
                this.vx = 0;
            }
            else if(
                this.y + this.height > (p2.y) &&
                this.y <= (p2.y + p2.height) &&
                this.x <= (p2.x + p2.width) &&
                this.x + 10 > (p2.x + p2.width)
            ){
                this.x = p2.x + p2.width;
                this.vx = 0;
            }
            else if(
                this.x + this.width >= p2.x &&
                this.x <= (p2.x + p2.width) &&
                this.y + this.height >= (p2.y) &&
                this.y + this.height <= (p2.y + p2.height)
                ){
                    
                this.y =  p2.y - this.height;    
                this.vy = 0;
                this.jumping = false;
            }
        }
        else{                                                       //perso 2
            if(
                this.y + this.height > (p1.y) &&
                this.y <= (p1.y + p1.height) &&
                this.x + this.width >= (p1.x) &&
                this.x + this.width - 10 < (p1.x)
                ){
                
                this.x = p1.x - this.width;
                this.vx = 0;
            }
            else if(
                this.y + this.height > (p1.y) &&
                this.y <= (p1.y + p1.height) &&
                this.x <= (p1.x + p1.width) &&
                this.x + 10 > (p1.x + p1.width)
            ){
                this.x = p1.x + p1.width;
                this.vx = 0;
            }
            else if(
                this.x + this.width >= p1.x &&
                this.x <= (p1.x + p1.width) &&
                this.y + this.height >= (p1.y) &&
                this.y + this.height <= (p1.y + p1.height)
                ){
                    
                this.y =  p1.y - this.height;    
                this.vy = 0;
                this.jumping = false;
            }
        }
    }
}