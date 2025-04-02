/**
 * Manages the user interface (UI) interactions for toggling game states.
 * It maps UI buttons to game states such as sound, music, fullscreen, and paused.
 * Updates the UI images based on the state and handles button click events.
 */
class StateManagerUI {
    /**
     * A mapping of button IDs to the corresponding state keys in the game.
     * @type {Object}
     */
    static buttonMappings = {
        'btn-music': 'isMusicOn',
        'btn-sound': 'isSoundOn',
        'btn-fullscreen': 'isFullscreen',
        'btn-paused': 'isPaused',
    };

    /**
     * A private object that holds the image paths for each state key (true/false).
     * Used to update the UI images when the state changes.
     * @type {Object}
     */
    static #IMAGE_PATHS = {
        isMusicOn: {
            true: "assets/img/9_ui/music-on.png",
            false: "assets/img/9_ui/music-off.png",
        },
        isSoundOn: {
            true: "assets/img/9_ui/sound-on.png",
            false: "assets/img/9_ui/sound-off.png",
        },
        isFullscreen: {
            true: "assets/img/9_ui/fullscreen-on.png",
            false: "assets/img/9_ui/fullscreen-off.png",
        },
        isPaused: {
            true: "assets/img/9_ui/pause-on.png",
            false: "assets/img/9_ui/pause-off.png",
        },
    };

    /**
     * Returns the image paths for the states (getter).
     * @returns {Object} The image paths for each game state.
     */
    static get IMAGE_PATHS() {
        return this.#IMAGE_PATHS;
    }

    /**
     * Initializes the UI buttons and adds event listeners for button clicks.
     * Binds the click event to toggle the respective game state.
     */
    static init() {
        Object.keys(this.buttonMappings).forEach(buttonId => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener('click', () => {
                    this.handleButtonClick(buttonId);
                });
            }
        });
    }

    /**
     * Handles the click event on a UI button.
     * Toggles the corresponding game state and updates it.
     * @param {string} buttonId - The ID of the clicked button.
     */
    static handleButtonClick(buttonId) {
        const stateKey = this.buttonMappings[buttonId];
        if (stateKey) {
            const newValue = !StateManager.getState(stateKey);
            StateManager.updateState(stateKey, newValue);
        }
    }
}
