class Endboss extends Enemy {
    offset = {
        x: 10,
        y: 62,
        width: 15,
        height: 75
    };

    IMAGES_WALKING = [
        "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
    ]

    IMAGES_DEAD = [
        "assets/img/4_enemie_boss_chicken/5_dead/G24.png",
        "assets/img/4_enemie_boss_chicken/5_dead/G25.png",
        "assets/img/4_enemie_boss_chicken/5_dead/G26.png",
    ]

    constructor() {
        super(
            2500,
            45,
            250,
            400,
            0.1
        );
        super.loadImages(this.IMAGES_WALKING);
        super.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200)

        setStoppableInterval(() => {
            if(super.isDead()) {

            }
        }, 200)
    }
}