class KeyboardInput {
    static LEFT = false;
    static RIGHT = false;
    static UP = false;
    static SPACE = false;

    static setupEventListeners() {
        //window.addEventListener('resize', toggleMobileControls);
        window.addEventListener("keydown", (e) => KeyboardInput.handleKeyDown(e));
        window.addEventListener("keyup", (e) => KeyboardInput.handleKeyUp(e));

        const options = { passive: true };

        // Left
        document.getElementById('mobile-left-btn').addEventListener('mousedown', () => KeyboardInput.LEFT = true);
        document.getElementById('mobile-left-btn').addEventListener('mouseup', () => KeyboardInput.LEFT = false);
        document.getElementById('mobile-left-btn').addEventListener('mouseleave', () => KeyboardInput.LEFT = false);

        document.getElementById('mobile-left-btn').addEventListener('touchstart', () => KeyboardInput.LEFT = true, options);
        document.getElementById('mobile-left-btn').addEventListener('touchend', () => KeyboardInput.LEFT = false, options);
        document.getElementById('mobile-left-btn').addEventListener('touchcancel', () => KeyboardInput.LEFT = false, options);

        // Right
        document.getElementById('mobile-right-btn').addEventListener('mousedown', () => KeyboardInput.RIGHT = true);
        document.getElementById('mobile-right-btn').addEventListener('mouseup', () => KeyboardInput.RIGHT = false);
        document.getElementById('mobile-right-btn').addEventListener('mouseleave', () => KeyboardInput.RIGHT = false);

        document.getElementById('mobile-right-btn').addEventListener('touchstart', () => KeyboardInput.RIGHT = true, options);
        document.getElementById('mobile-right-btn').addEventListener('touchend', () => KeyboardInput.RIGHT = false, options);
        document.getElementById('mobile-right-btn').addEventListener('touchcancel', () => KeyboardInput.RIGHT = false, options);

        // Up
        document.getElementById('mobile-up-btn').addEventListener('mousedown', () => KeyboardInput.UP = true);
        document.getElementById('mobile-up-btn').addEventListener('mouseup', () => KeyboardInput.UP = false);
        document.getElementById('mobile-up-btn').addEventListener('mouseleave', () => KeyboardInput.UP = false);

        document.getElementById('mobile-up-btn').addEventListener('touchstart', () => KeyboardInput.UP = true, options);
        document.getElementById('mobile-up-btn').addEventListener('touchend', () => KeyboardInput.UP = false, options);
        document.getElementById('mobile-up-btn').addEventListener('touchcancel', () => KeyboardInput.UP = false, options);

        // Throw
        document.getElementById('mobile-throw-btn').addEventListener('mousedown', () => KeyboardInput.SPACE = true);
        document.getElementById('mobile-throw-btn').addEventListener('mouseup', () => KeyboardInput.SPACE = false);
        document.getElementById('mobile-throw-btn').addEventListener('mouseleave', () => KeyboardInput.SPACE = false);

        document.getElementById('mobile-throw-btn').addEventListener('touchstart', () => KeyboardInput.SPACE = true, options);
        document.getElementById('mobile-throw-btn').addEventListener('touchend', () => KeyboardInput.SPACE = false, options);
        document.getElementById('mobile-throw-btn').addEventListener('touchcancel', () => KeyboardInput.SPACE = false, options);
    }

    static handleKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
                KeyboardInput.LEFT = true;
                break;
            case 'ArrowRight':
                KeyboardInput.RIGHT = true;
                break;
            case 'ArrowUp':
                KeyboardInput.UP = true;
                break;
            case ' ':
                KeyboardInput.SPACE = true;
                break;
        }
    }

    static handleKeyUp(e) {
        switch (e.key) {
            case ' ':
                KeyboardInput.SPACE = false;
                break;
            case 'ArrowLeft':
                KeyboardInput.LEFT = false;
                break;
            case 'ArrowRight':
                KeyboardInput.RIGHT = false;
                break;
            case 'ArrowUp':
                KeyboardInput.UP = false;
                break;
        }
    }
}