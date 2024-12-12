class MovableObject extends DrawableObject {

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0;
        this.isFacingOtherDirection = false;
        this.energy = 5;
        this.lastHit = 0;
        this.lastActivityTime = Date.now();
    }

    moveLeft() {
        if(!this.isDead()) {
            this.x -= this.speedX;
            this.isFacingOtherDirection = true;
            this.lastActivityTime = Date.now();
        }
    }

    moveRight() {
        if(!this.isDead()) {
            this.x += this.speedX;
            this.isFacingOtherDirection = false;
            this.lastActivityTime = Date.now();
        }
    }

    jump() {
        this.speedY = 0;
        this.lastActivityTime = Date.now();
    }

    bounce() {
        this.speedY = 0;
        this.lastActivityTime = Date.now();
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        }
        if(this instanceof Character) {
            return this.y < 172
        }
    }

    applyGravity() {
        setStoppableInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isInactive() {
        return Date.now() >= this.lastActivityTime + 5000;
    }

    isColliding(mo) {
        return this.x + this.offset.x + this.width - this.offset.width >= mo.x &&
            this.y + this.offset.y + this.height - this.offset.height >= mo.y &&
            this.x <= mo.x + mo.offset.x + mo.width - mo.offset.width &&
            this.y + this.offset.y <= mo.y + mo.offset.y + mo.height - mo.offset.height;
    }

    isHurt() {
        return (Date.now() - this.lastHit) / 1000 < 1;
    }

    reduceEnergy() {
        this.energy = Math.max(this.energy - 0.05, 0);
        if (this.energy > 0) {
            this.lastHit = Date.now();
        }
    }

    isDead() {
        return this.energy <= 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }
}
