class ThrowableObject extends MovableObject {

    isLeftDirection = false;
    constructor(x, y, otherDirection) {
        super().loadImage("assets/img/7_bottle/2_rotation/1.png");
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 100;
        this.throw(otherDirection);
    }

    throw(isLeftDirection) {
        if(!super.isDead() && !super.isInactive()) {
            this.isLeftDirection = isLeftDirection
            this.speedY = 30;
            this.applyGravity();
            setStoppableInterval(() => {
                if(isLeftDirection) {
                    this.x -=10;
                } else {
                    this.x +=10;
                }

            }, 25);
        }
    }
}