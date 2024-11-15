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
        "assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
    ]

    IMAGES_BOTTLE_ROTATION=[
        "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ]

    IMAGES_BOTTLE_SPLASH=[
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png"
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