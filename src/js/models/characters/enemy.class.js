class Enemy extends MovableObject {
    constructor(x, y, width, height, speedX) {
        super(x, y, width, height, speedX);
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