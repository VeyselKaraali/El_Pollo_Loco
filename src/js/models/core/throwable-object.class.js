class ThrowableObject extends MovableObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    /**
     * Simulates throwing the object by applying gravity.
     * This method calls `applyGravity()` from the parent class,
     * which controls the object's movement in the air.
     */
    throw() {
        this.applyGravity();
    }
}
