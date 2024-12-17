const BACKGROUND_WIDTH = CANVAS.WIDTH - 1;
const INITIAL_OFFSET = BACKGROUND_WIDTH * -1;
const segmentCount = 5;

const BACKGROUND_LAYERS = [
    ["4_fourth/1.png", "3_third/2.png", "2_second/2.png", "1_first/2.png"],
    ["4_fourth/1.png", "3_third/1.png", "2_second/1.png", "1_first/1.png"],
];

function createChicks(count) {
    return Array.from({ length: count }, (_, i) => new Chick(i));
}

function createChickens(count) {
    return Array.from({ length: count }, (_, i) => new Chicken(i));
}

function createClouds(CloudType1, CloudType2, count) {
    return [
        ...Array.from({ length: count }, () => new CloudType1()),
        ...Array.from({ length: count }, () => new CloudType2()),
    ];
}

function createBackgroundObjects(initialOffset, width, layersPerSegment, segmentCount) {
    const backgroundObjects = [];
    for (let segment = 0; segment < segmentCount; segment++) {
        const offset = initialOffset + segment * width;
        const layers = layersPerSegment[segment % layersPerSegment.length];
        layers.forEach(layerPath => {
            backgroundObjects.push(new BackgroundObject(offset, `assets/img/3_background/layers/${layerPath}`));
        });
    }
    return backgroundObjects;
}

function createBottles(count) {
    return Array.from({ length: count }, (_, i) => new Bottle(i));
}

function createCoins(count) {
    return Array.from({ length: count }, (_, i) => new Coin(i));
}

const level1 = new Level(
    [
        ...createChicks(6),
        ...createChickens(6)
    ],
    createClouds(Cloud1, Cloud2, 5),
    createBackgroundObjects(INITIAL_OFFSET, BACKGROUND_WIDTH, BACKGROUND_LAYERS, segmentCount),
    createBottles(6),
    createCoins(5)
);
