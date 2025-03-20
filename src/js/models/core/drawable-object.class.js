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

    loadImage(path) {
        this.img = new Image()
        this.img.src = path;
    }

    loadImages(paths) {
        paths.forEach((path, index) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;

            if (index === 0) {
                this.img = img;
            }
        });
    }

    getLastImage(images) {
        const lastImageIndex = images.length - 1;
        const lastImagePath = images[lastImageIndex];
        return this.imgCache[lastImagePath];
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a red frame (debug border) around the current object
     * if it is an instance of one of the specified classes.
     *
     * The frame is drawn based on the object's position (`x`, `y`),
     * its size (`width`, `height`), and its `offset` values.
     *
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
            ctx.rect(this.x + this.offset.x, this.y+this.offset.y, this.width-this.offset.width, this.height-this.offset.height);
            ctx.stroke();
        }
    }
}