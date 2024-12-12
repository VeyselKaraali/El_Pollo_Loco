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
    statusBarEndBoss = new StatusBarEndBoss();
    throwableObjects = [];



    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.keyboard = keyboard;
        this.init();
    }

    init() {
        this.setWorld();
        this.runGameLoop();
        this.draw();
    }

    handleCharacterNearEndBoss() {
        if (this.character.x >= 2160 - 300) {
            this.statusBarEndBoss.y = 30;
        }
    }

    handleCharacterWithEnemyCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if(this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isDead()) {
                enemy.energy = 0;
                this.character.bounce();
            }

            else if (!this.character.isAboveGround() && this.character.isColliding(enemy) && !enemy.isDead()) {
                    this.character.reduceEnergy();
                    this.statusBarHealth.setValue(this.character.energy);
            }
        })
    }

    handleBottleWithEnemyCollision() {
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            this.level.enemies.forEach((enemy, enemyIndex) => {
                if (bottle.isColliding(enemy)) {
                    //this.audioBottleSplash.play().then(() => {});
                    if(enemy instanceof EndBoss) {
                        this.statusBarEndBoss.setValue(--this.statusBarEndBoss.value);
                    } else {
                        enemy.energy=0;
                    }
                }
            });
        });
    }

    handleCoinCollisions() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin) && !this.statusBarCoin.isFull()) {
                this.character.collectCoin();
                this.statusBarCoin.setValue(this.character.collectedCoins);
                this.level.coins.splice(index, 1);
            }
        });
    }

    handleBottleCollisions() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle) && !this.statusBarBottle.isFull()) {
                this.character.collectBottle();
                this.statusBarBottle.setValue(this.character.collectedBottles);
                this.level.bottles.splice(index, 1);
            }
        });
    }

    setWorld() {
        this.character.world = this;
    }

    runGameLoop() {
        if (gameInterval) {
            clearInterval(gameInterval);
        }

        gameInterval = setInterval(() => {
            this.handleBottleCollisions();
            this.handleCoinCollisions();
            this.handleBottleWithEnemyCollision();
            this.handleCharacterWithEnemyCollision();
            this.handleCharacterNearEndBoss();
            //this.checkThrowObjects();
        }, 20);
    }

    checkThrowObjects() {
        /*if (this.keyboard.SPACE && this.character.collectedBottles > 0 && !this.character.isInactive()) {
            //let isFacingOtherDirection = false;
            //let xPosition = this.character.x + 100;
            //if(this.character.isFacingOtherDirection) {
                //isFacingOtherDirection = true;
              //  xPosition = this.character.x;
            //}
            //debugger;
            const bottle = new ThrowableObject(this.character.x, this.character.y + 100, 75, 100);
            this.throwableObjects.push(bottle);
            bottle.throw();
            //this.character.throwBottle();

            //debugger;
            //this.character.throwBottle();
            this.statusBarBottle.setValue(this.character.collectedBottles);
        }*/
    }



    draw() {
        if (!isGamePaused && !this.character.isDead() && this.statusBarEndBoss.value > 0) {
            this.clearCanvas();
            this.drawGameElements();
            requestAnimationFrame(this.draw.bind(this));
        }

        if(this.character.isDead()) {
            this.showLoseScreen();
        }

        if(this.statusBarEndBoss.value <= 0 && !this.character.isDead()) {
            this.showWinScreen();
        }

    }

    showWinScreen() {
        document.getElementById('win-screen-container').classList.remove('d-none');
    }

    showLoseScreen() {
        document.getElementById('lose-screen-container').classList.remove('d-none');
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

        // START: SPACE FOR FIXED OBJECTS
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarEndBoss);
        this.ctx.translate(this.camera_x, 0);
        // END: SPACE FOR FIXED OBJECTS

        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => this.addToMap(obj));
    }

    addToMap(mo) {
        if (mo.isFacingOtherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.isFacingOtherDirection) {
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
