/**
 * Represents a generic enemy object.
 * @extends MovableObject
 */
class Enemy extends MovableObject {
    /**
     * Creates an instance of an Enemy.
     * @param {number} x - The x position of the enemy.
     * @param {number} y - The y position of the enemy.
     * @param {number} width - The width of the enemy.
     * @param {number} height - The height of the enemy.
     */
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    /**
     * Moves the enemy left and updates its facing direction.
     */
    moveLeft() {
        super.moveLeft();
        this.isFacingOtherDirection = false;
    }

    /**
     * Moves the enemy right and updates its facing direction.
     */
    moveRight() {
        super.moveRight();
        this.isFacingOtherDirection = true;
    }
}
