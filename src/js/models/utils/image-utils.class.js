class ImageUtils {
    static flipImage(ctx, mo) {
        ctx.save();
        ctx.translate(mo.width, 0);
        ctx.scale(-1, 1);
        mo.x *= -1;
    }

    static flipImageBack(ctx, mo) {
        mo.x *= -1;
        ctx.restore();
    }
}