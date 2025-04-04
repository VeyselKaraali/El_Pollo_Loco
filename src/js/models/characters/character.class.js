/**
 * Character class representing a character in the game.
 * Inherits from MovableObject and handles animations, movements, and interactions such as collecting items, jumping, and dying.
 */
class Character extends MovableObject {
    /**
     * Images for the character's walking animation.
     * @type {string[]}
     */
    IMAGES_WALK = [
        "assets/img/4_character/1_walk/1.png",
        "assets/img/4_character/1_walk/2.png",
        "assets/img/4_character/1_walk/3.png",
        "assets/img/4_character/1_walk/4.png",
        "assets/img/4_character/1_walk/5.png",
        "assets/img/4_character/1_walk/6.png",
    ];

    /**
     * Images for the character's idle animation.
     * @type {string[]}
     */
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

    /**
     * Images for the character's long idle animation.
     * @type {string[]}
     */
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

    /**
     * Images for the character's jump animation.
     * @type {string[]}
     */
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

    /**
     * Images for the character's hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        "assets/img/4_character/5_hurt/1.png",
        "assets/img/4_character/5_hurt/2.png",
        "assets/img/4_character/5_hurt/3.png",
    ];

    /**
     * Images for the character's dead animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        "assets/img/4_character/6_dead/1.png",
        "assets/img/4_character/6_dead/2.png",
        "assets/img/4_character/6_dead/3.png",
        "assets/img/4_character/6_dead/4.png",
        "assets/img/4_character/6_dead/5.png",
        "assets/img/4_character/6_dead/6.png",
    ];

    /**
     * Audio for the character's walk sound.
     * @type {Audio}
     */
    audioWalk = AudioManager.load("assets/audio/characters/character/walk.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for the character's jump sound.
     * @type {Audio}
     */
    audioJump = AudioManager.load("assets/audio/characters/character/jump.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for the character's snore sound when idle.
     * @type {Audio}
     */
    audioSnore = AudioManager.load("assets/audio/characters/character/snore.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for the character's hurt sound.
     * @type {Audio}
     */
    audioHurt = AudioManager.load("assets/audio/characters/character/hurt.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for the character's death sound.
     * @type {Audio}
     */
    audioDead = AudioManager.load("assets/audio/characters/character/dead.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for collecting a bottle.
     * @type {Audio}
     */
    audioCollectBottle = AudioManager.load("assets/audio/collectables/bottle/collect.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Audio for collecting a coin.
     * @type {Audio}
     */
    audioCollectCoin = AudioManager.load("assets/audio/collectables/coin/collect.mp3", { volume: WorldConfig.VOLUME_SOUNDS });

    /**
     * Flag to track if death audio has been played.
     * @type {boolean}
     */
    audioDeadPlayed = false;

    /**
     * Creates an instance of the character.
     */
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
            top: 110,
            right: 30,
            bottom: 13,
            left: 20
        };
        this.throwableBottles = [];
        this.canThrowBottle = true;
        this.collectedBottles = 0;
        this.collectedCoins = 0;
        this.jumpCounter = 0;
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

    /**
     * Moves the character to the left and plays walking audio.
     */
    moveLeft() {
        super.moveLeft();
        this.playAudioWalk();
    }

    /**
     * Moves the character to the right and plays walking audio.
     */
    moveRight() {
        super.moveRight();
        this.playAudioWalk();
    }

    /**
     * Makes the character jump if not dead.
     */
    jump() {
        if (!this.isDead()) {
            super.jump();
            this.speedY = 30;
            this.handleJumpAnimation();
            this.playAudioJump();
        }
    }

    /**
     * Makes the character bounce if not dead.
     */
    bounce() {
        if (!this.isDead()) {
            this.speedY = 15;
        }
    }

    /**
     * Increases the number of collected coins and plays the collection sound.
     */
    collectCoin() {
        this.collectedCoins++;
        this.playAudioCollectCoin();
    }

    /**
     * Increases the number of collected bottles and plays the collection sound.
     */
    collectBottle() {
        this.collectedBottles++;
        this.playAudioCollectBottle();
    }

    /**
     * Throws a bottle if the character can throw one.
     */
    throwBottle() {
        if (this.canThrowBottle && this.collectedBottles && !this.isHurt() && !this.isDead()) {
            const throwableBottle = new ThrowableBottle(this.x, this.y + 100);
            throwableBottle.isFacingOtherDirection = this.isFacingOtherDirection;
            this.throwableBottles.push(throwableBottle);
            throwableBottle.throw();
            this.collectedBottles--;
            this.statusBarBottle.setValue(this.collectedBottles);
            this.lastActivityTime = Date.now();

            this.canThrowBottle = false;
            setTimeout(() => {
                this.canThrowBottle = true;
            }, 1000);
        }
    }

    /**
     * Handles the animation of the character, switching between walk, idle, jump, and death states.
     */
    animate() {
        IntervalManager.setStoppableInterval(() => {
            if (KeyboardInputManager.RIGHT && this.x < WorldConfig.WIDTH_MAX_X) this.moveRight();
            if (KeyboardInputManager.LEFT && this.x > 0) this.moveLeft();
            if (KeyboardInputManager.UP && !this.isAboveGround()) this.jump();
            if (KeyboardInputManager.SPACE) this.throwBottle();
            World.CAMERA_X = -this.x + 100;
        }, 1000 / 60);

        IntervalManager.setStoppableInterval(() => {
            if (!this.isAboveGround()) this.jumpCounter = 0;
            if (this.isDead()) this.handleDeath();
            else if (this.isHurt() && !this.isDead()) this.handleHurt();
            else if (this.isAboveGround() && this.jumpCounter < this.IMAGES_JUMP.length) this.handleJumpAnimation();
            else if (KeyboardInputManager.RIGHT || KeyboardInputManager.LEFT) this.playAnimation(this.IMAGES_WALK);
            else if (this.isInactive()) this.handleInactiveState();
            else this.playAnimation(this.IMAGES_IDLE);
        }, 100);
    }

    /**
     * Plays the walking sound when the character is on the ground and not dead.
     */
    playAudioWalk() {
        if (!this.isAboveGround() && !this.isDead()) {
            this.audioManager.play(this.audioWalk);
        }
    }

    /**
     * Plays the jump sound when the character jumps.
     */
    playAudioJump() {
        this.audioManager.play(this.audioJump);
    }

    /**
     * Plays the coin collection sound.
     */
    playAudioCollectCoin() {
        this.audioManager.play(this.audioCollectCoin);
    }

    /**
     * Plays the bottle collection sound.
     */
    playAudioCollectBottle() {
        this.audioManager.play(this.audioCollectBottle);
    }

    /**
     * Handles the character's idle state with a long idle animation and snoring sound.
     */
    handleInactiveState() {
        this.playAnimation(this.IMAGES_IDLE_LONG);
        this.audioManager.play(this.audioSnore);
    }

    /**
     * Handles the jump animation by updating the current image and incrementing the jump counter.
     * Ensures that the animation starts from the first frame when the jump begins.
     */
    handleJumpAnimation() {
        if(this.jumpCounter === 0) {
            this.currentImage = 0;
        }
        this.playAnimation(this.IMAGES_JUMP);
        this.jumpCounter++;
    }

    /**
     * Handles the character's hurt state with a hurt animation and sound.
     */
    handleHurt() {
        this.playAnimation(this.IMAGES_HURT);
        this.audioManager.play(this.audioHurt);
    }

    /**
     * Handles the character's death state with a death animation, sound, and end screen display.
     */
    handleDeath() {
        this.playAnimation(this.IMAGES_DEAD);
        this.playDeathAudio();
        this.showEndScreenAfterDelay();
    }

    /**
     * Plays the death sound if it hasn't been played yet.
     */
    playDeathAudio() {
        if (!this.audioDeadPlayed) {
            this.audioManager.play(this.audioDead);
            this.audioDeadPlayed = true;
        }
    }

    /**
     * Shows the end screen after a short delay.
     */
    showEndScreenAfterDelay() {
        IntervalManager.setStoppableInterval(() => {
            IntervalManager.stopAllIntervals();
            this.img = this.getLastImage(this.IMAGES_DEAD);
            StateManager.updateState("isGameOver", true);
            DomUtils.showEndScreen(true, false, true);
            DomUtils.updateMobileButtonsVisibility();
        }, 2000);
    }
}