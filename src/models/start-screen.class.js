class StartScreen extends DrawableObject{
    backgroundImg;
    controlImg;
    help;
    volumeOn;
    fullscreen

    constructor() {
        super();
        this.backgroundImg = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/9_intro_outro_screens/start/startscreen_3.png"), window.CANVAS.X, window.CANVAS.Y, window.CANVAS.WIDTH, window.CANVAS.HEIGHT);
        this.controlImg = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/controls.png"), window.CONTROLS.X,window.CONTROLS.Y);
        this.help = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/help.png"), window.HELP.X, window.HELP.Y);
        this.volumeOn = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/volume_on.png"), window.VOLUME.X, window.VOLUME.Y);
        this.fullscreen = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/fullscreen.png"), window.FULLSCREEN.X, window.FULLSCREEN.Y);
    }

    draw(ctx) {
        ctx.drawImage(this.backgroundImg.img, this.backgroundImg.x, this.backgroundImg.y, this.backgroundImg.width, this.backgroundImg.height);
        ctx.drawImage(this.controlImg.img, this.controlImg.x, this.controlImg.y);
        ctx.drawImage(this.help.img, this.help.x, this.help.y);
        ctx.drawImage(this.volumeOn.img, this.volumeOn.x, this.volumeOn.y);
        ctx.drawImage(this.fullscreen.img, this.fullscreen.x, this.fullscreen.y);
    }
}