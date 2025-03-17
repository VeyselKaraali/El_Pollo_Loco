class ChickenRegular extends Enemy {
    static basePosition = 600;
    static step = 1500 / 5;

    audioDead = AudioManager.load("assets/audio/characters/chicken/dead.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioDeadPlayed = false;

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speedX = 0.25 + Math.random() * (0.75 - 0.25);
        this.energy = 0.01;
    }

    animate() {
        IntervalManager.setStoppableInterval(() => {
            if(!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        IntervalManager.setStoppableInterval(() => {
            if(!this.isDead()) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 200)

        IntervalManager.setStoppableInterval(() => {
            if(this.isDead() && !this.audioDeadPlayed) {
                this.playAnimation(this.IMAGES_DEAD);
                this.audioManager.play(this.audioDead);
                this.audioDeadPlayed = true;
                setTimeout(() => {
                    this.y = 1000;
                }, 1000);
            }
        }, 200)
    }
}