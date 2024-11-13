class Coin extends MovableObject {
    offset = {
        x: 35,
        y: 35,
        width: 70,
        height: 70
    };

    IMAGES_COIN = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ];

    width = 100;
    height = 100;

    constructor() {
        super();
        this.loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = Math.random() * 1600 + 250;
        this.y = Math.floor(Math.random() * (180 - 20 + 1)) + 20;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 350)
    }
}