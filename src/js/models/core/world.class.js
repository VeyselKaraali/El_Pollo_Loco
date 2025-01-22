class World {
    static CAMERA_X = 0;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.enemies = [
            ...ObjectUtilsCreation.createChicks(6),
            ...ObjectUtilsCreation.createChickens(6)
        ];
        this.backgroundObjects = ObjectUtilsCreation.backgroundObjects;
        this.character = new Character();
        this.chickenBig = new ChickenBig();
        this.clouds = ObjectUtilsCreation.createClouds(Cloud1, Cloud2, 5);
        this.bottles = ObjectUtilsCreation.bottles;
        this.coins = ObjectUtilsCreation.coins;
        this.init();
        this.startGame();
    }

    init() {
        this.runGameLoop();
        this.draw();
    }

    runGameLoop() {
        IntervalManager.setStoppableInterval(() => {
            this.handleCollisions();
            this.handleCharacterNearChickenBig();
        }, 20);
    }

    draw() {
        const isGamePaused = StateManager.getState("isPaused");
        const isCharacterDead = this.character.isDead();
        const isChickenBigDead = this.chickenBig.statusBarHealth.value <= 0;

        if (!isGamePaused && !isCharacterDead && !isChickenBigDead) {
            this.clearCanvas();
            this.drawGameElements();
            requestAnimationFrame(this.draw.bind(this));
        } else if (isCharacterDead || isChickenBigDead) {
            this.showEndScreen();
        }
    }

    handleCollisions() {
        CollisionManager.enemyWithThrowableBottle(this.character, this.enemies);
        CollisionManager.chickenBigWithThrowableBottle(this.chickenBig, this.character.throwableBottles);
        CollisionManager.characterWithBottle(this.character, this.bottles);
        CollisionManager.characterWithCoin(this.character, this.coins);
        CollisionManager.characterWithEnemy(this.character, this.enemies);
    }

    handleCharacterNearChickenBig() {
        if (this.chickenBig.x - this.character.x < (WorldConfig.WIDTH / 3 * 2) ) {
            this.chickenBig.statusBarHealth.y = 30;
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGameElements() {
        this.ctx.translate(World.CAMERA_X, 0);
        MapUtils.addObjectsToMap(this.ctx, this.backgroundObjects);
        MapUtils.addObjectsToMap(this.ctx, this.clouds);
        MapUtils.addObjectsToMap(this.ctx, this.enemies);
        MapUtils.addObjectsToMap(this.ctx, this.bottles);
        MapUtils.addObjectsToMap(this.ctx, this.coins);
        this.#drawFixedUIElements();
        MapUtils.addToMap(this.ctx, this.character);
        MapUtils.addToMap(this.ctx, this.chickenBig);
        MapUtils.addObjectsToMap(this.ctx, this.character.throwableBottles);
        this.ctx.translate(-World.CAMERA_X, 0);
    }

    #drawFixedUIElements() {
        this.ctx.translate(-World.CAMERA_X, 0);
        MapUtils.addToMap(this.ctx, this.character.statusBarHealth);
        MapUtils.addToMap(this.ctx, this.character.statusBarCoin);
        MapUtils.addToMap(this.ctx, this.character.statusBarBottle);
        MapUtils.addToMap(this.ctx, this.chickenBig.statusBarHealth);
        this.ctx.translate(World.CAMERA_X, 0);
    }

    startGame() {
        DomUtils.toggleElementVisibility("start-screen-container", false);
        DomUtils.toggleElementVisibility("end-screen-container", false);
    }

    restartGame() {
        this.clearCanvas();
        this.init();
        Main.startGame();
    }

    showEndScreen() {
        DomUtils.toggleElementVisibility("end-screen-container", true);
    }

    goToMenu() {
        this.clearCanvas();
        DomUtils.toggleElementVisibility("canvas", false);
        DomUtils.toggleElementVisibility("end-screen-container", false);
        DomUtils.toggleElementVisibility("start-screen-container", true);
    }
}


