import {CONTROLS_X} from "../constants/constants";

class StartScreen extends DrawableObject{
    backgroundImg;
    controlImg;
    volumeOn;

    constructor() {
        super();
        this.backgroundImg = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/9_intro_outro_screens/start/startscreen_3.png"), 0, 0, 720, 480);
        this.controlImg = new DrawableObject(this.getImageAsHTMLImageElement("assets/icons/controls.png"), CONTROLS_X,10);
        this.volumeOn = new DrawableObject(this.getImageAsHTMLImageElement("assets/icons/volume_on.png"), 660, 10);
    }

    draw(ctx) {
        ctx.drawImage(this.backgroundImg.img, this.backgroundImg.x, this.backgroundImg.y, this.backgroundImg.width, this.backgroundImg.height);
        ctx.drawImage(this.controlImg.img, this.controlImg.x, this.controlImg.y);
        ctx.drawImage(this.volumeOn.img, this.volumeOn.x, this.volumeOn.y);
    }
}