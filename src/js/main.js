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
     * Displays the popup by removing the 'd-none' class and hides certain UI elements.
     *
     * This function makes the popup visible and hides various controls, including
     * the imprint button, sound button, fullscreen button, start button, and
     * elements with the classes 'controls-img', 'controls-text', and 'divider'.
     */
    static showPopup() {
        document.getElementById('popup').classList.remove('d-none');
        document.getElementById('imprint-btn').classList.add('d-none');
        document.getElementById('btn-sound').classList.add('d-none');
        document.getElementById('btn-fullscreen').classList.add('d-none');
        document.getElementById('btn-start').classList.add('d-none');
        document.querySelectorAll('.controls-img').forEach(el => el.classList.add('d-none'));
        document.querySelectorAll('.controls-text').forEach(el => el.classList.add('d-none'));
        document.querySelectorAll('.divider').forEach(el => el.classList.add('d-none'));
    }

    /**
     * Hides the popup by adding the 'd-none' class and restores the visibility of UI elements.
     *
     * This function makes the popup invisible and shows various controls again, including
     * the imprint button, sound button, fullscreen button, start button, and elements
     * with the classes 'controls-img', 'controls-text', and 'divider'.
     */
    static closePopup() {
        document.getElementById('popup').classList.add('d-none');
        document.getElementById('imprint-btn').classList.remove('d-none');
        document.getElementById('btn-sound').classList.remove('d-none');
        document.getElementById('btn-fullscreen').classList.remove('d-none');
        document.getElementById('btn-start').classList.remove('d-none');
        document.querySelectorAll('.controls-img').forEach(el => el.classList.remove('d-none'));
        document.querySelectorAll('.controls-text').forEach(el => el.classList.remove('d-none'));
        document.querySelectorAll('.divider').forEach(el => el.classList.remove('d-none'));
    }
}

