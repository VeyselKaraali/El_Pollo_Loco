/**
 * Represents a status bar specifically for the coin collection, extending the generic StatusBar class.
 * This class uses custom images to represent the different coin collection levels.
 */
class StatusBarCoin extends StatusBar {
    /**
     * An array of image paths to represent the different coin collection levels.
     * These images are displayed based on the number of coins collected.
     * @type {string[]}
     */
    IMAGES = [
        "assets/img/8_statusbars/1_character/2_coin/0.png",
        "assets/img/8_statusbars/1_character/2_coin/1.png",
        "assets/img/8_statusbars/1_character/2_coin/2.png",
        "assets/img/8_statusbars/1_character/2_coin/3.png",
        "assets/img/8_statusbars/1_character/2_coin/4.png",
        "assets/img/8_statusbars/1_character/2_coin/5.png",
        "assets/img/8_statusbars/1_character/2_coin/6.png",
        "assets/img/8_statusbars/1_character/2_coin/7.png",
        "assets/img/8_statusbars/1_character/2_coin/8.png",
        "assets/img/8_statusbars/1_character/2_coin/9.png",
    ];

    /**
     * Creates a new status bar for the coin collection, initializes the position, and sets the initial coin value.
     * The initial coin value is set to 0 (no coins collected), and the Y position is also set.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.width = 75;
        this.height = 75;
        this.x = -10;
        this.y = 65;
        this.setValue(0);
    }
}
