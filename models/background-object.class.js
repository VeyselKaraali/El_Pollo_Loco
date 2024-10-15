class BackgroundObject extends MovableObject {
    width= 720;
    height = 400;
    constructor(path, x) {
        super().loadImage(path);
        this.x = x;
        this.y = 480 - this.height;
    }
}