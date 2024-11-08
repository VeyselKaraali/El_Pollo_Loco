class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusBarHealth();
    throwableObjects = [];
    startScreen = new StartScreen();
    gameElements = new GameElements();

    isListenerAdded = false;
    hasGameStarted = false;
    backgroundMusic = new Audio("assets/audio/bg_1.mp3");

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
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            const bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
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
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        // SPACE FOR FIXED OBJECTS
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.ctx.translate(this.camera_x, 0);

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
