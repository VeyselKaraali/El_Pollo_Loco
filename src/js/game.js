let canvas;
let world;
let gameInterval;
let isVolumeOn = false;

let pauseStartTime = null;
let totalPausedDuration = 0;
let isGamePaused = false;

audioMusic = AudioManager.load("assets/audio/music/2.mp3", { loop: true, volume: 0.05 });

function startGame() {
    document.getElementById('canvas').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    document.getElementById('start-screen-container').classList.add('d-none');
    document.getElementById('win-screen-container').classList.add('d-none');
    document.getElementById('lose-screen-container').classList.add('d-none');
    document.getElementById('pause-game').classList.remove('d-none');
    //toggleMobileControls();
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

/*
function toggleMobileControls() {
    if (window.innerWidth <= 720 && World.hasGameStarted) {
        document.querySelectorAll('.mobile-control').forEach((button) => {
            button.classList.remove('d-none');
        });
    } else {
        document.querySelectorAll('.mobile-control').forEach((button) => {
            button.classList.add('d-none');
        });
    }
}

 */

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



