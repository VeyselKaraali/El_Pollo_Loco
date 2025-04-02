/**
 * Represents a status bar that displays a value using images, typically used for health, coins, or other metrics.
 * The status bar updates the displayed image based on the current value.
 */
class StatusBar extends DrawableObject {
    /**
     * An array of image paths to represent the different status levels.
     * These images are displayed based on the value set in the status bar.
     * @type {string[]}
     */
    IMAGES = [];

    /**
     * The current value of the status bar.
     * This value is used to determine which image to display.
     * @type {number}
     */
    value = 0;

    /**
     * Creates a new status bar with an initial value of 0.
     * Initializes the position, size, and sets the initial image.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setValue(0);
    }

    /**
     * Sets the value of the status bar and updates the displayed image.
     * The image displayed corresponds to the current value.
     * @param {number} value - The value to set for the status bar.
     */
    setValue(value) {
        this.value = value;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }

    /**
     * Checks if the status bar is full.
     * @returns {boolean} True if the status bar value is 5, otherwise false.
     */
    isFull() {
        return this.value === 5;
    }

    /**
     * Resolves the image index based on the current value.
     * This determines which image to display based on the range of values.
     * @returns {number} The index of the image to display.
     */
    resolveImageIndex() {
        if (this.value >= 5) {
            return 5;
        } else if (this.value >= 4) {
            return 4;
        } else if (this.value >= 3) {
            return 3;
        } else if (this.value >= 2) {
            return 2;
        } else if (this.value >= 1) {
            return 1;
        } else if (this.value > 0 && this.value < 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
