class StateManagerUI {
    static buttonMappings = {
        'btn-music': 'isMusicOn',
        'btn-sound': 'isSoundOn',
        'btn-fullscreen': 'isFullscreen',
        'btn-paused': 'isPaused',
    };

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

    static get IMAGE_PATHS() {
        return this.#IMAGE_PATHS;
    }

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

    static handleButtonClick(buttonId) {
        const stateKey = this.buttonMappings[buttonId];
        if (stateKey) {
            const newValue = !StateManager.getState(stateKey);
            StateManager.updateState(stateKey, newValue);
        }
    }
}