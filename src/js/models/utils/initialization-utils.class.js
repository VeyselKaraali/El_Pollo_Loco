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
        IntervalManager.setStoppableInterval(() => {
            if(StateManager.getState("isMusicOn")) {
                InitializationUtils.audioBackgroundMusic.play().then(r => {});
            }
            else {
                InitializationUtils.audioBackgroundMusic.pause();
            }
        }, 100);
    }
}