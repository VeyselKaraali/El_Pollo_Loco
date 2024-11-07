class StartScreen extends DrawableObject{
    startScreen;
    control;
    volume;
    startBtn;

    isSoundOn = true;

    constructor() {
        super();
        this.startScreen = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/9_intro_outro_screens/start/startscreen_3.png"), window.CANVAS.X, window.CANVAS.Y, window.CANVAS.WIDTH, window.CANVAS.HEIGHT);
        this.control = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/controls.png"), window.CONTROLS.X,window.CONTROLS.Y);
        this.startBtn = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/start_game.png"), window.START_BTN.X, window.START_BTN.Y, window.START_BTN.WIDTH, window.START_BTN.HEIGHT);

        this.volumeOnSrc = "assets/img/custom/volume_on.png";
        this.volumeOffSrc = "assets/img/custom/volume_off.png";
        this.volume = new DrawableObject(this.getImageAsHTMLImageElement(this.volumeOffSrc), window.VOLUME.X, window.VOLUME.Y, window.VOLUME.WIDTH, window.VOLUME.HEIGHT);
    }

    draw(ctx) {
        ctx.drawImage(this.startScreen.img, this.startScreen.x, this.startScreen.y, this.startScreen.width, this.startScreen.height);
        ctx.drawImage(this.control.img, this.control.x, this.control.y);
        ctx.drawImage(this.volume.img, this.volume.x, this.volume.y);
        ctx.drawImage(this.startBtn.img, this.startBtn.x, this.startBtn.y);
    }

    toggleVolumeImage() {
        this.isSoundOn = !this.isSoundOn;
        this.volume.img.src = this.isSoundOn ? this.volumeOffSrc : this.volumeOnSrc;
    }
}

