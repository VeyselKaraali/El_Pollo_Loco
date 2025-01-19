function init() {
    const audioBackgroundMusic = AudioManager.load("assets/audio/music/1.mp3", {loop: true, volume: 0.05});
    setupStateListener();
    KeyboardInputManager.setupEventListeners();
    IntervalManager.setStoppableInterval(() => {
        if(GameStateManager.getState("isMusicOn")) {
            audioBackgroundMusic.play().then(r => {});
        }
        else {
            audioBackgroundMusic.pause();
        }
    }, 100);
}

function setupStateListener() {
    GameStateManager.addListener((key, value) => {
        const btnId = Object.keys(UIStateManager.buttonMappings).find(
            id => UIStateManager.buttonMappings[id] === key
        );

        if (btnId) {
            const imgElement = document.querySelector(`#${btnId} img`);
            if (imgElement && UIStateManager.IMAGE_PATHS[key]) {
                imgElement.src = UIStateManager.IMAGE_PATHS[key][value];
            }
        }
    });
    UIStateManager.init();
}

function startGame() {
    const canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    new World(canvas);
    GameStateManager.updateState('hasGameStarted', true);
}
