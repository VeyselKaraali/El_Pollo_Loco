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
    document.getElementById('win-screen-container').classList.add('d-none');
    document.getElementById('lose-screen-container').classList.add('d-none');
    hasGameStarted = true;
    document.getElementById('pause-game').classList.remove('d-none');
    toggleMobileControls();
}

function restartGame() {
    this.startGame();
}

function goToStartScreen() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('win-screen-container').classList.add('d-none');
    document.getElementById('lose-screen-container').classList.add('d-none');
    document.getElementById('start-screen-container').classList.remove('d-none');
}

function toggleMobileControls() {
    if (window.innerWidth <= 720 && hasGameStarted) {
        document.querySelectorAll('.mobile-control').forEach((button) => {
            button.classList.remove('d-none');
        });
    } else {
        document.querySelectorAll('.mobile-control').forEach((button) => {
            button.classList.add('d-none');
        });
    }
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
    window.addEventListener('resize', toggleMobileControls);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const options = { passive: true };

    // Left
    document.getElementById('mobile-left-btn').addEventListener('mousedown', () => keyboard.LEFT = true);
    document.getElementById('mobile-left-btn').addEventListener('mouseup', () => keyboard.LEFT = false);
    document.getElementById('mobile-left-btn').addEventListener('mouseleave', () => keyboard.LEFT = false);

    document.getElementById('mobile-left-btn').addEventListener('touchstart', () => keyboard.LEFT = true, options);
    document.getElementById('mobile-left-btn').addEventListener('touchend', () => keyboard.LEFT = false, options);
    document.getElementById('mobile-left-btn').addEventListener('touchcancel', () => keyboard.LEFT = false, options);

    // Right
    document.getElementById('mobile-right-btn').addEventListener('mousedown', () => keyboard.RIGHT = true);
    document.getElementById('mobile-right-btn').addEventListener('mouseup', () => keyboard.RIGHT = false);
    document.getElementById('mobile-right-btn').addEventListener('mouseleave', () => keyboard.RIGHT = false);

    document.getElementById('mobile-right-btn').addEventListener('touchstart', () => keyboard.RIGHT = true, options);
    document.getElementById('mobile-right-btn').addEventListener('touchend', () => keyboard.RIGHT = false, options);
    document.getElementById('mobile-right-btn').addEventListener('touchcancel', () => keyboard.RIGHT = false, options);

    // Up
    document.getElementById('mobile-up-btn').addEventListener('mousedown', () => keyboard.UP = true);
    document.getElementById('mobile-up-btn').addEventListener('mouseup', () => keyboard.UP = false);
    document.getElementById('mobile-up-btn').addEventListener('mouseleave', () => keyboard.UP = false);

    document.getElementById('mobile-up-btn').addEventListener('touchstart', () => keyboard.UP = true, options);
    document.getElementById('mobile-up-btn').addEventListener('touchend', () => keyboard.UP = false, options);
    document.getElementById('mobile-up-btn').addEventListener('touchcancel', () => keyboard.UP = false, options);

    // Throw
    document.getElementById('mobile-throw-btn').addEventListener('mousedown', () => keyboard.SPACE = true);
    document.getElementById('mobile-throw-btn').addEventListener('mouseup', () => keyboard.SPACE = false);
    document.getElementById('mobile-throw-btn').addEventListener('mouseleave', () => keyboard.SPACE = false);

    document.getElementById('mobile-throw-btn').addEventListener('touchstart', () => keyboard.SPACE = true, options);
    document.getElementById('mobile-throw-btn').addEventListener('touchend', () => keyboard.SPACE = false, options);
    document.getElementById('mobile-throw-btn').addEventListener('touchcancel', () => keyboard.SPACE = false, options);
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