class AudioManager {
    static audios = [];
    static volume = 1;

    static load(audioFile, options = {}) {
        const { loop = false, volume = this.volume } = options;
        let audio = new Audio(audioFile);
        audio.loop = loop;
        audio.volume = volume;
        this.audios.push(audio);
        return audio;
    }

    play(audio) {
        if(GameStateManager.getState("isSoundOn")) {
            audio.play().then(() => {});
        }
    }
}