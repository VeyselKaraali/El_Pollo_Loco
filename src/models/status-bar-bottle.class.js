class StatusBarBottle extends StatusBar {
    IMAGES = [
        "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
        "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
        "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
        "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
        "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
        "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 130;
        this.setPercentage(0);
    }
}

