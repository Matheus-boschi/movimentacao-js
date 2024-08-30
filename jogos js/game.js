class Game{

    constructor(){

        this.map = document.querySelector(".map")
        this.instance = []
    }

    add(instance){
        this.map.insertAdjacentElement("beforeend", instance.element)
        this.instance.push(instance)

    }

    update(){
     for(let i of this.instance){
            i.update();
     }
        requestAnimationFrame(() => this.update())

    }   
}