/**
 * Configuration class for game world settings.
 * Defines global constants for world dimensions, background settings, and audio configurations.
 */
class WorldConfig {
    /**
     * Enables or disables debug mode.
     * @constant {boolean}
     */
    static DEBUG_MODE = false;

    /**
     * The number of segments that divide the world.
     * @constant {number}
     */
    static SEGMENT_COUNT = 6;

    /**
     * The width of the game world.
     * @constant {number}
     */
    static WIDTH = 720;

    /**
     * The height of the game world.
     * @constant {number}
     */
    static HEIGHT = 480;

    /**
     * The maximum x-coordinate for the game world, determining the rightmost boundary.
     * @constant {number}
     */
    static WIDTH_MAX_X = 2500;

    /**
     * The background width.
     * @constant {number}
     */
    static BACKGROUND_WIDTH = WorldConfig.WIDTH - 1;

    /**
     * The initial offset for the background when rendering it.
     * @constant {number}
     */
    static INITIAL_OFFSET = WorldConfig.BACKGROUND_WIDTH * -1;

    /**
     * Array of background layers used in the game, each containing multiple image paths.
     * @constant {string[][]}
     */
    static BACKGROUND_LAYERS = [
        ["4_fourth/1.png", "3_third/2.png", "2_second/2.png", "1_first/2.png"],
        ["4_fourth/1.png", "3_third/1.png", "2_second/1.png", "1_first/1.png"],
    ];

    /**
     * Volume level for background music (0.0 - 1.0).
     * @constant {number}
     */
    static VOLUME_BACKGROUND_MUSIC = 0.05;

    /**
     * Volume level for sound effects (0.0 - 1.0).
     * @constant {number}
     */
    static VOLUME_SOUNDS = 0.05;
}