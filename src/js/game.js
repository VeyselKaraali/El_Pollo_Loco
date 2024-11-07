let canvas;
let world;
let keyboard = new Keyboard();
const CURSOR_POINTER = "pointer";
const CURSOR_DEFAULT = "default";

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setupEventListeners();
}

function setupEventListeners() {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}

function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if (isHovering(clickX, clickY, window.VOLUME) || isHovering(clickX, clickY, window.START_BTN)) {
        canvas.style.cursor = CURSOR_POINTER;
    } else {
        canvas.style.cursor = CURSOR_DEFAULT;
    }
}

function isHovering(x, y, area) {
    return (
        x >= area.X && x <= area.X + area.WIDTH &&
        y >= area.Y && y <= area.Y + area.HEIGHT
    );
}

function handleKeyDown(e) {
    switch (e.key) {
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'ArrowRight':
            keyboard.RIGHT = true;
            break;
        case 'ArrowUp':
            keyboard.UP = true;
            break;
        case ' ':
            keyboard.SPACE = true;
            break;
    }
}

function handleKeyUp(e) {
    switch (e.key) {
        case ' ':
            keyboard.SPACE = false;
            break;
        case 'ArrowLeft':
            keyboard.LEFT = false;
            break;
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 'ArrowUp':
            keyboard.UP = false;
            break;
    }
}