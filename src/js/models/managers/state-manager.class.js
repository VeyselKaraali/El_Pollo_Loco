class StateManager {
    static #listeners = [];
    static #state = {
        hasGameStarted: false,
        isGameOver: false,
        isHelpOpen: false,
        isSoundOn: false,
        isMusicOn: false,
        isPaused: false,
        isFullscreen: false,
    };

    static #notifyListeners(key, value) {
        this.#listeners.forEach(listener => listener(key, value));
    }

    static addListener(listener) {
        this.#listeners.push(listener);
    }

    static updateState(key, value) {
        if (this.#state.hasOwnProperty(key)) {
            this.#state[key] = value;
            this.#notifyListeners(key, value);
        }
    }

    static getState(key) {
        return this.#state[key];
    }
}