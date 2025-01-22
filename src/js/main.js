function init() {
    const audioBackgroundMusic = AudioManager.load("assets/audio/music/1.mp3", {loop: true, volume: 0.05});
    setupStateListener();
    KeyboardInputManager.setupEventListeners();
    IntervalManager.setStoppableInterval(() => {
        if(StateManager.getState("isMusicOn")) {
            audioBackgroundMusic.play().then(r => {});
        }
        else {
            audioBackgroundMusic.pause();
        }
    }, 100);
}

function setupStateListener() {
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

function startGame() {
    const canvas = DomUtils.toggleElementVisibility("canvas", true);
    new World(canvas);
    StateManager.updateState('hasGameStarted', true);
}
