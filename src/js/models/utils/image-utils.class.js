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
        ctx.save();  // Save the current canvas state to restore later
        ctx.translate(mo.width, 0);  // Translate the context to the image width
        ctx.scale(-1, 1);  // Flip the context horizontally
        mo.x *= -1;  // Update the position of the image object to reflect the flip
    }

    /**
     * Restores the canvas context after an image has been flipped.
     * This method undoes the transformation applied by `flipImage` by restoring the canvas state.
     *
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to restore.
     * @param {Object} mo - The object representing the image or drawable, which must have `x` (position) properties.
     */
    static flipImageBack(ctx, mo) {
        mo.x *= -1;  // Revert the position of the image object to its original state
        ctx.restore();  // Restore the previous canvas state
    }
}
