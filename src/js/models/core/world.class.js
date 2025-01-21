class World {
    static CAMERA_X = 0;

    static WIDTH = 720;
    static HEIGHT = 480;
    static WIDTH_MAX_X = 2200;
    static BACKGROUND_WIDTH = World.WIDTH - 1;
    static INITIAL_OFFSET = World.BACKGROUND_WIDTH * -1;
    static segmentCount = 5;
    static BACKGROUND_LAYERS = [
        ["4_fourth/1.png", "3_third/2.png", "2_second/2.png", "1_first/2.png"],
        ["4_fourth/1.png", "3_third/1.png", "2_second/1.png", "1_first/1.png"],
    ];

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.enemies = [
            ...createChicks(6),
            ...createChickens(6)
        ];
        this.backgroundObjects = createBackgroundObjects(
            World.INITIAL_OFFSET,
            World.BACKGROUND_WIDTH,
            World.BACKGROUND_LAYERS,
            World.segmentCount
        );
        this.character = new Character();
        this.chickenBig = new ChickenBig();
        this.clouds = createClouds(Cloud1, Cloud2, 5);
        this.bottles = createBottles(6);
        this.coins = createCoins(5);
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
        }, 20)
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
        if (this.chickenBig.x - this.character.x < (World.WIDTH / 3 * 2) ) {
            this.chickenBig.statusBarHealth.y = 30;
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGameElements() {
        this.ctx.translate(World.CAMERA_X, 0);
        this.addObjectsToMap(this.backgroundObjects);

        // START: MOVING ELEMENTS
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.bottles);
        this.addObjectsToMap(this.coins);

        this.ctx.translate(-World.CAMERA_X, 0);
        this.#drawFixedUIElements();
        this.ctx.translate(World.CAMERA_X, 0);

        this.addToMap(this.character);
        this.addToMap(this.chickenBig);
        this.addObjectsToMap(this.character.throwableBottles);
        // END: MOVING ELEMENTS
        this.ctx.translate(-World.CAMERA_X, 0);
    }

    #drawFixedUIElements() {
        this.addToMap(this.character.statusBarHealth);
        this.addToMap(this.character.statusBarCoin);
        this.addToMap(this.character.statusBarBottle);
        this.addToMap(this.chickenBig.statusBarHealth);
    }

    startGame() {
        this.toggleElementVisibility("start-screen-container", false);
        this.toggleElementVisibility("end-screen-container", false);
    }

    restartGame() {
        this.clearCanvas();
        this.init();
        startGame();
    }

    showEndScreen() {
        this.toggleElementVisibility("end-screen-container", true);
    }

    goToMenu() {
        this.clearCanvas();
        this.toggleElementVisibility("canvas", false);
        this.toggleElementVisibility("end-screen-container", false);
        this.toggleElementVisibility("start-screen-container", true);
    }


    toggleElementVisibility(id, isVisible) {
        const element = document.getElementById(id);
        if (element) element.classList.toggle("d-none", !isVisible);
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

function createChicks(count) {
    return Array.from({ length: count }, (_, i) => new Chick(i));
}

function createChickens(count) {
    return Array.from({ length: count }, (_, i) => new Chicken(i));
}

function createClouds(CloudType1, CloudType2, count) {
    return [
        ...Array.from({ length: count }, () => new CloudType1()),
        ...Array.from({ length: count }, () => new CloudType2()),
    ];
}

function createBackgroundObjects(initialOffset, width, layersPerSegment, segmentCount) {
    const backgroundObjects = [];
    for (let segment = 0; segment < segmentCount; segment++) {
        const offset = initialOffset + segment * width;
        const layers = layersPerSegment[segment % layersPerSegment.length];
        layers.forEach(layerPath => {
            backgroundObjects.push(new Background(offset, `assets/img/3_background/layers/${layerPath}`));
        });
    }
    return backgroundObjects;
}

function createBottles(count) {
    return Array.from({ length: count }, (_, i) => new Bottle(i));
}

function createCoins(count) {
    return Array.from({ length: count }, (_, i) => new Coin(i));
}
