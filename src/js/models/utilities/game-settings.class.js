class GameSettings {
    static isVolumeOn = false;
    static audioMusic = AudioManager.load("assets/audio/music/2.mp3", { loop: true, volume: 0.05 });;

    static toggleVolume() {
        this.isVolumeOn = !this.isVolumeOn;
        this.updateVolumeIcons();
    }

    static updateVolumeIcons() {
        const volumeOnIcon = document.getElementById('volume-on');
        const volumeOffIcon = document.getElementById('volume-off');

        if (this.isVolumeOn) {
            volumeOnIcon.classList.remove('d-none');
            volumeOffIcon.classList.add('d-none');
            this.audioMusic?.play().then(r => {});
        } else {
            this.audioMusic?.pause();
            volumeOnIcon.classList.add('d-none');
            volumeOffIcon.classList.remove('d-none');
        }
    }
}
