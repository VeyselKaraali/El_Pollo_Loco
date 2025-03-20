/**
 * Represents a bottle object in the game world.
 * @extends MovableObject
 */
class Bottle extends MovableObject {
    /**
     * The base starting position of the bottle in the game world.
     * @static
     * @type {number}
     */
    static basePosition = 600;

    /**
     * The step size used to calculate the position of multiple bottles.
     * @static
     * @type {number}
     */
    static step = 1500 / 5;

    /**
     * The image paths for the bottle animations.
     * @type {string[]}
     */
    IMAGES_BOTTLE = [
        "assets/img/7_bottle/1_ground/1.png",
        "assets/img/7_bottle/1_ground/2.png",
    ];

    /**
     * Creates a new bottle object at a random horizontal position.
     * @param {number} index - The index of the bottle used to calculate its position.
     */
    constructor(index) {
        super(
            Bottle.basePosition + index * Bottle.step + (Math.random() * 100 - 50),
            340,
            90,
            75
        );
        this.offset = {
            x: 27,
            y: 13,
            width: 45,
            height: 20
        };
        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    /**
     * Starts the bottle animation by cycling through its images.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 350);
    }
}
