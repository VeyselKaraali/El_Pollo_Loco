class MovableObject extends DrawableObject {
    speedX = 0;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    lastActivityTime = Date.now();

    constructor(x, y, width, height, speedX) {
        super(x, y, width, height);
        this.speedX = speedX;
    }

    applyGravity() {
        setStoppableInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        }
        if(this instanceof Character) {
            return this.y < 172
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    isColliding(mo) {
        return this.x + this.offset.x + this.width - this.offset.width >= mo.x &&
            this.y + this.offset.y + this.height - this.offset.height >= mo.y &&
            this.x <= mo.x + mo.offset.x + mo.width - mo.offset.width &&
            this.y + this.offset.y <= mo.y + mo.offset.y + mo.height - mo.offset.height;
    }

    isInactive() {
        return Date.now() >= this.lastActivityTime + 5000;
    }

    reduceEnergy() {
        this.energy = Math.max(this.energy - 5, 0);
        if (this.energy > 0) {
            this.lastHit = Date.now();
        }
    }

    isHurt() {
        return (Date.now() - this.lastHit) / 1000 < 1;
    }

    isDead() {
        return this.energy <= 0;
    }

    moveLeft() {
        if(!this.isDead()) {
            this.x -= this.speedX;
            this.otherDirection = true; // Markiert, dass das Objekt nach links schaut
            this.lastActivityTime = Date.now();
        }
    }

    moveRight() {
        if(!this.isDead()) {
            this.x += this.speedX;
            this.otherDirection = false; // Markiert, dass das Objekt nach rechts schaut
            this.lastActivityTime = Date.now();
        }
    }

    jump() {
        this.speedY = 0;
        this.lastActivityTime = Date.now();
    }
}
