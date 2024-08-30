class Player{

    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.step = initial.step
        this.color = initial.color
        this.keyboard = {left : false, right : false,  up : false,  down : false, }
        this.element = this.createElement();
        this.initEvent();


    }

    createElement(){

        const PlayerElement = document.createElement("div")
        PlayerElement.classList.add("player")
        PlayerElement.style.width = `${this.size}px`
        PlayerElement.style.height = `${this.size}px`
        PlayerElement.style.backgroundColor = `${this.color}`
        return PlayerElement
    }

    update(){
        this.move()
        this.draw()
        this.colisionwall()

    
    }

    move(){
        if (this.keyboard.right) this.x += this.step
        if (this.keyboard.left) this.x -= this.step
        if (this.keyboard.up) this.y -= this.step
        if (this.keyboard.down) this.y += this.step


    }

    colisionwall(){
        const cW = window.innerWidth
        const cH = window.innerHeight
        // colisão na esquerda
        if(this.x < 0) this.x = 0
        // colisão no topo
        if(this.y < 0) this.y = 0
        //colisão na direita
        if ((this.x + this.size) > cW) this.x = cW - this.size
        // colisão em baixo
        if ((this.y + this.size) > cH) this.y = cH - this.size






    }

    draw(){
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`

    }

    initEvent() { 
        const p = this;


        // ao clicar, começa a se mover
        document.body.addEventListener("keydown", (event) =>{
            const key = event.key.toLowerCase();
            
           

            if(key == "a") { p.keyboard.left = true; }
            if(key == "d") { p.keyboard.right = true; }
            if(key == "w") { p.keyboard.up = true; }
            if(key == "s") { p.keyboard.down = true ;}
        });

        // quando desapertar a tecla, para de se mover
        document.body.addEventListener("keyup", (event) =>{
            const key = event.key.toLowerCase();

            if(key == "a") { p.keyboard.left = false; }
            if(key == "d") { p.keyboard.right = false; }
            if(key == "w") { p.keyboard.up = false; }
            if(key == "s") { p.keyboard.down = false; }
        });

    }
}