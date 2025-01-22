class Main {
    static init() {
        InitializationUtils.initializeApp();
    }

    static startGame() {
        const canvas = DomUtils.toggleElementVisibility("canvas", true);
        new World(canvas);
        StateManager.updateState('hasGameStarted', true);
    }
}

