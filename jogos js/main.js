const playerInstance =  new Player({
    x: 0,
    y: 0,
    size: 50,
    step: 0.020, 
    color: "white"
});

const gameInstance = new Game();
document.body.appendChild(playerInstance.element);
gameInstance.add(playerInstance);



function gameloop() {
    gameInstance.update();
    requestAnimationFrame(gameloop)
}

requestAnimationFrame(gameloop);
