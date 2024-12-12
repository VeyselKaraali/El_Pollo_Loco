class BasicChicken extends Enemy {
    static basePosition = 600;
    static step = 1500 / 5;
    audioCluck = new Audio("assets/audio/characters/chicken/cluck.mp3");
    audioDead = new Audio("assets/audio/characters/chicken/dead.mp3");

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speedX = 0.25 + Math.random() * (0.75 - 0.25)
    }

    animate() {
        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setStoppableInterval(() => {
            if(!super.isDead()) {
                this.playAnimation(this.IMAGES_WALK);
                //this.audioCluck.play().then(() => {});
            }
        }, 200)

        setStoppableInterval(() => {
            if(super.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                //this.audioDead.play().then(() => {});
                setTimeout(() => {
                    this.y = 1000;
                }, 1000);
            }
        }, 200)
    }
}