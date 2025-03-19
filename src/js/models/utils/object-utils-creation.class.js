class ObjectUtilsCreation {
    static backgroundObjects= ObjectUtilsCreation.createBackgroundObjects(
        WorldConfig.INITIAL_OFFSET,
        WorldConfig.BACKGROUND_WIDTH,
        WorldConfig.BACKGROUND_LAYERS,
        WorldConfig.SEGMENT_COUNT);

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

    static createBottles(count) {
        return Array.from({ length: count }, (_, i) => new Bottle(i));
    }

    static createCoins(count) {
        return Array.from({ length: count }, (_, i) => new Coin(i));
    }

    static createChicks(count) {
        return Array.from({ length: count }, (_, i) => new Chick(i));
    }

    static createChickens(count) {
        return Array.from({ length: count }, (_, i) => new Chicken(i));
    }

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