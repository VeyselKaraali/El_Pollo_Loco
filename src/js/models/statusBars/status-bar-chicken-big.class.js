/**
 * Represents a status bar specifically for the "Big Chicken", extending the generic StatusBar class.
 * This class uses custom images to represent the different health levels of the "Big Chicken".
 */
class StatusBarChickenBig extends StatusBar {
    /**
     * An array of image paths to represent the different health levels of the Big Chicken.
     * These images are displayed based on the health value set in the status bar.
     * @type {string[]}
     */
    IMAGES = [
        "assets/img/8_statusbars/2_chicken_big/1_health/0.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/1.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/2.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/3.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/4.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/5.png"
    ];

    /**
     * Creates a new status bar for the Big Chicken's health, initializes the position, and sets the initial health value.
     * The initial health value is set to 5 (full health), and the X and Y positions are also set.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 510;
        this.y = -100;
        this.setValue(5);
    }
}
