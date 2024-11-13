class DrawableObject {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    img;
    imgCache = {};
    currentImage = 0;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getImageAsHTMLImageElement(path) {
        let img = new Image();
        img.src = path;
        return img;
    }

    loadImage(path) {
        this.img = new Image()
        this.img.src = path;
    }

    loadImages(paths) {
        paths.forEach((path, index) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;

            if (index === 0) {
                this.img = img;
            }
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof Bottle || this instanceof Coin){
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}