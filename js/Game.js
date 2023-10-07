var fl = new FarmLand();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Game {

    setup() {
        
    }

    load() {
        fl.load();
    }

    update() {
        fl.update();
    }

    draw() {
        fl.draw();
    }

}
