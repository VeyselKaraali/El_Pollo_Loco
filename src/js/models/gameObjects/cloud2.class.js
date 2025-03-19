class Cloud2 extends Cloud {
    IMAGES_CLOUD_2=[
        "assets/img/3_background/layers/5_clouds/2.png"
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_CLOUD_2);
        this.speedX = 0.08 + Math.random() * 0.05;
        this.y = 40 + Math.random() * 20;
    }
}