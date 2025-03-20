/**
 * The class represents the game world, handling all game objects and game logic.
 */
class World {
    /**
     * The current horizontal position of the camera.
     * @type {number}
     */
    static CAMERA_X = 0;

    /**
     * Creates a new instance of the game world.
     * @param {HTMLCanvasElement} canvas - The canvas element where the game will be rendered.
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.backgroundObjects = ObjectUtilsCreation.backgroundObjects;
        this.character = new Character();
        this.chickenRegular = [
            ...ObjectUtilsCreation.createChicks(6),
            ...ObjectUtilsCreation.createChickens(6)
        ];
        this.chickenBig = new ChickenBig();
        this.clouds = ObjectUtilsCreation.createClouds(Cloud1, Cloud2, 12);
        this.bottles = ObjectUtilsCreation.createBottles(6);
        this.coins = ObjectUtilsCreation.createCoins(5);
        this.init();
        DomUtils.toggleElementVisibility("start-screen-container", false);
        DomUtils.toggleElementVisibility("end-screen-container", false);
    }

    /**
     * Initializes the game by setting up background music, starting the game loop, and drawing the game.
     */
    init() {
        InitializationUtils.setupBackgroundMusic();
        this.runGameLoop();
        this.draw();
    }

    /**
     * Starts the game loop, repeatedly checking for collisions at a fixed interval.
     */
    runGameLoop() {
        IntervalManager.setStoppableInterval(() => {
            this.handleCollisions();
        }, 20);
    }

    /**
     * Clears the canvas, draws all game elements, and requests the next animation frame for continuous rendering.
     */
    draw() {
        this.clearCanvas();
        this.drawGameElements();
        requestAnimationFrame(this.draw.bind(this));
    }

    /**
     * Handles all the collision detections between the game objects.
     */
    handleCollisions() {
        CollisionManager.ChickenRegularWithThrowableBottle(this.chickenRegular, this.character.throwableBottles);
        CollisionManager.chickenBigWithThrowableBottle(this.chickenBig, this.character.throwableBottles);
        CollisionManager.characterWithBottle(this.character, this.bottles);
        CollisionManager.characterWithCoin(this.character, this.coins);
        CollisionManager.characterWithChickenRegular(this.character, this.chickenRegular);
        CollisionManager.characterWithChickenBig(this.character, this.chickenBig);
        CollisionManager.characterNearChickenBig(this.character, this.chickenBig);
    }

    /**
     * Clears the entire canvas to prepare for the next frame.
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Draws all the game elements on the canvas, including background, clouds, characters, and items.
     */
    drawGameElements() {
        this.ctx.translate(World.CAMERA_X, 0);
        MapUtils.addObjectsToMap(this.ctx, this.backgroundObjects);
        MapUtils.addObjectsToMap(this.ctx, this.clouds);
        MapUtils.addObjectsToMap(this.ctx, this.chickenRegular);
        MapUtils.addObjectsToMap(this.ctx, this.bottles);
        MapUtils.addObjectsToMap(this.ctx, this.coins);
        this.#drawFixedUIElements();
        MapUtils.addToMap(this.ctx, this.chickenBig);
        MapUtils.addToMap(this.ctx, this.character);
        MapUtils.addObjectsToMap(this.ctx, this.character.throwableBottles);
        this.ctx.translate(-World.CAMERA_X, 0);
    }

    /**
     * Draws the fixed UI elements, such as health and coin status, on the canvas.
     * @private
     */
    #drawFixedUIElements() {
        this.ctx.translate(-World.CAMERA_X, 0);
        MapUtils.addToMap(this.ctx, this.character.statusBarHealth);
        MapUtils.addToMap(this.ctx, this.character.statusBarCoin);
        MapUtils.addToMap(this.ctx, this.character.statusBarBottle);
        MapUtils.addToMap(this.ctx, this.chickenBig.statusBarHealth);
        this.ctx.translate(World.CAMERA_X, 0);
    }

    /**
     * Transitions to the main menu by hiding the game screen, stopping all intervals, and resetting the game state.
     */
    goToMenu() {
        this.clearCanvas();
        DomUtils.toggleElementVisibility("canvas", false);
        DomUtils.toggleElementVisibility("end-screen-container", false);
        DomUtils.toggleElementVisibility("start-screen-container", true);
        StateManager.updateState("hasGameStarted", false);
        IntervalManager.stopAllIntervals();
        InitializationUtils.audioBtnClick.play().then(r => {});
    }
}
