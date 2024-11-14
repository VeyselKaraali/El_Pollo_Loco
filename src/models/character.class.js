class Character extends MovableObject {
    world;
    offset = {
        x: 13,
        y: 97,
        width: 25,
        height: 110
    };
    running_sound = new Audio("assets/audio/run.mp3");
    collectedBottles = 0;
    collectedCoins = 0;

    IMAGES_WALKING = [
        "assets/img/2_character_pepe/2_walk/W-21.png",
        "assets/img/2_character_pepe/2_walk/W-22.png",
        "assets/img/2_character_pepe/2_walk/W-23.png",
        "assets/img/2_character_pepe/2_walk/W-24.png",
        "assets/img/2_character_pepe/2_walk/W-25.png",
        "assets/img/2_character_pepe/2_walk/W-26.png",
    ];
    IMAGES_JUMPING = [
        "assets/img/2_character_pepe/3_jump/J-31.png",
        "assets/img/2_character_pepe/3_jump/J-32.png",
        "assets/img/2_character_pepe/3_jump/J-33.png",
        "assets/img/2_character_pepe/3_jump/J-34.png",
        "assets/img/2_character_pepe/3_jump/J-35.png",
        "assets/img/2_character_pepe/3_jump/J-36.png",
        "assets/img/2_character_pepe/3_jump/J-37.png",
        "assets/img/2_character_pepe/3_jump/J-38.png",
        "assets/img/2_character_pepe/3_jump/J-39.png",
    ];
    IMAGES_HURT = [
        "assets/img/2_character_pepe/4_hurt/H-41.png",
        "assets/img/2_character_pepe/4_hurt/H-42.png",
        "assets/img/2_character_pepe/4_hurt/H-43.png",
    ];

    IMAGES_DEAD = [
        "assets/img/2_character_pepe/5_dead/D-51.png",
        "assets/img/2_character_pepe/5_dead/D-52.png",
        "assets/img/2_character_pepe/5_dead/D-53.png",
        "assets/img/2_character_pepe/5_dead/D-54.png",
        "assets/img/2_character_pepe/5_dead/D-55.png",
        "assets/img/2_character_pepe/5_dead/D-56.png",
        "assets/img/2_character_pepe/5_dead/D-57.png"
    ];

    constructor() {
        super(
            120,
            172,
            100,
            250,
            10
        );
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity();
        this.animate();
    }

    collectBottle(amount) {
        return this.collectedBottles+=amount;
    }

    collectCoin(amount) {
        return this.collectedCoins+=amount;
    }

    animate() {
        setStoppableInterval(() => {
            this.running_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            if(this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
            }

            if(this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setStoppableInterval(() => {
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50)
    }

    jump() {
        this.speedY = 30;
    }

    bounce() {
        this.speedY = 15;
    }

    moveLeft() {
        super.moveLeft();
        this.running_sound.play().then(r => {});
    }

    moveRight() {
        super.moveRight();
        this.running_sound.play().then(r => {});
    }
}
