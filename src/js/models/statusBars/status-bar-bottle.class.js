class StatusBarBottle extends StatusBar {
    IMAGES = [
        "assets/img/8_statusbars/1_character/3_bottle/0.png",
        "assets/img/8_statusbars/1_character/3_bottle/1.png",
        "assets/img/8_statusbars/1_character/3_bottle/2.png",
        "assets/img/8_statusbars/1_character/3_bottle/3.png",
        "assets/img/8_statusbars/1_character/3_bottle/4.png",
        "assets/img/8_statusbars/1_character/3_bottle/5.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 130;
        this.setValue(0);
    }
}

