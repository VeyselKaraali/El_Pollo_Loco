class Enemy extends MovableObject {
    constructor(x, y, width, height, speed) {
        super(x, y, width, height, speed);
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