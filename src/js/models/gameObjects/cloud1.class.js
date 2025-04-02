/**
 * Represents a specific type of cloud (Cloud1) with a set of images and unique behavior.
 * @extends Cloud
 */
class Cloud1 extends Cloud {
    /**
     * Array containing the image paths for Cloud1.
     * @type {string[]}
     */
    IMAGES_CLOUD_1 = [
        "assets/img/3_background/layers/5_clouds/1.png"
    ];

    /**
     * Creates a new Cloud1 object with random horizontal speed and vertical position.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_CLOUD_1);
        this.speedX = 0.1 + Math.random() * 0.05;
        this.y = 20 + Math.random() * 20;
    }
}
