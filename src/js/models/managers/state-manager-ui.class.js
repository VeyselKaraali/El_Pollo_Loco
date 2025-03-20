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
        'btn-music': 'isMusicOn',        // Button for toggling music on/off
        'btn-sound': 'isSoundOn',        // Button for toggling sound on/off
        'btn-fullscreen': 'isFullscreen',// Button for toggling fullscreen mode
        'btn-paused': 'isPaused',        // Button for toggling pause state
    };

    /**
     * A private object that holds the image paths for each state key (true/false).
     * Used to update the UI images when the state changes.
     * @type {Object}
     */
    static #IMAGE_PATHS = {
        isMusicOn: {
            true: "assets/img/9_ui/music-on.png",    // Image when music is on
            false: "assets/img/9_ui/music-off.png",  // Image when music is off
        },
        isSoundOn: {
            true: "assets/img/9_ui/sound-on.png",    // Image when sound is on
            false: "assets/img/9_ui/sound-off.png",  // Image when sound is off
        },
        isFullscreen: {
            true: "assets/img/9_ui/fullscreen-on.png",  // Image when fullscreen is on
            false: "assets/img/9_ui/fullscreen-off.png", // Image when fullscreen is off
        },
        isPaused: {
            true: "assets/img/9_ui/pause-on.png",    // Image when game is paused
            false: "assets/img/9_ui/pause-off.png",   // Image when game is unpaused
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
            const newValue = !StateManager.getState(stateKey); // Toggle the state
            StateManager.updateState(stateKey, newValue);      // Update the state
        }
    }
}
