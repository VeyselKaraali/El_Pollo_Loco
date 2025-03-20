/**
 * Represents a movable cloud object in the game world.
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    /**
     * Creates a new cloud object at a random horizontal position.
     */
    constructor() {
        super(Math.random() * 500, 20, 500, 200);
        this.animate();
    }

    /**
     * Starts the cloud animation by moving it to the left.
     * If the cloud moves off the left side of the screen, it resets to the right side.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => {
            this.moveLeft();
            if (this.x + this.width < -WorldConfig.WIDTH) {
                this.x = WorldConfig.SEGMENT_COUNT * WorldConfig.WIDTH;
            }
        }, 1000 / 60);
    }
}
