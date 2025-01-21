class Background extends DrawableObject {
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