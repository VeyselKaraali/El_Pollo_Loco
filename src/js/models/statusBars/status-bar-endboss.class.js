class StatusBarEndboss extends StatusBar {
    IMAGES = [
        "assets/img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
        "assets/img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
        "assets/img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
        "assets/img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
        "assets/img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
        "assets/img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 510;
        this.y = 30;
        this.setPercentage(100);
    }
}

