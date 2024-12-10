class StatusBarEndboss extends StatusBar {
    IMAGES = [
        "assets/img/8_statusbars/2_chicken_big/1_health/0.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/1.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/2.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/3.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/4.png",
        "assets/img/8_statusbars/2_chicken_big/1_health/5.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 510;
        this.y = -100;
        this.setValue(5);
    }
}

