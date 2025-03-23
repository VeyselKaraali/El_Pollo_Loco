/**
 * Represents a big chicken enemy with various states and animations.
 * @extends Enemy
 */
class ChickenBig extends Enemy {
    /**
     * Array of images representing the walking animation of the ChickenBig.
     * @type {string[]}
     */
    IMAGES_WALK = [
        "assets/img/5_enemies/3_chicken_big/1_walk/1.png",
        "assets/img/5_enemies/3_chicken_big/1_walk/2.png",
        "assets/img/5_enemies/3_chicken_big/1_walk/3.png",
        "assets/img/5_enemies/3_chicken_big/1_walk/4.png",
    ];

    /**
     * Array of images representing the alert animation of the ChickenBig.
     * @type {string[]}
     */
    IMAGES_ALERT = [
        "assets/img/5_enemies/3_chicken_big/2_alert/1.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/2.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/3.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/4.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/5.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/6.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/7.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/8.png",
    ];

    /**
     * Array of images representing the attack animation of the ChickenBig.
     * @type {string[]}
     */
    IMAGES_ATTACK = [
        "assets/img/5_enemies/3_chicken_big/3_attack/1.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/2.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/3.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/4.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/5.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/6.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/7.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/8.png",
    ];

    /**
     * Array of images representing the hurt animation of the ChickenBig.
     * @type {string[]}
     */
    IMAGES_HURT = [
        "assets/img/5_enemies/3_chicken_big/4_hurt/1.png",
        "assets/img/5_enemies/3_chicken_big/4_hurt/2.png",
        "assets/img/5_enemies/3_chicken_big/4_hurt/3.png",
    ];

    /**
     * Array of images representing the death animation of the ChickenBig.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        "assets/img/5_enemies/3_chicken_big/5_dead/1.png",
        "assets/img/5_enemies/3_chicken_big/5_dead/2.png",
        "assets/img/5_enemies/3_chicken_big/5_dead/3.png",
    ];

    /**
     * Audio for the ChickenBig cluck sound.
     * @type {Audio}
     */
    audioCluck = AudioManager.load("assets/audio/characters/chickenBig/cluck.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for the ChickenBig death sound.
     * @type {Audio}
     */
    audioDead = AudioManager.load("assets/audio/characters/chickenBig/dead.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Flag to ensure death audio is only played once.
     * @type {boolean}
     */
    audioDeadPlayed = false;

    /**
     * Creates an instance of a ChickenBig.
     */
    constructor() {
        super(
            2500,  // xPosition
            45,    // yPosition
            250,   // width
            400    // height
        );
        this.offset = {
            x: 20,
            y: 70,
            width: 55,
            height: 130
        };
        this.statusBarHealth = new StatusBarChickenBig();
        this.isNearCharacter = false;
        this.alertCount = 0;
        this.energyLoss = 0.0325;
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    /**
     * Handles the animation updates for the ChickenBig's states.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        IntervalManager.setStoppableInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALK);
            }

            if (this.isNearCharacter && this.alertCount < 10 && !this.isDead()) {
                this.playAnimation(this.IMAGES_ALERT);
                this.alertCount++;
            }

            if (this.isHurt() && !this.isDead()) {
                this.playAnimation(this.IMAGES_HURT);
                this.audioManager.play(this.audioCluck);
                console.log("Energy: ", this.energy)
            }

            if (this.isDead()) {
                this.handleDeath();
            }

            if (this.energy < 1) {
                this.energy = 0;
            }
        }, 200);
    }

    /**
     * Handles the death animation and game over actions.
     */
    handleDeath() {
        this.playAnimation(this.IMAGES_DEAD);
        this.statusBarHealth.setValue(this.energy);
        this.playDeathAudio();
        this.showEndScreenAfterDelay();
    }

    /**
     * Plays the death audio if it hasn't been played already.
     */
    playDeathAudio() {
        if (!this.audioDeadPlayed) {
            this.audioManager.play(this.audioDead);
            this.audioDeadPlayed = true;
        }
    }

    /**
     * Shows the end screen after a short delay.
     */
    showEndScreenAfterDelay() {
        IntervalManager.setStoppableInterval(() => {
            IntervalManager.stopAllIntervals();
            this.img = this.getLastImage(this.IMAGES_DEAD);
            StateManager.updateState("isGameOver", true);
            DomUtils.showEndScreen(true, true, false);
        }, 2000);
    }
}
