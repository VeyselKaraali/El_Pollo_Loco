class ObjectUtils {
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
}

