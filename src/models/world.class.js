class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];
    startScreen = new StartScreen();

    isListenerAdded = false;


    hasGameStarted = false;
    backgroundMusic = new Audio("assets/audio/bg_1.mp3");

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

        this.addClickListener();
    }


    addClickListener() {
        if (!this.isListenerAdded) {
            window.addEventListener("click", (e) => {
                const rect = this.canvas.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                // Prüfen, ob der Klick auf das `volume`-Bild zielt
                if (
                    clickX >= window.VOLUME.X &&
                    clickX <= window.VOLUME.X + window.VOLUME.WIDTH &&
                    clickY >= window.VOLUME.Y &&
                    clickY <= window.VOLUME.Y + window.VOLUME.HEIGHT
                ) {
                    console.log("Klick auf Volume-Bild");
                    this.startScreen.toggleVolumeImage(); // Bild toggeln
                    this.startScreen.draw(this.ctx); // Canvas neu zeichnen
                    if(this.startScreen.isSoundOn) {
                        this.backgroundMusic.pause();
                    } else {
                        this.backgroundMusic.play();
                    }
                }

                if (
                    clickX >= window.START_BTN.X &&
                    clickX <= window.START_BTN.X + window.START_BTN.WIDTH &&
                    clickY >= window.START_BTN.Y &&
                    clickY <= window.START_BTN.Y + window.START_BTN.HEIGHT
                ) {
                    console.log("Klick auf Start-Game-Bild");
                    this.hasGameStarted = true;
                }
            });
            this.isListenerAdded = true;  // Setze das Flag, dass der Listener hinzugefügt wurde
        }
    }

    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(()=> {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if(this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        })
    }

    draw() {
        this.clearCanvas();
        if(this.hasGameStarted) {
            this.drawGame();
        } else {
            this.drawStartScreen();
        }

        // Draw wird immer wieder aufgerufen
        requestAnimationFrame(this.draw.bind(this));
    }



    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawStartScreen() {

        this.startScreen.draw(this.ctx);
    }

    drawGame() {
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        // ***** START: SPACE FOR FIXED OBJECTS *****
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        // ***** END: SPACE FOR FIXED OBJECTS *****

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        })
    }
    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx)

        // TODO Remove drawFrame to remove rectangles
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
