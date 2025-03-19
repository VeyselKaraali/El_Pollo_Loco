class Cloud extends MovableObject {
    constructor() {
        super(Math.random() * 500, 20, 500, 200);
        this.animate();
    }

    animate() {
        IntervalManager.setStoppableInterval(() => {
            this.moveLeft();
            if (this.x + this.width < -WorldConfig.WIDTH) {
                this.x = WorldConfig.SEGMENT_COUNT * WorldConfig.WIDTH;
            }
        }, 1000 / 60)
    }
}