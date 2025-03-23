class MovableObject extends DrawableObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0;
        this.isFacingOtherDirection = false;
        this.energy = 5;
        this.energyLoss = 0.05
        this.lastHit = 0;
        this.groundLevel = 172;
        this.audioManager = new AudioManager();
        this.lastActivityTime = Date.now();
    }

    /**
     * Moves the object to the left by its speedX value.
     */
    moveLeft() {
        if(!this.isDead()) {
            this.x -= this.speedX;
            this.isFacingOtherDirection = true;
            this.lastActivityTime = Date.now();
        }
    }

    /**
     * Moves the object to the right by its speedX value.
     */
    moveRight() {
        if(!this.isDead()) {
            this.x += this.speedX;
            this.isFacingOtherDirection = false;
            this.lastActivityTime = Date.now();
        }
    }

    /**
     * Makes the object jump by setting the vertical speed (speedY) to 0.
     */
    jump() {
        this.speedY = 0;
        this.lastActivityTime = Date.now();
    }

    /**
     * Makes the object bounce by setting the vertical speed (speedY) to 0.
     */
    bounce() {
        this.speedY = 0;
        this.lastActivityTime = Date.now();
    }

    /**
     * Checks if the object is above the ground (y-position is less than the ground level).
     * @returns {boolean} - Returns true if the object is above the ground.
     */
    isAboveGround() {
        return this.y < this.groundLevel;
    }

    /**
     * Applies gravity to the object by reducing its vertical speed and adjusting its y-position.
     * If the object falls below the ground, it is reset to the ground level.
     */
    applyGravity() {
        IntervalManager.setStoppableInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

                if (this.y > this.groundLevel) {
                    this.y = this.groundLevel;
                    this.speedY = 0;
                }
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is inactive by comparing the current time with the last activity time.
     * Inactivity is considered if the object has been idle for more than 5 seconds.
     * @returns {boolean} - Returns true if the object is inactive.
     */
    isInactive() {
        return Date.now() >= this.lastActivityTime + 5000;
    }

    /**
     * Checks if the object is colliding with another movable object.
     * @param {MovableObject} mo - The other movable object to check collision with.
     * @returns {boolean} - Returns true if the objects are colliding.
     */
    isColliding(mo) {
        return this.x + this.offset.x + this.width - this.offset.width >= mo.x &&
            this.y + this.offset.y + this.height - this.offset.height >= mo.y &&
            this.x <= mo.x + mo.offset.x + mo.width - mo.offset.width &&
            this.y + this.offset.y <= mo.y + mo.offset.y + mo.height - mo.offset.height;
    }

    /**
     * Checks if the object is hurt by checking if the time since the last hit is less than 1 second.
     * @returns {boolean} - Returns true if the object was recently hit (within 1 second).
     */
    isHurt() {
        return (Date.now() - this.lastHit) / 1000 < 1;
    }

    /**
     * Reduces the energy of the object by 0.05, ensuring it doesn't go below 0.
     * If energy is reduced, updates the last hit time.
     */
    reduceEnergy() {
        this.energy = Math.max(this.energy - this.energyLoss, 0);
        if (this.energy > 0) {
            this.lastHit = Date.now();
        }
    }

    /**
     * Checks if the object is dead by verifying if its energy is less than or equal to 0.
     * @returns {boolean} - Returns true if the object is dead (energy <= 0).
     */
    isDead() {
        return this.energy <= 0;
    }

    /**
     * Plays an animation by cycling through the provided images.
     * @param {Array} images - Array of image paths for the animation sequence.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }
}
