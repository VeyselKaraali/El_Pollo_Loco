class ChickenBig extends Enemy {
    IMAGES_WALK = [
        "assets/img/5_enemies/3_chicken_big/1_walk/1.png",
        "assets/img/5_enemies/3_chicken_big/1_walk/2.png",
        "assets/img/5_enemies/3_chicken_big/1_walk/3.png",
        "assets/img/5_enemies/3_chicken_big/1_walk/4.png",
    ]

    IMAGES_ALERT = [
        "assets/img/5_enemies/3_chicken_big/2_alert/1.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/2.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/3.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/4.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/5.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/6.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/7.png",
        "assets/img/5_enemies/3_chicken_big/2_alert/8.png",
    ]

    IMAGES_ATTACK = [
        "assets/img/5_enemies/3_chicken_big/3_attack/1.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/2.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/3.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/4.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/5.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/6.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/7.png",
        "assets/img/5_enemies/3_chicken_big/3_attack/8.png",
    ]

    IMAGES_HURT = [
        "assets/img/5_enemies/3_chicken_big/4_hurt/1.png",
        "assets/img/5_enemies/3_chicken_big/4_hurt/2.png",
        "assets/img/5_enemies/3_chicken_big/4_hurt/3.png",
    ]

    IMAGES_DEAD = [
        "assets/img/5_enemies/3_chicken_big/5_dead/1.png",
        "assets/img/5_enemies/3_chicken_big/5_dead/2.png",
        "assets/img/5_enemies/3_chicken_big/5_dead/3.png",
    ]

    audioCluck = AudioManager.load("assets/audio/characters/chickenBig/cluck.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioDead = AudioManager.load("assets/audio/characters/chickenBig/dead.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioDeadPlayed = false;

    constructor() {
        super(
            2500,
            45,
            250,
            400
        );
        this.offset = {
            x: 20,
            y: 70,
            width: 55,
            height: 130
        };
        this.statusBarHealth = new StatusBarChickenBig();
        this.isNearCharacter = false;
        this.alertCount = 0;
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    handleDeath() {
        this.playAnimation(this.IMAGES_DEAD);
        if(!this.audioDeadPlayed) {
            this.audioManager.play(this.audioDead);
            this.audioDeadPlayed = true;
        }

        setTimeout(() => {
            IntervalManager.stopAllIntervals();

            const lastImageIndex = this.IMAGES_DEAD.length - 1;
            const lastImagePath = this.IMAGES_DEAD[lastImageIndex];
            this.img = this.imgCache[lastImagePath];

            StateManager.updateState("isGameOver", true);
            StateManager.updateState("isGamePaused", true);

            DomUtils.toggleElementVisibility("end-screen-container", true);
            DomUtils.toggleElementVisibility("win-screen", true);
            DomUtils.toggleElementVisibility("lose-screen", false);

        }, 2000);
    }

    animate() {
        IntervalManager.setStoppableInterval(() => {
            if(!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        IntervalManager.setStoppableInterval(() => {
            if(!this.isDead()) {
                this.playAnimation(this.IMAGES_WALK);
            }
            if(this.isNearCharacter && this.alertCount < 10 && !this.isDead()) {
                this.playAnimation(this.IMAGES_ALERT);
                this.alertCount++;
            }
            if(this.isHurt() && !this.isDead()) {
                this.playAnimation(this.IMAGES_HURT);
                this.audioManager.play(this.audioCluck);
            }

            if(this.isDead()) {
               this.handleDeath();
            }

            if(this.energy < 1) {
                this.energy = 0;
            }
        }, 200)
    }
}