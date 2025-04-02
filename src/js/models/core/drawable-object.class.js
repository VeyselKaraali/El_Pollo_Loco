class DrawableObject {
    img;
    imgCache = {};
    currentImage = 0;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.offset = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }

    /**
     * Loads a single image from the provided path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and stores them in the imgCache.
     * The first image in the array becomes the current image.
     * @param {Array} paths - Array of image paths to load.
     */
    loadImages(paths) {
        paths.forEach((path, index) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;

            /**
             * Sets the first image in the array as the current image.
             * @property {HTMLImageElement} img - The currently selected image.
             */
            if (index === 0) {
                this.img = img;
            }
        });
    }

    /**
     * Returns the last image from the list of image paths.
     * @param {Array} images - Array of image paths.
     * @returns {Image} The last image object in the array.
     */
    getLastImage(images) {
        const lastImageIndex = images.length - 1;
        const lastImagePath = images[lastImageIndex];
        return this.imgCache[lastImagePath];
    }

    /**
     * Draws the object on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw the object on.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a red frame (debug border) around the object if it is an instance
     * of specific classes (such as Character, Chick, Chicken, etc.).
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw the frame on.
     */
    drawFrame(ctx) {
        if(
            this instanceof Character ||
            this instanceof Chick ||
            this instanceof Chicken ||
            this instanceof ChickenBig ||
            this instanceof ThrowableBottle ||
            this instanceof Bottle ||
            this instanceof Coin
        ){
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.width, this.height - this.offset.height);
            ctx.stroke();
        }
    }
}
