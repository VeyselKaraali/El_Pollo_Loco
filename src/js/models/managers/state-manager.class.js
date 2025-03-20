/**
 * Manages and tracks the state of the game. It stores various game-related flags
 * such as game state, sound, music, pause status, and fullscreen status.
 * It notifies listeners when any state change occurs.
 */
class StateManager {
    static #listeners = [];
    static #state = {
        hasGameStarted: false,  // Indicates if the game has started
        isGameOver: false,      // Indicates if the game is over
        isHelpOpen: false,      // Indicates if the help menu is open
        isSoundOn: true,        // Indicates if the sound is on
        isMusicOn: false,       // Indicates if the music is on
        isPaused: false,        // Indicates if the game is paused
        isFullscreen: false,    // Indicates if the game is in fullscreen mode
    };

    /**
     * Notifies all registered listeners about a state change.
     * @param {string} key - The state key that has been updated.
     * @param {any} value - The new value of the state.
     */
    static #notifyListeners(key, value) {
        this.#listeners.forEach(listener => listener(key, value));
    }

    /**
     * Adds a listener function that will be called whenever the state changes.
     * @param {Function} listener - The function to be called on state change.
     */
    static addListener(listener) {
        this.#listeners.push(listener);
    }

    /**
     * Updates the value of a specific state key and notifies listeners.
     * @param {string} key - The state key to update.
     * @param {any} value - The new value for the state key.
     */
    static updateState(key, value) {
        if (this.#state.hasOwnProperty(key)) {
            this.#state[key] = value;
            this.#notifyListeners(key, value);
        }
    }

    /**
     * Gets the current value of a specific state key.
     * @param {string} key - The state key to retrieve.
     * @returns {any} The current value of the state key.
     */
    static getState(key) {
        return this.#state[key];
    }
}
