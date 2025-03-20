/**
 * Configuration class for game world settings.
 */
class WorldConfig {
    // The number of segments that divide the world
    static SEGMENT_COUNT = 6;

    // The width of the game world
    static WIDTH = 720;

    // The height of the game world
    static HEIGHT = 480;

    // The maximum x-coordinate for the game world, determining the rightmost boundary of the world
    static WIDTH_MAX_X = 2500;

    // The background width
    static BACKGROUND_WIDTH = WorldConfig.WIDTH - 1;

    // The initial offset for the background when rendering it
    static INITIAL_OFFSET = WorldConfig.BACKGROUND_WIDTH * -1;

    // Array of background layers to use in the game, with images for each layer
    static BACKGROUND_LAYERS = [
        ["4_fourth/1.png", "3_third/2.png", "2_second/2.png", "1_first/2.png"],
        ["4_fourth/1.png", "3_third/1.png", "2_second/1.png", "1_first/1.png"],
    ];

    // The volume for background music
    static VOLUME_BACKGROUND_MUSIC = 0.025;

    // The volume for sound effects
    static VOLUME_SOUNDS = 0.05;
}
