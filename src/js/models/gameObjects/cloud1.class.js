class Cloud1 extends Cloud {
    IMAGES_CLOUD_1=[
        "assets/img/3_background/layers/5_clouds/1.png"
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_CLOUD_1);
        this.speedX = 0.1 + Math.random() * 0.05;
        this.y = 20 + Math.random() * 20;
    }
}