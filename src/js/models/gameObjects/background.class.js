/**
 * Represents a background object in the game world.
 * @extends DrawableObject
 */
class Background extends DrawableObject {
    /**
     * Creates a new background object.
     * @param {number} x - The x-coordinate of the background.
     * @param {string} imgPath - The path to the image used for the background.
     */
    constructor(x, imgPath) {
        super(
            x,
            0,
            WorldConfig.WIDTH,
            WorldConfig.HEIGHT
        );
        this.loadImage(imgPath);
    }
}
