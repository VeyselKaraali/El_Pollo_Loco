let world;

/**
 * Main class for handling the initialization, starting the game, and toggling fullscreen.
 */
class Main {
    /**
     * Initializes the application by calling the initialization utility.
     * This function is responsible for setting up the app when it first loads.
     *
     * @static
     * @returns {void}
     */
    static init() {
        InitializationUtils.initializeApp();
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    /**
     * Starts the game by stopping all intervals, making the game canvas visible,
     * playing the audio button click sound, and creating a new game world.
     * It also updates the state to reflect that the game has started and is not over.
     *
     * @static
     * @returns {void}
     */
    static startGame() {
        IntervalManager.stopAllIntervals();
        const canvas = DomUtils.toggleElementVisibility("canvas", true);
        if(StateManager.getState("isSoundOn")) {
            InitializationUtils.audioBtnClick.play().then(r => {});
        }
        world = new World(canvas);
        StateManager.updateState('hasGameStarted', true);
        StateManager.updateState('isGameOver', false);
        DomUtils.updateMobileButtonsVisibility();
    }

    /**
     * Toggles the fullscreen mode for the game.
     * If the game is already in fullscreen, it will exit fullscreen;
     * otherwise, it will enter fullscreen.
     *
     * @static
     * @returns {void}
     */
    static toggleFullscreen() {
        let fullscreen = document.getElementById("game-container");
        if(StateManager.getState("isFullscreen")) {
            InitializationUtils.exitFullscreen();
        } else {
            InitializationUtils.enterFullscreen(fullscreen);
        }
    }

    /**
     * Displays the popup element by removing the 'd-none' class.
     */
    static showPopup() {
        document.getElementById('popup').classList.remove('d-none');
    }

    /**
     * Hides the popup element by adding the 'd-none' class.
     */
    static closePopup() {
        document.getElementById('popup').classList.add('d-none');
    }
}

