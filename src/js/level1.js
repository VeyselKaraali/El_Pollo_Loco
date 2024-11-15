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
        new BackgroundObject("assets/img/3_background/layers/4_fourth/1.png", -719),
        new BackgroundObject("assets/img/3_background/layers/3_third/2.png", -719),
        new BackgroundObject("assets/img/3_background/layers/2_second/2.png", -719),
        new BackgroundObject("assets/img/3_background/layers/1_first/2.png", -719),

        new BackgroundObject("assets/img/3_background/layers/4_fourth/1.png", 0),
        new BackgroundObject("assets/img/3_background/layers/3_third/1.png", 0),
        new BackgroundObject("assets/img/3_background/layers/2_second/1.png", 0),
        new BackgroundObject("assets/img/3_background/layers/1_first/1.png", 0),

        new BackgroundObject("assets/img/3_background/layers/4_fourth/1.png", 719),
        new BackgroundObject("assets/img/3_background/layers/3_third/2.png", 719),
        new BackgroundObject("assets/img/3_background/layers/2_second/2.png", 719),
        new BackgroundObject("assets/img/3_background/layers/1_first/2.png", 719),

        new BackgroundObject("assets/img/3_background/layers/4_fourth/1.png", 719*2),
        new BackgroundObject("assets/img/3_background/layers/3_third/1.png", 719*2),
        new BackgroundObject("assets/img/3_background/layers/2_second/1.png", 719*2),
        new BackgroundObject("assets/img/3_background/layers/1_first/1.png", 719*2),

        new BackgroundObject("assets/img/3_background/layers/4_fourth/1.png", 719*3),
        new BackgroundObject("assets/img/3_background/layers/3_third/2.png", 719*3),
        new BackgroundObject("assets/img/3_background/layers/2_second/2.png", 719*3),
        new BackgroundObject("assets/img/3_background/layers/1_first/2.png", 719*3),
    ],
    [
        ...Array(6).fill().map((_, i) => new Bottle(i)),
    ],
    [
        ...Array(5).fill().map((_, i) => new Coin(i)),
    ]
)