class WorldConfig {
    static WIDTH= 720;
    static HEIGHT = 480;
    static WIDTH_MAX_X = 2200;
    static BACKGROUND_WIDTH = WorldConfig.WIDTH - 1;
    static INITIAL_OFFSET = WorldConfig.BACKGROUND_WIDTH * -1;
    static SEGMENT_COUNT = 5;
    static BACKGROUND_LAYERS = [
        ["4_fourth/1.png", "3_third/2.png", "2_second/2.png", "1_first/2.png"],
        ["4_fourth/1.png", "3_third/1.png", "2_second/1.png", "1_first/1.png"],
    ];
}