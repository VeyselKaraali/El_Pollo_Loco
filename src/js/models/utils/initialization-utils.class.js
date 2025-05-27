/**
 * A utility class responsible for initializing various components of the application,
 * including setting up event listeners, background music, and fullscreen functionality.
 */
class InitializationUtils {
    /**
     * Preloaded background music and button click sound.
     * @type {HTMLAudioElement}
     */
    static audioBackgroundMusic = AudioManager.load("assets/audio/music/1.mp3", {loop: true, volume: WorldConfig.VOLUME_BACKGROUND_MUSIC});

    /**
     * Preloaded button click sound.
     * @type {HTMLAudioElement}
     */
    static audioBtnClick = AudioManager.load("assets/audio/menu/click.mp3", {loop: false, volume: WorldConfig.VOLUME_SOUNDS});

    /**
     * Initializes the app by setting up the state listener and keyboard event listeners.
     */
    static initializeApp() {
        InitializationUtils.setupStateListener();
        KeyboardInputManager.setupEventListeners();
        InitializationUtils.loadContactInfo();
    }

    static loadContactInfo() {
        fetch('./contactData.json')
            .then(response => response.json())
            .then(config => {
                const addressElement = document.getElementById('address');
                addressElement.innerHTML = `
          ${config.name}<br>
          ${config.company}<br>
          ${config.street}<br>
          ${config.city}
        `;

                const emailElement = document.getElementById('email');
                emailElement.innerHTML = `
          Email: <a href="mailto:${config.email}">${config.email}</a>
        `;
            })
            .catch(error => console.error('Fehler beim Laden der Konfiguration:', error));
    }

    /**
     * Sets up the state listener to update button images based on state changes.
     * Also initializes the UI state buttons.
     */
    static setupStateListener() {
        StateManager.addListener((key, value) => {
            const btnId = Object.keys(StateManagerUI.buttonMappings).find(
                id => StateManagerUI.buttonMappings[id] === key
            );

            if (btnId) {
                const imgElement = document.querySelector(`#${btnId} img`);
                if (imgElement && StateManagerUI.IMAGE_PATHS[key]) {
                    imgElement.src = StateManagerUI.IMAGE_PATHS[key][value];
                }
            }
        });
        StateManagerUI.init();
    }

    /**
     * Sets up the background music to play or pause depending on the state of sound.
     * The music is looped and its volume is controlled by the "isSoundOn" state.
     */
    static setupBackgroundMusic() {
        setInterval(() => {
            if(StateManager.getState("isSoundOn")) {
                InitializationUtils.audioBackgroundMusic.play().then(r => {});
            }
            else {
                InitializationUtils.audioBackgroundMusic.pause();
            }
        }, 100);
    }

    /**
     * Enters fullscreen mode for the provided element.
     * This method supports different browser vendors for fullscreen requests.
     *
     * @param {HTMLElement} element - The element that should go fullscreen.
     */
    static enterFullscreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }

    /**
     * Exits fullscreen mode.
     * This method supports different browser vendors for exiting fullscreen.
     */
    static exitFullscreen() {
        if(document.fullscreenElement) {
            document.exitFullscreen().then(r => {});
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        StateManager.updateState("isFullscreen", false);
    }
}
