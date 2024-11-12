class Bottle extends MovableObject {
    IMAGES_BOTTLE=[
        "assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
    ]

    width = 76;
    height = 100;
    y = 320;

    static bottlePositions = [];
    static zones = [
        { min: 300, max: 719, bottles: 2, minDistance: 250 },
        { min: 720, max: 1399, bottles: 2, minDistance: 250 },
        { min: 1400, max: 2150, bottles: 2, minDistance: 250 }
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES_BOTTLE[0]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = this.generateRandomX();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 350)
    }

    generateRandomX() {
        for (let zone of Bottle.zones) {
            // Check whether all bottles are placed in the current zone
            const currentZoneBottles = Bottle.bottlePositions.filter(
                x => x >= zone.min && x <= zone.max
            );

            if (currentZoneBottles.length < zone.bottles) {
                let x;
                let attempts = 0;
                do {
                    x = Math.random() * (zone.max - zone.min) + zone.min;
                    attempts++;
                } while (
                    attempts < 10 && // Preventing an infinite loop
                    currentZoneBottles.some(existingX => Math.abs(x - existingX) < zone.minDistance)
                    );

                Bottle.bottlePositions.push(x);
                return x;
            }
        }

        // Fallback: When all zones are filled, return a random position
        return 300 + Math.random() * (2150 - 300);
    }
}