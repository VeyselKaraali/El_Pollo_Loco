class ThrowableObject extends MovableObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    throw() {
        this.applyGravity();
    }
}