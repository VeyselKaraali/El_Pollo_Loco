class Bottle extends ThrowableObject {
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

    constructor(index) {
        super(
            Bottle.basePosition + index * Bottle.step + (Math.random() * 100 - 50),
            340,
            90,
            75
        );
        super.loadImages(this.IMAGES_BOTTLE);
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 350)
    }
}