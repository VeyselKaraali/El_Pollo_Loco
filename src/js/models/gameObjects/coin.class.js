/**
 * Represents a coin object in the game that can be moved and animated.
 * @extends MovableObject
 */
class Coin extends MovableObject {
    /**
     * Array containing the image paths for the coin animation.
     * @type {string[]}
     */
    IMAGES_COIN = [
        'assets/img/6_coin/1.png',
        'assets/img/6_coin/2.png'
    ];

    /**
     * Creates a new instance of the class.
     *
     * @param {number} xPosition - The x-coordinate of the object.
     * @param {number} yPosition - The y-coordinate of the object.
     */
    constructor(xPosition, yPosition) {
        super(xPosition, yPosition, 100, 100);
        this.offset = {
            x: 35,
            y: 35,
            width: 70,
            height: 70
        };
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    /**
     * Animates the coin by cycling through its images at a defined interval.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 350);
    }
}
