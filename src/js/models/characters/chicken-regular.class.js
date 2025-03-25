/**
 * Represents a regular chicken enemy.
 * @extends Enemy
 */
class ChickenRegular extends Enemy {
    /**
     * Base position for the chicken spawn.
     * @type {number}
     */
    static basePosition = 600;

    /**
     * Step value used for positioning chickens.
     * @type {number}
     */
    static step = 500;

    /**
     * Audio for the chicken's death sound.
     * @type {Audio}
     */
    audioDead = AudioManager.load("assets/audio/characters/chicken/dead.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Flag to ensure death audio is only played once.
     * @type {boolean}
     */
    audioDeadPlayed = false;

    /**
     * Creates an instance of a regular Chicken.
     * @param {number} x - The x position of the chicken.
     * @param {number} y - The y position of the chicken.
     * @param {number} width - The width of the chicken.
     * @param {number} height - The height of the chicken.
     */
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speedX = 0.25 + Math.random() * (0.75 - 0.25);
        this.energy = 0.01;
    }

    /**
     * Handles the animation updates for the ChickenRegular's states.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => !this.isDead() && this.moveLeft(), 1000 / 60);
        IntervalManager.setStoppableInterval(() => !this.isDead() && this.playAnimation(this.IMAGES_WALK), 200);
        IntervalManager.setStoppableInterval(() => this.handleDeath(), 200);
    }

    /**
     * Handles the death state of the character by playing the death animation,
     * the death audio, and moving the character off the screen after a short delay.
     *
     * The method ensures that the death animation and audio are played only once.
     * After a 1-second delay, the character is moved off the screen.
     */
    handleDeath() {
        if (this.isDead() && !this.audioDeadPlayed) {
            this.playAnimation(this.IMAGES_DEAD);
            this.audioManager.play(this.audioDead);
            this.audioDeadPlayed = true;
            setTimeout(() => this.y = 1000, 1000);
        }
    }
}
