class DrawableObject {
    img;
    x = 120;
    y = 200;
    width = 100;
    height = 250;
    imgCache = {};
    currentImage = 0;

    constructor(img, x, y, width, height) {
        this.img = img;
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
        paths.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        })
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