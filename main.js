var game = new Game();

game.setup();
game.load();

function loop() {
    
    game.update();
    game.draw();

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);