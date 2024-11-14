class StatusBarHealth extends StatusBar {
    IMAGES = [
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png",
        "assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 30;
        this.setPercentage(100);
    }
}

