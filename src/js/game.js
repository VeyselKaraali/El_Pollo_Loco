let canvas;
let world;
let gameInterval;
let hasGameStarted = false;
let isVolumeOn = false;

let pauseStartTime = null;
let totalPausedDuration = 0;
let isGamePaused = false;

audioMusic = AudioManager.load("assets/audio/music/2.mp3", { loop: true, volume: 0.05 });

function startGame() {
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas);
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
    const audioManager = new AudioManager();

    if (isVolumeOn) {
        volumeOnIcon.classList.remove('d-none');
        volumeOffIcon.classList.add('d-none');

        audioManager.play(this.audioMusic);
    } else {
        this.audioMusic.pause();
        volumeOnIcon.classList.add('d-none');
        volumeOffIcon.classList.remove('d-none');
    }
}

function setupEventListeners() {
    window.addEventListener('resize', toggleMobileControls);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const options = { passive: true };

    // Left
    document.getElementById('mobile-left-btn').addEventListener('mousedown', () => world.character.keyboardInput.LEFT = true);
    document.getElementById('mobile-left-btn').addEventListener('mouseup', () => world.character.keyboardInput.LEFT = false);
    document.getElementById('mobile-left-btn').addEventListener('mouseleave', () => world.character.keyboardInput.LEFT = false);

    document.getElementById('mobile-left-btn').addEventListener('touchstart', () => world.character.keyboardInput.LEFT = true, options);
    document.getElementById('mobile-left-btn').addEventListener('touchend', () => world.character.keyboardInput.LEFT = false, options);
    document.getElementById('mobile-left-btn').addEventListener('touchcancel', () => world.character.keyboardInput.LEFT = false, options);

    // Right
    document.getElementById('mobile-right-btn').addEventListener('mousedown', () => world.character.keyboardInput.RIGHT = true);
    document.getElementById('mobile-right-btn').addEventListener('mouseup', () => world.character.keyboardInput.RIGHT = false);
    document.getElementById('mobile-right-btn').addEventListener('mouseleave', () => world.character.keyboardInput.RIGHT = false);

    document.getElementById('mobile-right-btn').addEventListener('touchstart', () => world.character.keyboardInput.RIGHT = true, options);
    document.getElementById('mobile-right-btn').addEventListener('touchend', () => world.character.keyboardInput.RIGHT = false, options);
    document.getElementById('mobile-right-btn').addEventListener('touchcancel', () => world.character.keyboardInput.RIGHT = false, options);

    // Up
    document.getElementById('mobile-up-btn').addEventListener('mousedown', () => world.character.keyboardInput.UP = true);
    document.getElementById('mobile-up-btn').addEventListener('mouseup', () => world.character.keyboardInput.UP = false);
    document.getElementById('mobile-up-btn').addEventListener('mouseleave', () => world.character.keyboardInput.UP = false);

    document.getElementById('mobile-up-btn').addEventListener('touchstart', () => world.character.keyboardInput.UP = true, options);
    document.getElementById('mobile-up-btn').addEventListener('touchend', () => world.character.keyboardInput.UP = false, options);
    document.getElementById('mobile-up-btn').addEventListener('touchcancel', () => world.character.keyboardInput.UP = false, options);

    // Throw
    document.getElementById('mobile-throw-btn').addEventListener('mousedown', () => world.character.keyboardInput.SPACE = true);
    document.getElementById('mobile-throw-btn').addEventListener('mouseup', () => world.character.keyboardInput.SPACE = false);
    document.getElementById('mobile-throw-btn').addEventListener('mouseleave', () => world.character.keyboardInput.SPACE = false);

    document.getElementById('mobile-throw-btn').addEventListener('touchstart', () => world.character.keyboardInput.SPACE = true, options);
    document.getElementById('mobile-throw-btn').addEventListener('touchend', () => world.character.keyboardInput.SPACE = false, options);
    document.getElementById('mobile-throw-btn').addEventListener('touchcancel', () => world.character.keyboardInput.SPACE = false, options);
}

function handleKeyDown(e) {
    switch (e.key) {
        case 'ArrowLeft':
            world.character.keyboardInput.LEFT = true;
            break;
        case 'ArrowRight':
            world.character.keyboardInput.RIGHT = true;
            break;
        case 'ArrowUp':
            world.character.keyboardInput.UP = true;
            break;
        case ' ':
            world.character.keyboardInput.SPACE = true;
            break;
    }
}

function handleKeyUp(e) {
    switch (e.key) {
        case ' ':
            world.character.keyboardInput.SPACE = false;
            break;
        case 'ArrowLeft':
            world.character.keyboardInput.LEFT = false;
            break;
        case 'ArrowRight':
            world.character.keyboardInput.RIGHT = false;
            break;
        case 'ArrowUp':
            world.character.keyboardInput.UP = false;
            break;
    }
}