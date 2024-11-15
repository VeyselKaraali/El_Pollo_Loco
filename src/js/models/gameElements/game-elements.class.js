class GameElements extends DrawableObject{
    control;
    volume;
    isSoundOn = true;

    constructor() {
        super();
        //this.control = new DrawableObject(this.getImageAsHTMLImageElement("assets/img/custom/controls.png"), window.CONTROLS.X,window.CONTROLS.Y);
        //this.volumeOnSrc = "assets/img/custom/volume_on.png";
        //this.volumeOffSrc = "assets/img/custom/volume_off.png";
        //this.volume = new DrawableObject(this.getImageAsHTMLImageElement(this.volumeOffSrc), window.VOLUME.X, window.VOLUME.Y, window.VOLUME.WIDTH, window.VOLUME.HEIGHT);
    }

    draw(ctx) {
        //ctx.drawImage(this.control.img, this.control.x, this.control.y);
        //ctx.drawImage(this.volume.img, this.volume.x, this.volume.y);
    }

    toggleVolumeImage() {
        //this.isSoundOn = !this.isSoundOn;
        //this.volume.img.src = this.isSoundOn ? this.volumeOffSrc : this.volumeOnSrc;
    }
}

