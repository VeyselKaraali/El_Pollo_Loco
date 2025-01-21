class MapUtils {
    static addObjectsToMap(ctx, objects) {
        objects.forEach(obj => MapUtils.addToMap(ctx, obj));
    }

    static addToMap(ctx, mo) {
        if (mo.isFacingOtherDirection) {
            ImageUtils.flipImage(ctx, mo);
        }
        mo.draw(ctx);
        mo.drawFrame(ctx);
        if (mo.isFacingOtherDirection) {
            ImageUtils.flipImageBack(ctx, mo);
        }
    }
}