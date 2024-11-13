class Enemy extends MovableObject {
    constructor(x, y, width, height, speed/*, walkingImages, deadImages*/) {
        super(x, y, width, height, speed);
        this.animate();
    }

    moveLeft() {
        super.moveLeft();
        this.otherDirection = false;
    }

    moveRight() {
        super.moveRight();
        this.otherDirection = true;
    }
}