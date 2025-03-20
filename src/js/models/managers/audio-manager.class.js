/**
 * Manages the loading and playback of audio files in the game.
 */
class AudioManager {
    /**
     * An array holding all loaded audio objects.
     * @type {HTMLAudioElement[]}
     */
    static audios = [];

    /**
     * The default volume for audio playback.
     * @type {number}
     */
    static volume = 1;

    /**
     * Loads an audio file and adds it to the audios array.
     * @param {string} audioFile - The path to the audio file to load.
     * @param {Object} [options] - The options for audio playback.
     * @param {boolean} [options.loop=false] - Whether the audio should loop.
     * @param {number} [options.volume=1] - The volume for the audio.
     * @returns {HTMLAudioElement} The loaded audio object.
     */
    static load(audioFile, options = {}) {
        const { loop = false, volume = this.volume } = options;
        let audio = new Audio(audioFile);
        audio.loop = loop;
        audio.volume = volume;
        this.audios.push(audio);
        return audio;
    }

    /**
     * Plays a specified audio file if the sound is enabled and the game is not over.
     * @param {HTMLAudioElement} audio - The audio object to play.
     */
    play(audio) {
        if(StateManager.getState("isSoundOn") && !StateManager.getState("isGameOver")) {
            audio.play().then(() => {});
        }
    }
}
