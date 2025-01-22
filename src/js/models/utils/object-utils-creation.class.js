class ObjectUtilsCreation {
    static backgroundObjects= ObjectUtils.createBackgroundObjects(
        WorldConfig.INITIAL_OFFSET,
        WorldConfig.BACKGROUND_WIDTH,
        WorldConfig.BACKGROUND_LAYERS,
        WorldConfig.SEGMENT_COUNT);
    static bottles = ObjectUtils.createBottles(6);
    static coins = ObjectUtils.createCoins(5);
}