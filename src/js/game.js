let canvas;
let world;
let keyboard = new Keyboard();
let gameInterval;
let hasGameStarted = false;
let isVolumeOn = false;

let pauseStartTime = null;
let totalPausedDuration = 0;
let isGamePaused = false;

audioMusic = new Audio("assets/audio/music/2.mp3");

function startGame() {
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setupEventListeners();
    document.getElementById('start-screen-container').classList.add('d-none');
    hasGameStarted = true;
    document.getElementById('pause-game').classList.remove('d-none');
}

function pauseOrResumeGame() {
    const pauseIcon = document.getElementById('pause-game');
    const resumeIcon = document.getElementById('resume-game');

    if(isGamePaused) {
        pauseIcon.classList.remove('d-none');
        resumeIcon.classList.add('d-none');
        isGamePaused=false;

        if (pauseStartTime !== null) {
            totalPausedDuration += Date.now() - pauseStartTime;
            pauseStartTime = null;
        }

        world.runGameLoop();
        requestAnimationFrame(() => world.draw());
    } else {
        resumeIcon.classList.remove('d-none');
        pauseIcon.classList.add('d-none');
        isGamePaused=true;
        clearInterval(gameInterval);
        pauseStartTime = Date.now();
    }
}

function toggleVolume() {
    isVolumeOn = !isVolumeOn;
    updateVolumeIcons();
}

function updateVolumeIcons() {
    const volumeOnIcon = document.getElementById('volume-on');
    const volumeOffIcon = document.getElementById('volume-off');

    if (isVolumeOn) {
        volumeOnIcon.classList.remove('d-none');
        volumeOffIcon.classList.add('d-none');
        audioMusic.volume = 0.05;
        audioMusic.play().then(() => {});
    } else {
        volumeOnIcon.classList.add('d-none');
        volumeOffIcon.classList.remove('d-none');
        audioMusic.pause();
    }
}

function setupEventListeners() {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
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