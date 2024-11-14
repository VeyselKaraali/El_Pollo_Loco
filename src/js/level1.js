const level1 = new Level(
    [
        ...Array(6).fill().map((_, i) => new Chick(i)),

        ...Array(6).fill().map((_, i) => new Chicken(i)),

        new Endboss(),
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject("assets/img/5_background/layers/air.png", -719),
        new BackgroundObject("assets/img/5_background/layers/3_third_layer/2.png", -719),
        new BackgroundObject("assets/img/5_background/layers/2_second_layer/2.png", -719),
        new BackgroundObject("assets/img/5_background/layers/1_first_layer/2.png", -719),

        new BackgroundObject("assets/img/5_background/layers/air.png", 0),
        new BackgroundObject("assets/img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("assets/img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("assets/img/5_background/layers/1_first_layer/1.png", 0),

        new BackgroundObject("assets/img/5_background/layers/air.png", 719),
        new BackgroundObject("assets/img/5_background/layers/3_third_layer/2.png", 719),
        new BackgroundObject("assets/img/5_background/layers/2_second_layer/2.png", 719),
        new BackgroundObject("assets/img/5_background/layers/1_first_layer/2.png", 719),

        new BackgroundObject("assets/img/5_background/layers/air.png", 719*2),
        new BackgroundObject("assets/img/5_background/layers/3_third_layer/1.png", 719*2),
        new BackgroundObject("assets/img/5_background/layers/2_second_layer/1.png", 719*2),
        new BackgroundObject("assets/img/5_background/layers/1_first_layer/1.png", 719*2),

        new BackgroundObject("assets/img/5_background/layers/air.png", 719*3),
        new BackgroundObject("assets/img/5_background/layers/3_third_layer/2.png", 719*3),
        new BackgroundObject("assets/img/5_background/layers/2_second_layer/2.png", 719*3),
        new BackgroundObject("assets/img/5_background/layers/1_first_layer/2.png", 719*3),
    ],
    [
        ...Array(6).fill().map((_, i) => new Bottle(i)),
    ],
    [
        ...Array(5).fill().map((_, i) => new Coin(i)),
    ]
)