class KeyboardInputManager {
    static LEFT = false;
    static RIGHT = false;
    static UP = false;
    static SPACE = false;

    static KEYS = {
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight',
        UP: 'ArrowUp',
        SPACE: ' ',
    };

    static setupEventListeners() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                GameStateManager.updateState('isFullscreen', false);
            } else {
                KeyboardInputManager.handleKeyDown(e);
            }
        });
        window.addEventListener("keyup", (e) => KeyboardInputManager.handleKeyUp(e));

        const options = { passive: true };

        KeyboardInputManager.addMobileButtonListeners('btn-mobile-left', 'LEFT', options);
        KeyboardInputManager.addMobileButtonListeners('btn-mobile-right', 'RIGHT', options);
        KeyboardInputManager.addMobileButtonListeners('btn-mobile-up', 'UP', options);
        KeyboardInputManager.addMobileButtonListeners('btn-mobile-throw', 'SPACE', options);
    }

    static addMobileButtonListeners(buttonId, key, options) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        button.addEventListener('mousedown', () => KeyboardInputManager[key] = true);
        button.addEventListener('mouseup', () => KeyboardInputManager[key] = false);
        button.addEventListener('mouseleave', () => KeyboardInputManager[key] = false);

        button.addEventListener('touchstart', () => KeyboardInputManager[key] = true, options);
        button.addEventListener('touchend', () => KeyboardInputManager[key] = false, options);
        button.addEventListener('touchcancel', () => KeyboardInputManager[key] = false, options);
    }

    static handleKeyDown(e) {
        switch (e.key) {
            case KeyboardInputManager.KEYS.LEFT:
                KeyboardInputManager.LEFT = true;
                break;
            case KeyboardInputManager.KEYS.RIGHT:
                KeyboardInputManager.RIGHT = true;
                break;
            case KeyboardInputManager.KEYS.UP:
                KeyboardInputManager.UP = true;
                break;
            case KeyboardInputManager.KEYS.SPACE:
                KeyboardInputManager.SPACE = true;
                break;
        }
    }

    static handleKeyUp(e) {
        switch (e.key) {
            case KeyboardInputManager.KEYS.SPACE:
                KeyboardInputManager.SPACE = false;
                break;
            case KeyboardInputManager.KEYS.LEFT:
                KeyboardInputManager.LEFT = false;
                break;
            case KeyboardInputManager.KEYS.RIGHT:
                KeyboardInputManager.RIGHT = false;
                break;
            case KeyboardInputManager.KEYS.UP:
                KeyboardInputManager.UP = false;
                break;
        }
    }
}
