class MapUtils {
    static addObjectsToMap(ctx, objects) {
        objects.forEach(obj => MapUtils.addToMap(ctx, obj));
    }

    static addToMap(ctx, mo) {
        if (mo.isFacingOtherDirection) {
            MapUtils.flipImage(ctx, mo);
        }
        mo.draw(ctx);
        mo.drawFrame(ctx);
        if (mo.isFacingOtherDirection) {
            MapUtils.flipImageBack(ctx, mo);
        }
    }

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