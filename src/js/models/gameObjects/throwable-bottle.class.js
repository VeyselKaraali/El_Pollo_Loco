class ThrowableBottle extends ThrowableObject {
    IMAGES_BOTTLE_ROTATION=[
        "assets/img/7_bottle/2_rotation/1.png",
        "assets/img/7_bottle/2_rotation/2.png",
        "assets/img/7_bottle/2_rotation/3.png",
        "assets/img/7_bottle/2_rotation/4.png",
    ]

    IMAGES_BOTTLE_SPLASH=[
        "assets/img/7_bottle/3_splash/1.png",
        "assets/img/7_bottle/3_splash/2.png",
        "assets/img/7_bottle/3_splash/3.png",
        "assets/img/7_bottle/3_splash/4.png",
        "assets/img/7_bottle/3_splash/5.png",
        "assets/img/7_bottle/3_splash/6.png",
    ]

    constructor(x, y) {
        super(x, y, 75, 100);
        this.offset = {
            x: 27,
            y: 13,
            width: 45,
            height: 20
        };
        this.speedX = 20;
        this.speedY = 30;
        this.acceleration = 2.5;
        this.groundLevel = WorldConfig.HEIGHT;
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    }

    isAboveGround() {
        return true;
    }

    throw() {
        super.throw();
        this.speedY = 30;
        this.rotate();
        IntervalManager.setStoppableInterval(() => {
            this.isFacingOtherDirection ? this.x -=10 : this.x +=10;
        }, 25)
    }

    rotate() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        }, 100)
    }

    splash() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
        }, 200)
    }
}