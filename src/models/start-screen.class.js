class StartScreen extends DrawableObject{
    startScreen;
    startBtn;

    constructor() {
        super();
        this.startScreen = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/9_intro_outro_screens/start/startscreen_3.png"), window.CANVAS.X, window.CANVAS.Y, window.CANVAS.WIDTH, window.CANVAS.HEIGHT);
        this.startBtn = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/start_game.png"), window.START_BTN.X, window.START_BTN.Y, window.START_BTN.WIDTH, window.START_BTN.HEIGHT);
    }

    draw(ctx) {
        ctx.drawImage(this.startScreen.img, this.startScreen.x, this.startScreen.y, this.startScreen.width, this.startScreen.height);
        ctx.drawImage(this.startBtn.img, this.startBtn.x, this.startBtn.y);
    }
}

