/**
 * A utility class responsible for creating various game objects, such as background objects,
 * bottles, coins, chicks, chickens, and clouds.
 */
class ObjectUtilsCreation {
    /**
     * An array containing the background objects for the game.
     * This is generated based on the configuration settings.
     */
    static backgroundObjects = ObjectUtilsCreation.createBackgroundObjects(
        WorldConfig.INITIAL_OFFSET,
        WorldConfig.BACKGROUND_WIDTH,
        WorldConfig.BACKGROUND_LAYERS,
        WorldConfig.SEGMENT_COUNT
    );

    /**
     * Creates an array of background objects based on the provided parameters.
     * Each segment will have multiple layers of background images.
     *
     * @param {number} initialOffset - The initial offset for the background objects.
     * @param {number} width - The width of each segment in the background.
     * @param {Array} layersPerSegment - An array containing the layers of each segment.
     * @param {number} segmentCount - The total number of background segments to create.
     * @returns {Array} An array of background objects.
     */
    static createBackgroundObjects(initialOffset, width, layersPerSegment, segmentCount) {
        const backgroundObjects = [];
        for (let segment = 0; segment < segmentCount; segment++) {
            const offset = initialOffset + segment * width;
            const layers = layersPerSegment[segment % layersPerSegment.length];
            layers.forEach(layerPath => {
                backgroundObjects.push(new Background(offset, `assets/img/3_background/layers/${layerPath}`));
            });
        }
        return backgroundObjects;
    }

    /**
     * Creates an array of bottle objects.
     *
     * @param {number} count - The number of bottles to create.
     * @returns {Array} An array of bottle objects.
     */
    static createBottles(count) {
        return Array.from({ length: count }, (_, i) => new Bottle(i));
    }

    /**
     * Creates an array of coin objects.
     *
     * @param {number} count - The number of coins to create.
     * @returns {Array} An array of coin objects.
     */
    static createCoins(count) {
        return Array.from({ length: count }, (_, i) => new Coin(i));
    }

    /**
     * Creates an array of chick objects.
     *
     * @param {number} count - The number of chicks to create.
     * @returns {Array} An array of chick objects.
     */
    static createChicks(count) {
        return Array.from({ length: count }, (_, i) => new Chick(i));
    }

    /**
     * Creates an array of chicken objects.
     *
     * @param {number} count - The number of chickens to create.
     * @returns {Array} An array of chicken objects.
     */
    static createChickens(count) {
        return Array.from({ length: count }, (_, i) => new Chicken(i));
    }

    /**
     * Creates an array of cloud objects, consisting of two types of clouds.
     * The clouds are spaced evenly across the world width.
     *
     * @param {Function} CloudType1 - The constructor for the first type of cloud.
     * @param {Function} CloudType2 - The constructor for the second type of cloud.
     * @param {number} count - The number of cloud pairs to create.
     * @returns {Array} An array of cloud objects.
     */
    static createClouds(CloudType1, CloudType2, count) {
        const clouds = [];
        const worldMinX = -WorldConfig.WIDTH;
        const worldMaxX = WorldConfig.SEGMENT_COUNT * WorldConfig.WIDTH;
        const worldWidth = worldMaxX - worldMinX;
        const spacing = worldWidth / count;

        for (let i = 0; i < count; i++) {
            let cloud1 = new CloudType1();
            let cloud2 = new CloudType2();

            cloud1.x = worldMinX + i * spacing + Math.random() * 100;
            cloud2.x = worldMinX + i * spacing + Math.random() * 100;

            clouds.push(cloud1, cloud2);
        }
        return clouds;
    }
}