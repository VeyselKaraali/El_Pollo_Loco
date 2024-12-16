class BackgroundObject extends DrawableObject {
    constructor(x, imgPath) {
        super(
            x,
            0,
            CANVAS.WIDTH,
            CANVAS.HEIGHT
        );
        this.loadImage(imgPath);
    }
}