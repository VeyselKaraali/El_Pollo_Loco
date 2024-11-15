class Bottle extends MovableObject {
    offset = {
        x: 27,
        y: 13,
        width: 45,
        height: 20
    };

    static basePosition = 600;
    static step = 1500 / 5;

    IMAGES_BOTTLE=[
        "assets/img/7_bottle/1_ground/1.png",
        "assets/img/7_bottle/1_ground/2.png",
    ]

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

    constructor(index) {
        super();
        this.x = Bottle.basePosition + index * Bottle.step + (Math.random() * 100 - 50);
        this.y = 340;
        this.width = 90;
        this.height = 75;
        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 350)
    }
}