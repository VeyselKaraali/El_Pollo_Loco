class Chick extends BasicChicken {
    offset = {
        x: 7,
        y: 53,
        width: 15,
        height: 108
    };

    IMAGES_WALK = [
        "assets/img/5_enemies/1_chicken_small/1_walk/1.png",
        "assets/img/5_enemies/1_chicken_small/1_walk/2.png",
        "assets/img/5_enemies/1_chicken_small/1_walk/3.png",
    ]

    IMAGES_DEAD = [
        "assets/img/5_enemies/1_chicken_small/2_dead/1.png"
    ]

    constructor(index) {
        super(
            BasicChicken.basePosition + index * BasicChicken.step + (Math.random() * 100 - 50),
            355,
            60,
            60,
            0.25 + Math.random() * (0.75 - 0.25)
        );
        super.loadImages(this.IMAGES_WALK);
        super.loadImages(this.IMAGES_DEAD);
        super.animate();
    }
}