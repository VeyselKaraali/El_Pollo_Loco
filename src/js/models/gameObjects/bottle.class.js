/**
 * Represents a bottle object in the game world.
 * @extends MovableObject
 */
class Bottle extends MovableObject {
    /**
     * The image paths for the bottle animations.
     * @type {string[]}
     */
    IMAGES_BOTTLE = [
        "assets/img/7_bottle/1_ground/1.png",
        "assets/img/7_bottle/1_ground/2.png",
    ];

    /**
     * Different offsets corresponding to each image.
     * @type {Object[]}
     */
    OFFSETS_BOTTLE = [
        { x: 40, y: 14, width: 60, height: 23 },
        { x: 30, y: 14, width: 60, height: 23 }
    ];

    /**
     * Creates a new instance of the class.
     *
     * @param {number} xPosition - The x-coordinate of the object.
     */
    constructor(xPosition) {
        super(xPosition, 340, 90, 75);
        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    /**
     * Plays an animation by cycling through the provided images.
     * @param {Array} images - Array of image paths for the animation sequence.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.offset = this.OFFSETS_BOTTLE[i];
        this.currentImage++;
    }

    /**
     * Starts the bottle animation by cycling through its images.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => this.playAnimation(this.IMAGES_BOTTLE), 350);
    }
}
