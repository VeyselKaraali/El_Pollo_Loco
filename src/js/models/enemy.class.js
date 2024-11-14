class Enemy extends MovableObject {
    constructor(x, y, width, height, speed) {
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

    animate() {
        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200)

        setStoppableInterval(() => {
            if(super.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    this.y = 1000;
                }, 1000);
            }
        }, 200)
    }
}