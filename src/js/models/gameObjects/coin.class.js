/**
 * Represents a coin object in the game that can be moved and animated.
 * @extends MovableObject
 */
class Coin extends MovableObject {
    /**
     * Base position for the coins.
     * @static
     * @type {number}
     */
    static basePosition = 600;

    /**
     * Step value for the spacing between coins.
     * @static
     * @type {number}
     */
    static step = 1500 / 5;

    /**
     * Array containing the image paths for the coin animation.
     * @type {string[]}
     */
    IMAGES_COIN = [
        'assets/img/6_coin/1.png',
        'assets/img/6_coin/2.png'
    ];

    /**
     * Creates a new coin object at a random position within a defined range and animates it.
     * @param {number} index - The index of the coin to determine its horizontal position.
     */
    constructor(index) {
        super(
            Coin.basePosition + index * Coin.step + (Math.random() * 100 - 50),
            Math.floor(Math.random() * (180 - 20 + 1)) + 20, // Random vertical position between 20 and 180
            100, // Width of the coin
            100  // Height of the coin
        );
        this.offset = {
            x: 35,    // X offset for collision detection
            y: 35,    // Y offset for collision detection
            width: 70, // Width of the collision area
            height: 70 // Height of the collision area
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
