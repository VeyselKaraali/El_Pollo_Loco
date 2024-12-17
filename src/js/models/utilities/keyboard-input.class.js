class KeyboardInput {
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
        //window.addEventListener('resize', toggleMobileControls);
        window.addEventListener("keydown", (e) => KeyboardInput.handleKeyDown(e));
        window.addEventListener("keyup", (e) => KeyboardInput.handleKeyUp(e));

        const options = { passive: true };

        KeyboardInput.addMobileButtonListeners('mobile-left-btn', 'LEFT', options);
        KeyboardInput.addMobileButtonListeners('mobile-right-btn', 'RIGHT', options);
        KeyboardInput.addMobileButtonListeners('mobile-up-btn', 'UP', options);
        KeyboardInput.addMobileButtonListeners('mobile-throw-btn', 'SPACE', options);
    }

    static addMobileButtonListeners(buttonId, key, options) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        button.addEventListener('mousedown', () => KeyboardInput[key] = true);
        button.addEventListener('mouseup', () => KeyboardInput[key] = false);
        button.addEventListener('mouseleave', () => KeyboardInput[key] = false);

        button.addEventListener('touchstart', () => KeyboardInput[key] = true, options);
        button.addEventListener('touchend', () => KeyboardInput[key] = false, options);
        button.addEventListener('touchcancel', () => KeyboardInput[key] = false, options);
    }

    static handleKeyDown(e) {
        switch (e.key) {
            case KeyboardInput.KEYS.LEFT:
                KeyboardInput.LEFT = true;
                break;
            case KeyboardInput.KEYS.RIGHT:
                KeyboardInput.RIGHT = true;
                break;
            case KeyboardInput.KEYS.UP:
                KeyboardInput.UP = true;
                break;
            case KeyboardInput.KEYS.SPACE:
                KeyboardInput.SPACE = true;
                break;
        }
    }

    static handleKeyUp(e) {
        switch (e.key) {
            case KeyboardInput.KEYS.SPACE:
                KeyboardInput.SPACE = false;
                break;
            case KeyboardInput.KEYS.LEFT:
                KeyboardInput.LEFT = false;
                break;
            case KeyboardInput.KEYS.RIGHT:
                KeyboardInput.RIGHT = false;
                break;
            case KeyboardInput.KEYS.UP:
                KeyboardInput.UP = false;
                break;
        }
    }
}
