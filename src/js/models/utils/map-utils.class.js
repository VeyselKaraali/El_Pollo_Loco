/**
 * A utility class responsible for handling map-related operations,
 * such as adding objects to the map and drawing them on the canvas.
 */
class MapUtils {
    /**
     * Adds multiple objects to the map by drawing them on the provided canvas context.
     * Each object will be drawn based on its properties and orientation.
     *
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
     * @param {Array} objects - The list of objects to add to the map.
     */
    static addObjectsToMap(ctx, objects) {
        objects.forEach(obj => MapUtils.addToMap(ctx, obj));
    }

    static addToMap(ctx, mo) {
        if (mo.isFacingOtherDirection) {
            ImageUtils.flipImage(ctx, mo);
        }
        mo.draw(ctx);
        if (WorldConfig.DEBUG_MODE) {
            mo.drawFrame(ctx);
        }
        if (mo.isFacingOtherDirection) {
            ImageUtils.flipImageBack(ctx, mo);
        }
    }
}