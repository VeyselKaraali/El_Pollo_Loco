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
     * Creates multiple bottles at randomly generated positions.
     *
     * @param {number} count - The number of bottles to create.
     * @returns {Bottle[]} An array of Bottle instances.
     */
    static createBottles(count) {
        let positions = ObjectUtilsCreation.generateBottlePositions(count, 300, 2000, 150);
        return positions.map(pos => new Bottle(pos));
    }

    /**
     * Generates an array of unique x-positions for bottles, ensuring a minimum distance between them.
     *
     * @param {number} count - The number of positions to generate.
     * @param {number} min - The minimum x-coordinate value.
     * @param {number} max - The maximum x-coordinate value.
     * @param {number} minDistance - The minimum required distance between positions.
     * @returns {number[]} A sorted array of unique x-positions.
     */
    static generateBottlePositions(count, min, max, minDistance) {
        let positions = [];
        while (positions.length < count) {
            let pos = Math.floor(Math.random() * (max - min + 1)) + min;
            if (positions.every(p => Math.abs(p - pos) >= minDistance)) {
                positions.push(pos);
            }
        }
        return positions.sort((a, b) => a - b);
    }

    /**
     * Creates an array of coin objects at randomly generated positions.
     *
     * @param {number} count - The number of coins to create.
     * @returns {Coin[]} An array of Coin instances.
     */
    static createCoins(count) {
        let positions = ObjectUtilsCreation.generateCoinPositions(count, 300, 2000, 200);
        return positions.map(pos => new Coin(pos.x, pos.y));
    }

    /**
     * Generates an array of unique positions for coins, ensuring a minimum distance between them.
     *
     * @param {number} count - The number of positions to generate.
     * @param {number} minX - The minimum x-coordinate value.
     * @param {number} maxX - The maximum x-coordinate value.
     * @param {number} minDistance - The minimum required distance between coin positions.
     * @returns {{x: number, y: number}[]} An array of objects containing x and y coordinates.
     */
    static generateCoinPositions(count, minX, maxX, minDistance) {
        let positions = [];
        while (positions.length < count) {
            let x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let y = Math.floor(Math.random() * (180 - 20 + 1)) + 20;

            if (positions.every(p => Math.abs(p.x - x) >= minDistance)) {
                positions.push({ x, y });
            }
        }
        return positions.sort((a, b) => a.x - b.x);
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