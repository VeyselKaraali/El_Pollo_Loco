class StatusBarHealth extends StatusBar {
    IMAGES = [
        "assets/img/8_statusbars/1_character/1_health/1.png",
        "assets/img/8_statusbars/1_character/1_health/2.png",
        "assets/img/8_statusbars/1_character/1_health/3.png",
        "assets/img/8_statusbars/1_character/1_health/4.png",
        "assets/img/8_statusbars/1_character/1_health/5.png",
        "assets/img/8_statusbars/1_character/1_health/6.png",
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 30;
        this.setPercentage(100);
    }
}

