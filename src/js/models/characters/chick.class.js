class Chick extends ChickenRegular {
    IMAGES_WALK = [
        "assets/img/5_enemies/1_chicken_small/1_walk/1.png",
        "assets/img/5_enemies/1_chicken_small/1_walk/2.png",
        "assets/img/5_enemies/1_chicken_small/1_walk/3.png",
    ]

    IMAGES_DEAD = [
        "assets/img/5_enemies/1_chicken_small/2_dead/1.png"
    ]

    constructor(index) {
        const xPosition = ChickenRegular.basePosition + index * ChickenRegular.step + (Math.random() * 300 - 150);
        super(
            Math.min(xPosition, 2400),
            355,
            60,
            60
        );
        this.offset = {
            x: 7,
            y: 53,
            width: 15,
            height: 108
        };
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }
}