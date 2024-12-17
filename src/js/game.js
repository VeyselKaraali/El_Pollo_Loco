let isVolumeOn = false;




audioMusic = AudioManager.load("assets/audio/music/2.mp3", { loop: true, volume: 0.05 });

function init() {
    const canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    new World(canvas);
}



function restartGame() {
    this.init();
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



