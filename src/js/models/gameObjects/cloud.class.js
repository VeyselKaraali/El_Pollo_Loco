class Cloud extends MovableObject {
    constructor() {
        super(Math.random() * 500, 20, 500, 200);
        this.speedX = 0.1;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60)
    }
}