class BasicChicken extends Enemy {
    static basePosition = 600;
    static step = 1500 / 5;

    constructor(x, y, width, height, speed) {
        super(x, y, width, height, speed);
    }

    animate() {
        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.playAnimation(this.IMAGES_WALK);
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