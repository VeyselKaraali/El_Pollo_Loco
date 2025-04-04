/**
 * Represents a Chick, a type of ChickenRegular enemy.
 * @extends ChickenRegular
 */
class Chick extends ChickenRegular {
    /**
     * Array of images representing the walking animation of the Chick.
     * @type {string[]}
     */
    IMAGES_WALK = [
        "assets/img/5_enemies/1_chicken_small/1_walk/1.png",
        "assets/img/5_enemies/1_chicken_small/1_walk/2.png",
        "assets/img/5_enemies/1_chicken_small/1_walk/3.png",
    ];

    /**
     * Array of images representing the death animation of the Chick.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        "assets/img/5_enemies/1_chicken_small/2_dead/1.png"
    ];

    /**
     * Creates an instance of a Chick.
     * @param {number} index - The index of the Chick to calculate its xPosition.
     */
    constructor(index) {
        const xPosition = ChickenRegular.basePosition + index * ChickenRegular.step + (Math.random() * 300 - 150);
        super(
            Math.min(xPosition, 2400),
            355,
            60,
            60
        );
        this.offset = {
            top: 5,
            right: 7,
            bottom: 8,
            left: 7
        };
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }
}
