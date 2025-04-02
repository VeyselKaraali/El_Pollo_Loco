/**
 * A utility class that provides methods for manipulating images, such as flipping an image horizontally.
 */
class ImageUtils {
    /**
     * Flips an image horizontally on the given canvas context.
     * This method uses the canvas context's `translate` and `scale` methods to perform the horizontal flip.
     *
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to apply the transformation on.
     * @param {Object} mo - The object representing the image or drawable, which must have `x` (position) and `width` properties.
     */
    static flipImage(ctx, mo) {
        ctx.save();
        ctx.translate(mo.width, 0);
        ctx.scale(-1, 1);
        mo.x *= -1;
    }

    /**
     * Restores the canvas context after an image has been flipped.
     * This method undoes the transformation applied by `flipImage` by restoring the canvas state.
     *
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to restore.
     * @param {Object} mo - The object representing the image or drawable, which must have `x` (position) properties.
     */
    static flipImageBack(ctx, mo) {
        mo.x *= -1;
        ctx.restore();
    }
}
