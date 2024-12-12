class Enemy extends MovableObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    moveLeft() {
        super.moveLeft();
        this.isFacingOtherDirection = false;
    }

    moveRight() {
        super.moveRight();
        this.isFacingOtherDirection = true;
    }
}