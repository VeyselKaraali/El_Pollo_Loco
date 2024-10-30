class DrawableObject {
    img;
    imgCache = {};
    currentImage = 0;
    x = 120;
    y = 200;
    width = 100;
    height = 250;

    loadImage(path) {
        this.img = new Image()
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(paths) {
        paths.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        })
    }
}