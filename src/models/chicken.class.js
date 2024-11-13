class Chicken extends Enemy {
    offset = {
        x: 0,
        y: 3,
        width: 0,
        height: 8
    };

    IMAGES_WALKING = [
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ]

    IMAGES_DEAD = [
        "assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
    ]

    constructor() {
        super(
            200 + Math.random() * 500,
            354,
            80,
            60,
            0.15 + Math.random() * 0.5,
        );
        super.loadImages(this.IMAGES_WALKING);
        super.loadImages(this.IMAGES_DEAD);
    }
}
