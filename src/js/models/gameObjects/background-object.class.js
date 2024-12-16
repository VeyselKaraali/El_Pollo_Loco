class BackgroundObject extends MovableObject {
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