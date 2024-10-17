class MovableObject {
    x = 120;
    y = 200;
    width = 100;
    height = 250;
    img;
    imgCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

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

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }

    moveRight() {

    }
}
