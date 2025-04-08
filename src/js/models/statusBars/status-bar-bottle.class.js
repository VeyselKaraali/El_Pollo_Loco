/**
 * Represents a status bar specifically for bottles, extending the generic StatusBar class.
 * This class uses custom images to represent the different levels of bottles collected.
 */
class StatusBarBottle extends StatusBar {
    /**
     * An array of image paths to represent the different bottle collection levels.
     * These images are displayed based on the value set in the status bar.
     * @type {string[]}
     */
    IMAGES = [
        "assets/img/8_statusbars/1_character/3_bottle/0.png",
        "assets/img/8_statusbars/1_character/3_bottle/1.png",
        "assets/img/8_statusbars/1_character/3_bottle/2.png",
        "assets/img/8_statusbars/1_character/3_bottle/3.png",
        "assets/img/8_statusbars/1_character/3_bottle/4.png",
        "assets/img/8_statusbars/1_character/3_bottle/5.png",
        "assets/img/8_statusbars/1_character/3_bottle/6.png",
        "assets/img/8_statusbars/1_character/3_bottle/7.png",
        "assets/img/8_statusbars/1_character/3_bottle/8.png",
        "assets/img/8_statusbars/1_character/3_bottle/9.png",
    ];

    /**
     * Creates a new status bar for bottles, initializes the position, and sets the initial value.
     * The default Y position for the bottle status bar is set to 130.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.width = 75;
        this.height = 75;
        this.x = -10;
        this.y = 115;
        this.setValue(0);
    }
}
