class Coin extends MovableObject {


    static basePosition = 600;
    static step = 1500 / 5;

    IMAGES_COIN = [
        'assets/img/6_coin/1.png',
        'assets/img/6_coin/2.png'
    ];

    width = 100;
    height = 100;

    constructor(index) {
        super();
        this.x = Coin.basePosition + index * Coin.step + (Math.random() * 100 - 50);
        this.y = Math.floor(Math.random() * (180 - 20 + 1)) + 20;
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
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 350)
    }
}