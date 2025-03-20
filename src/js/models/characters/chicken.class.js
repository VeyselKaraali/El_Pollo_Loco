/**
 * Represents a Chicken, a type of ChickenRegular enemy.
 * @extends ChickenRegular
 */
class Chicken extends ChickenRegular {
    /**
     * Array of images representing the walking animation of the Chicken.
     * @type {string[]}
     */
    IMAGES_WALK = [
        "assets/img/5_enemies/2_chicken_normal/1_walk/1.png",
        "assets/img/5_enemies/2_chicken_normal/1_walk/2.png",
        "assets/img/5_enemies/2_chicken_normal/1_walk/3.png",
    ];

    /**
     * Array of images representing the death animation of the Chicken.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        "assets/img/5_enemies/2_chicken_normal/2_dead/1.png"
    ];

    /**
     * Creates an instance of a Chicken.
     * @param {number} index - The index of the Chicken to calculate its xPosition.
     */
    constructor(index) {
        const xPosition = ChickenRegular.basePosition + index * ChickenRegular.step + (Math.random() * 300 - 150);
        super(
            Math.min(xPosition, 2400),
            354,
            80,
            60
        );
        this.offset = {
            x: 0,
            y: 3,
            width: 0,
            height: 8
        };
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }
}
