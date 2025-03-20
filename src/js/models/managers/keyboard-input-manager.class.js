/**
 * Manages keyboard and mobile button inputs for controlling game actions.
 * It listens for keydown and keyup events and updates the state of input keys.
 * It also handles mobile button presses for touch devices.
 */
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
        ESCAPE: 'Escape'
    };

    /**
     * Sets up event listeners for keyboard and mobile button inputs.
     * Listens for keydown, keyup events for keyboard and touch events for mobile buttons.
     */
    static setupEventListeners() {
        window.addEventListener("keydown", (e) => {
            KeyboardInputManager.handleKeyDown(e);
        });
        window.addEventListener("keyup", (e) => KeyboardInputManager.handleKeyUp(e));

        const options = { passive: true };

        KeyboardInputManager.addMobileButtonListeners('btn-mobile-left', 'LEFT', options);
        KeyboardInputManager.addMobileButtonListeners('btn-mobile-right', 'RIGHT', options);
        KeyboardInputManager.addMobileButtonListeners('btn-mobile-up', 'UP', options);
        KeyboardInputManager.addMobileButtonListeners('btn-mobile-throw', 'SPACE', options);
    }

    /**
     * Adds event listeners for mobile button interactions (touch and mouse).
     * @param {string} buttonId - The ID of the mobile button element.
     * @param {string} key - The key to associate with the mobile button.
     * @param {Object} options - The options to configure touch events.
     */
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

    /**
     * Handles keydown events and updates the corresponding key state.
     * @param {KeyboardEvent} e - The event object representing the keydown event.
     */
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
            case KeyboardInputManager.KEYS.ESCAPE:
                KeyboardInputManager.ESCAPE = true;
                break;
        }
    }

    /**
     * Handles keyup events and updates the corresponding key state.
     * @param {KeyboardEvent} e - The event object representing the keyup event.
     */
    static handleKeyUp(e) {
        switch (e.key) {
            case KeyboardInputManager.KEYS.LEFT:
                KeyboardInputManager.LEFT = false;
                break;
            case KeyboardInputManager.KEYS.RIGHT:
                KeyboardInputManager.RIGHT = false;
                break;
            case KeyboardInputManager.KEYS.UP:
                KeyboardInputManager.UP = false;
                break;
            case KeyboardInputManager.KEYS.SPACE:
                KeyboardInputManager.SPACE = false;
                break;
            case KeyboardInputManager.KEYS.ESCAPE:
                KeyboardInputManager.ESCAPE = false;
                break;
        }
    }
}

/**
 * Listens for fullscreen changes and exits fullscreen mode if the document is not fullscreen.
 */
window.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        InitializationUtils.exitFullscreen();
    }
});
