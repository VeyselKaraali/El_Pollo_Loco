class Background extends DrawableObject {
    constructor(x, imgPath) {
        super(
            x,
            0,
            World.WIDTH,
            World.HEIGHT
        );
        this.loadImage(imgPath);
    }
}