class Coin extends MovableObject {
    static basePosition = 600;
    static step = 1500 / 5;

    IMAGES_COIN = [
        'assets/img/6_coin/1.png',
        'assets/img/6_coin/2.png'
    ];

    constructor(index) {
        super(
            Coin.basePosition + index * Coin.step + (Math.random() * 100 - 50),
            Math.floor(Math.random() * (180 - 20 + 1)) + 20,
            100,
            100
        );
        this.offset = {
            x: 35,
            y: 35,
            width: 70,
            height: 70
        };
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        IntervalManager.setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 350)
    }
}