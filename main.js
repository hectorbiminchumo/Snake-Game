const $canvas= document.querySelector('canvas');
const ctx = $canvas.getContext("2d");


//Variables globales

let frames = 0;

const keys={};


//Clases del juego (propiedades y metodos)

class Character {
    constructor (x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.vx = 0;
        this.vy = 0;
        
    }
    draw(){
        this.y += this.vy;
        this.x += this.vx;

        ctx.fillStyle="green";
        ctx.fillRect(this.x, this.y, this.width, this.height)

        if(this.x > $canvas.width) this.x=0;
        if(this.x<0) this.x=$canvas.width;
        if(this.y > $canvas.height) this.y=0;
        if(this.y<0) this.y= $canvas.height;

    }

    moveLeft(){
        this.vx--;
    }
    moveRight(){
        this.vx++;
    }
    moveUp(){
        this.vy--;
    }
    moveDown(){
        this.vy++;
    }
    stop(){
        this.vx=0;
        this.vy=0;
    }
}

//Instancias
    const cuadrito= new Character(40,350);
 


//Crear las funciones del flujo del juego

function start(){
        setInterval(()=>{
            update();
        },1000/60);
}

function update(){
    frames++;
    
    clearCanvas();
    cuadrito.draw();
   
    checkKeys();

}

function clearCanvas(){
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)

}

function checkKeys(){
    if(keys.ArrowLeft) cuadrito.moveLeft()
    if(keys.ArrowRight) cuadrito.moveRight()
    if(keys.ArrowUp) cuadrito.moveUp()
    if(keys.ArrowDown) cuadrito.moveDown()

}

document.onkeydown = (event) => {
    keys[event.key] = true;
}

document.onkeyup = (event) => {
    keys[event.key] = false;
    cuadrito.stop();
    
}

start();

