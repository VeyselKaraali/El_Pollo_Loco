class Chick extends Enemy {
    offset = {
        x: 7,
        y: 53,
        width: 15,
        height: 108
    };

    IMAGES_WALKING = [
        "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
    ]

    IMAGES_DEAD = [
        "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ]

    constructor() {
        super(
            Math.random() * 500 + 250,
            355,
            60,
            60,
            0.15 + Math.random() * 0.5,
        );
        super.loadImages(this.IMAGES_WALKING);
        super.loadImages(this.IMAGES_DEAD);
    }
}