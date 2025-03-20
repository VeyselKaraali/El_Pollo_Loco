/**
 * Represents a specific type of cloud (Cloud2) with a set of images and unique behavior.
 * @extends Cloud
 */
class Cloud2 extends Cloud {
    /**
     * Array containing the image paths for Cloud2.
     * @type {string[]}
     */
    IMAGES_CLOUD_2 = [
        "assets/img/3_background/layers/5_clouds/2.png"
    ];

    /**
     * Creates a new Cloud2 object with random horizontal speed and vertical position.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_CLOUD_2);
        this.speedX = 0.08 + Math.random() * 0.05; // Random speed for cloud movement
        this.y = 40 + Math.random() * 20; // Random vertical position
    }
}
