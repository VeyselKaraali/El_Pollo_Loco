class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusBarHealth();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    statusBarEndboss = new StatusBarEndboss();
    throwableObjects = [];
    startScreen = new StartScreen();
    gameElements = new GameElements();

    isListenerAdded = false;
    hasGameStarted = true;
    backgroundMusic = new Audio("assets/audio/bg_2.mp3");
    collectedBottleSound = new Audio("assets/audio/bottle_collect.mp3")
    collectedCoinSound = new Audio("assets/audio/coin_collect.mp3")

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.init();
    }

    init() {
        this.setWorld();
        this.runGameLoop();
        this.addClickListener();
        this.draw();

        this.backgroundMusic.addEventListener('ended', () => {
            this.backgroundMusic.volume = 0.05;
            this.backgroundMusic.currentTime = 0;
            this.backgroundMusic.play().then(r => {});
        });

    }

    /*checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
    }*/

    handleCharacterWithEnemyCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if(this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isDead()) {
                enemy.energy = 0;
                console.log(enemy.energy);
                //this.character.bounce();
                // Sound
            }

            if(!this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isDead()) {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
            }
        })
    }

    handleBottleWithEndbossCollision() {
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            this.level.enemies.forEach((enemy, enemyIndex) => {
                if (bottle.isColliding(enemy)) {
                    if(enemy instanceof Endboss) {
                        this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentage - 20);
                    }
                }
            });
        });
    }

    handleCoinCollisions() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin) && !this.statusBarCoin.isFull()) {
                this.collectedCoinSound.play();
                this.statusBarCoin.setPercentage(this.character.collectCoin(20));
                this.level.coins.splice(index, 1);
            }
        });
    }

    handleBottleCollisions() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle) && !this.statusBarBottle.isFull()) {
                this.collectedBottleSound.play();
                this.statusBarBottle.setPercentage(this.character.collectBottle(20));
                this.level.bottles.splice(index, 1);
            }
        });
    }

    addClickListener() {
        if (!this.isListenerAdded) {
            window.addEventListener("click", this.handleClick.bind(this));
            this.isListenerAdded = true;
        }
    }

    handleClick(e) {
        const clickPosition = this.getRelativeClickPosition(e);
        if (this.isClickOnElement(clickPosition, window.VOLUME)) {
            this.toggleBackgroundMusic();
        } else if (this.isClickOnElement(clickPosition, window.START_BTN)) {
            this.startGame();
        }
    }

    getRelativeClickPosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    isClickOnElement({ x, y }, element) {
        return (
            x >= element.X && x <= element.X + element.WIDTH &&
            y >= element.Y && y <= element.Y + element.HEIGHT
        );
    }

    toggleBackgroundMusic() {
        this.gameElements.toggleVolumeImage();
        this.gameElements.draw(this.ctx);
        if (this.gameElements.isSoundOn) {
            this.backgroundMusic.pause();
        } else {
            this.backgroundMusic.volume = 0.05;
            this.backgroundMusic.play();
        }
    }

    startGame() {
        this.hasGameStarted = true;
    }

    setWorld() {
        this.character.world = this;
    }

    runGameLoop() {
        setStoppableInterval(() => {
            //this.checkCollisions();
            this.handleBottleCollisions();
            this.handleCoinCollisions();
            this.handleBottleWithEndbossCollision();
            this.handleCharacterWithEnemyCollision();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE && this.character.collectedBottles > 0) {
            let otherDirection = false;
            let xPosition = this.character.x + 100;
            if(this.character.otherDirection) {
                otherDirection = true;
                xPosition = this.character.x;
            }
            const bottle = new ThrowableObject(xPosition, this.character.y + 100, otherDirection);
            this.throwableObjects.push(bottle);
            this.statusBarBottle.setPercentage(this.character.collectBottle(-20));
        }
    }



    draw() {
        this.clearCanvas();
        if (this.hasGameStarted) {
            this.drawGameElements();
        } else {
            this.startScreen.draw(this.ctx);
        }
        this.gameElements.draw(this.ctx);
        requestAnimationFrame(this.draw.bind(this));
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGameElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        // Moving elements
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);

        // SPACE FOR FIXED OBJECTS
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0);
        // ===========================


        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => this.addToMap(obj));
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x *= -1;
    }

    flipImageBack(mo) {
        mo.x *= -1;
        this.ctx.restore();
    }
}
