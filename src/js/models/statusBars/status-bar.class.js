class StatusBar extends DrawableObject {
    IMAGES = [];
    value = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setValue(0);
    }

    setValue(value) {
        this.value = value;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imgCache[path];
    }

    isFull() {
        return this.value === 5;
    }

    resolveImageIndex() {
        if(this.value >= 5) {
            return 5;
        } else if(this.value >= 4) {
            return 4;
        } else if(this.value >= 3) {
            return 3;
        } else if(this.value >= 2) {
            return 2;
        } else if(this.value >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}

