let world;

class Main {
    static init() {
        InitializationUtils.initializeApp();
    }

    static startGame() {
        IntervalManager.stopAllIntervals();
        const canvas = DomUtils.toggleElementVisibility("canvas", true);
        world = new World(canvas);
        StateManager.updateState('hasGameStarted', true);
    }

    static toggleFullscreen() {
        let fullscreen = document.getElementById("game-container");
        if(StateManager.getState("isFullscreen")) {
            InitializationUtils.exitFullscreen();
        } else {
            InitializationUtils.enterFullscreen(fullscreen);
        }
    }
}

