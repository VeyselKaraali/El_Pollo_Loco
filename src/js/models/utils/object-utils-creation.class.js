class ObjectUtilsCreation {
    static backgroundObjects= ObjectUtilsCreation.createBackgroundObjects(
        WorldConfig.INITIAL_OFFSET,
        WorldConfig.BACKGROUND_WIDTH,
        WorldConfig.BACKGROUND_LAYERS,
        WorldConfig.SEGMENT_COUNT);

    static bottles = ObjectUtilsCreation.createBottles(6);
    static coins = ObjectUtilsCreation.createCoins(5);

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
        return [
            ...Array.from({ length: count }, () => new CloudType1()),
            ...Array.from({ length: count }, () => new CloudType2()),
        ];
    }
}