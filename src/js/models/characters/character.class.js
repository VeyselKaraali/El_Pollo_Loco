class Character extends MovableObject {
    IMAGES_WALK = [
        "assets/img/4_character/1_walk/1.png",
        "assets/img/4_character/1_walk/2.png",
        "assets/img/4_character/1_walk/3.png",
        "assets/img/4_character/1_walk/4.png",
        "assets/img/4_character/1_walk/5.png",
        "assets/img/4_character/1_walk/6.png",
    ];

    IMAGES_IDLE = [
        "assets/img/4_character/2_idle/1.png",
        "assets/img/4_character/2_idle/2.png",
        "assets/img/4_character/2_idle/3.png",
        "assets/img/4_character/2_idle/4.png",
        "assets/img/4_character/2_idle/5.png",
        "assets/img/4_character/2_idle/6.png",
        "assets/img/4_character/2_idle/7.png",
        "assets/img/4_character/2_idle/8.png",
        "assets/img/4_character/2_idle/9.png",
        "assets/img/4_character/2_idle/10.png",
    ];

    IMAGES_IDLE_LONG = [
        "assets/img/4_character/3_idle_long/1.png",
        "assets/img/4_character/3_idle_long/2.png",
        "assets/img/4_character/3_idle_long/3.png",
        "assets/img/4_character/3_idle_long/4.png",
        "assets/img/4_character/3_idle_long/5.png",
        "assets/img/4_character/3_idle_long/6.png",
        "assets/img/4_character/3_idle_long/7.png",
        "assets/img/4_character/3_idle_long/8.png",
        "assets/img/4_character/3_idle_long/9.png",
        "assets/img/4_character/3_idle_long/10.png",
    ];

    IMAGES_JUMP = [
        "assets/img/4_character/4_jump/1.png",
        "assets/img/4_character/4_jump/2.png",
        "assets/img/4_character/4_jump/3.png",
        "assets/img/4_character/4_jump/4.png",
        "assets/img/4_character/4_jump/5.png",
        "assets/img/4_character/4_jump/6.png",
        "assets/img/4_character/4_jump/7.png",
        "assets/img/4_character/4_jump/8.png",
        "assets/img/4_character/4_jump/9.png",
    ];

    IMAGES_HURT = [
        "assets/img/4_character/5_hurt/1.png",
        "assets/img/4_character/5_hurt/2.png",
        "assets/img/4_character/5_hurt/3.png",
    ];

    IMAGES_DEAD = [
        "assets/img/4_character/6_dead/1.png",
        "assets/img/4_character/6_dead/2.png",
        "assets/img/4_character/6_dead/3.png",
        "assets/img/4_character/6_dead/4.png",
        "assets/img/4_character/6_dead/5.png",
        "assets/img/4_character/6_dead/6.png",
        "assets/img/4_character/6_dead/7.png",
    ];

    audioWalk = AudioManager.load("assets/audio/characters/character/walk.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioJump = AudioManager.load("assets/audio/characters/character/jump.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioSnore = AudioManager.load("assets/audio/characters/character/snore.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioHurt = AudioManager.load("assets/audio/characters/character/hurt.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioDead = AudioManager.load("assets/audio/characters/character/dead.mp3", { volume: WorldConfig.VOLUME_SOUNDS });
    audioCollectBottle = AudioManager.load("assets/audio/collectables/bottle/collect.mp3", { volume: WorldConfig.VOLUME_SOUNDS })
    audioCollectCoin = AudioManager.load("assets/audio/collectables/coin/collect.mp3", { volume: WorldConfig.VOLUME_SOUNDS })
    audioDeadPlayed = false;

    constructor() {
        super(
            120,
            172,
            100,
            250
        );
        this.speedX = 10;
        this.acceleration = 2.5;
        this.offset = {
            x: 13,
            y: 97,
            width: 25,
            height: 110
        };
        this.throwableBottles = [];
        this.canThrowBottle = true;
        this.collectedBottles = 0;
        this.collectedCoins = 0;
        this.statusBarHealth = new StatusBarHealth();
        this.statusBarCoin = new StatusBarCoin();
        this.statusBarBottle = new StatusBarBottle();
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    moveLeft() {
        super.moveLeft();
        this.playAudioWalk();
    }

    moveRight() {
        super.moveRight();
        this.playAudioWalk();
    }

    jump() {
        if(!this.isDead()) {
            super.jump();
            this.speedY = 30;
            this.playAudioJump();
        }
    }

    bounce() {
        if(!this.isDead()) {
            this.speedY = 15;
        }
    }

    isAboveGround() {
        return this.y < 172;
    }

    collectCoin() {
        this.collectedCoins++;
        this.playAudioCollectCoin();
    }

    collectBottle() {
        this.collectedBottles++;
        this.playAudioCollectBottle();
    }

    throwBottle() {
        if(this.canThrowBottle && this.collectedBottles && !this.isHurt() && !this.isDead()) {
            const throwableBottle = new ThrowableBottle(this.x, this.y + 100);
            throwableBottle.isFacingOtherDirection = this.isFacingOtherDirection;
            this.throwableBottles.push(throwableBottle);
            throwableBottle.throw();
            this.collectedBottles--;
            this.statusBarBottle.setValue(this.collectedBottles);

            this.canThrowBottle = false;
            setTimeout(() => {
                this.canThrowBottle = true;
            }, 1000);
        }
    }

    animate() {
        IntervalManager.setStoppableInterval(() => {

            if(KeyboardInputManager.RIGHT && this.x < WorldConfig.WIDTH_MAX_X) {
                this.moveRight();
            }


            if(KeyboardInputManager.LEFT && this.x > 0) {
                this.moveLeft();
            }

            if(KeyboardInputManager.UP && !this.isAboveGround()) {
                this.jump();
            }

            if(KeyboardInputManager.SPACE) {
                this.throwBottle();
            }

            World.CAMERA_X = -this.x + 100;
        }, 1000 / 60);

        IntervalManager.setStoppableInterval(() => {
            if(this.isDead()) {
                this.handleDeath();
            }

            else if(this.isHurt() && !this.isDead()) {
                this.handleHurt();
            }

            else if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
            }

            else if(KeyboardInputManager.RIGHT || KeyboardInputManager.LEFT) {
                    this.playAnimation(this.IMAGES_WALK);
            }

            else if(this.isInactive()) {
                this.handleInactiveState();
            }

            else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100)
    }

    playAudioWalk() {
        if (!this.isAboveGround() && !this.isDead()) {
            this.audioManager.play(this.audioWalk);
        }
    }

    playAudioJump() {
        this.audioManager.play(this.audioJump);
    }

    playAudioCollectCoin() {
        this.audioManager.play(this.audioCollectCoin);
    }

    playAudioCollectBottle() {
        this.audioManager.play(this.audioCollectBottle);
    }

    handleInactiveState() {
        this.playAnimation(this.IMAGES_IDLE_LONG);
        this.audioManager.play(this.audioSnore);
    }

    handleHurt() {
        this.playAnimation(this.IMAGES_HURT);
        this.audioManager.play(this.audioHurt);
    }

    handleDeath() {
        this.playAnimation(this.IMAGES_DEAD);
        if(!this.audioDeadPlayed) {
            this.audioManager.play(this.audioDead);
            this.audioDeadPlayed = true;
        }

        IntervalManager.setStoppableInterval(() => {
            IntervalManager.stopAllIntervals();

            const lastImageIndex = this.IMAGES_DEAD.length - 2;
            const lastImagePath = this.IMAGES_DEAD[lastImageIndex];
            this.img = this.imgCache[lastImagePath];

            StateManager.updateState("isGameOver", true);
            StateManager.updateState("isGamePaused", true);

            DomUtils.toggleElementVisibility("end-screen-container", true);
            DomUtils.toggleElementVisibility("win-screen", false);
            DomUtils.toggleElementVisibility("lose-screen", true);

        }, 2000);
    }
}
