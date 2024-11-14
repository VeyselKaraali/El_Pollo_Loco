class StatusBarCoin extends StatusBar {
    IMAGES = [
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
        "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.y = 80;
        this.setPercentage(0);
    }
}

