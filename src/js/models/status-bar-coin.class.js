class StatusBarCoin extends StatusBar {
    IMAGES = [
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 80;
        this.setPercentage(0);
    }
}

