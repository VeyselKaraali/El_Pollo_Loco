class InitializationUtils {
    static audioBackgroundMusic = AudioManager.load("assets/audio/music/1.mp3", {loop: true, volume: 0.05});

    static initializeApp() {
        InitializationUtils.setupStateListener();
        InitializationUtils.setupBackgroundMusic();
        KeyboardInputManager.setupEventListeners();
    }

    static setupStateListener() {
        StateManager.addListener((key, value) => {
            const btnId = Object.keys(StateManagerUI.buttonMappings).find(
                id => StateManagerUI.buttonMappings[id] === key
            );

            if (btnId) {
                const imgElement = document.querySelector(`#${btnId} img`);
                if (imgElement && StateManagerUI.IMAGE_PATHS[key]) {
                    imgElement.src = StateManagerUI.IMAGE_PATHS[key][value];
                }
            }
        });
        StateManagerUI.init();
    }

    static setupBackgroundMusic() {
        setInterval(() => {
            if(StateManager.getState("isMusicOn")) {
                InitializationUtils.audioBackgroundMusic.play().then(r => {});
            }
            else {
                InitializationUtils.audioBackgroundMusic.pause();
            }
        }, 100);
    }

    static enterFullscreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }

    static exitFullscreen() {
        if(document.fullscreenElement) {
            document.exitFullscreen().then(r => {});
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        StateManager.updateState("isFullscreen", false);
    }
}