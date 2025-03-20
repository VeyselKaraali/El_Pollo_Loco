/**
 * Represents a status bar specifically for the health of the character, extending the generic StatusBar class.
 * This class uses custom images to represent the different health levels of the character.
 */
class StatusBarHealth extends StatusBar {
    /**
     * An array of image paths to represent the different health levels of the character.
     * These images are displayed based on the character's remaining health.
     * @type {string[]}
     */
    IMAGES = [
        "assets/img/8_statusbars/1_character/1_health/0.png",
        "assets/img/8_statusbars/1_character/1_health/1.png",
        "assets/img/8_statusbars/1_character/1_health/2.png",
        "assets/img/8_statusbars/1_character/1_health/3.png",
        "assets/img/8_statusbars/1_character/1_health/4.png",
        "assets/img/8_statusbars/1_character/1_health/5.png",
    ];

    /**
     * Creates a new status bar for the character's health, initializes the position, and sets the initial health value.
     * The initial health value is set to 5, and the Y position is also set.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 30;
        this.setValue(5);
    }
}
