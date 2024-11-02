class ThrowableObject extends MovableObject {
    constructor(x, y) {
        super().loadImage("assets/img/7_statusbars/3_icons/icon_salsa_bottle.png");
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 100;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x +=10;
        }, 25);
    }
}