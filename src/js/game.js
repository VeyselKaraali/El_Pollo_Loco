let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener("mousemove", (e) => {
    let hovering = false;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if(clickX >= window.VOLUME.X &&
        clickX <= window.VOLUME.X + window.VOLUME.WIDTH &&
        clickY >= window.VOLUME.Y &&
        clickY <= window.VOLUME.Y + window.VOLUME.HEIGHT) {
        hovering = true;
        canvas.style.cursor="pointer"
    }

    if(clickX >= window.START_BTN.X &&
        clickX <= window.START_BTN.X + window.START_BTN.WIDTH &&
        clickY >= window.START_BTN.Y &&
        clickY <= window.START_BTN.Y + window.START_BTN.HEIGHT) {
        hovering = true;
        canvas.style.cursor="pointer"
    }
    canvas.style.cursor = hovering ? "pointer" : "default";

})

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }
})

window.addEventListener("keyup", (e) => {
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38) {
        keyboard.UP = false;
    }
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }
})