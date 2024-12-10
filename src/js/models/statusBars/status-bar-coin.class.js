class StatusBarCoin extends StatusBar {
    IMAGES = [
        "assets/img/8_statusbars/1_character/2_coin/0.png",
        "assets/img/8_statusbars/1_character/2_coin/1.png",
        "assets/img/8_statusbars/1_character/2_coin/2.png",
        "assets/img/8_statusbars/1_character/2_coin/3.png",
        "assets/img/8_statusbars/1_character/2_coin/4.png",
        "assets/img/8_statusbars/1_character/2_coin/5.png",
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 80;
        this.setValue(0);
    }
}

