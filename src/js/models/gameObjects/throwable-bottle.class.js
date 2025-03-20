/**
 * Represents a throwable bottle object in the game with rotation and splash animations.
 * @extends ThrowableObject
 */
class ThrowableBottle extends ThrowableObject {
    /**
     * Array containing the image paths for the bottle rotation animation.
     * @type {string[]}
     */
    IMAGES_BOTTLE_ROTATION = [
        "assets/img/7_bottle/2_rotation/1.png",
        "assets/img/7_bottle/2_rotation/2.png",
        "assets/img/7_bottle/2_rotation/3.png",
        "assets/img/7_bottle/2_rotation/4.png",
    ];

    /**
     * Array containing the image paths for the bottle splash animation.
     * @type {string[]}
     */
    IMAGES_BOTTLE_SPLASH = [
        "assets/img/7_bottle/3_splash/1.png",
        "assets/img/7_bottle/3_splash/2.png",
        "assets/img/7_bottle/3_splash/3.png",
        "assets/img/7_bottle/3_splash/4.png",
        "assets/img/7_bottle/3_splash/5.png",
        "assets/img/7_bottle/3_splash/6.png",
    ];

    /**
     * Creates a new throwable bottle at the specified position with speed and animation settings.
     * @param {number} x - The initial horizontal position of the bottle.
     * @param {number} y - The initial vertical position of the bottle.
     */
    constructor(x, y) {
        super(x, y, 75, 100);
        this.offset = {
            x: 27,
            y: 13,
            width: 45,
            height: 20
        };
        this.speedX = 20;
        this.speedY = 30;
        this.acceleration = 2.5;
        this.groundLevel = WorldConfig.HEIGHT;
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    }

    /**
     * Determines if the bottle is above the ground.
     * @returns {boolean} True, as the bottle is always above the ground while in motion.
     */
    isAboveGround() {
        return true;
    }

    /**
     * Throws the bottle with a specified trajectory and starts its rotation animation.
     */
    throw() {
        super.throw();
        this.speedY = 30;
        this.rotate();
        IntervalManager.setStoppableInterval(() => {
            this.isFacingOtherDirection ? this.x -= 10 : this.x += 10;
        }, 25);
    }

    /**
     * Starts the bottle's rotation animation.
     */
    rotate() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        }, 100);
    }

    /**
     * Starts the bottle's splash animation after hitting the ground.
     */
    splash() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        }, 200);
    }
}
