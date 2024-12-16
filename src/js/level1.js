const level1 = new Level(
    [
        ...Array(6).fill().map((_, i) => new Chick(i)),

        ...Array(6).fill().map((_, i) => new Chicken(i))
    ],
    [
        new Cloud1(),
        new Cloud2(),
        new Cloud1(),
        new Cloud2(),
        new Cloud1(),
        new Cloud2(),
        new Cloud1(),
        new Cloud2(),
        new Cloud1(),
        new Cloud2()

    ],
    [
        new BackgroundObject(-719, "assets/img/3_background/layers/4_fourth/1.png"),
        new BackgroundObject(-719, "assets/img/3_background/layers/3_third/2.png"),
        new BackgroundObject(-719, "assets/img/3_background/layers/2_second/2.png"),
        new BackgroundObject(-719, "assets/img/3_background/layers/1_first/2.png"),

        new BackgroundObject(0, "assets/img/3_background/layers/4_fourth/1.png"),
        new BackgroundObject(0, "assets/img/3_background/layers/3_third/1.png"),
        new BackgroundObject(0, "assets/img/3_background/layers/2_second/1.png"),
        new BackgroundObject(0, "assets/img/3_background/layers/1_first/1.png"),

        new BackgroundObject(719, "assets/img/3_background/layers/4_fourth/1.png"),
        new BackgroundObject(719, "assets/img/3_background/layers/3_third/2.png"),
        new BackgroundObject(719, "assets/img/3_background/layers/2_second/2.png"),
        new BackgroundObject(719, "assets/img/3_background/layers/1_first/2.png"),

        new BackgroundObject(719*2, "assets/img/3_background/layers/4_fourth/1.png"),
        new BackgroundObject(719*2, "assets/img/3_background/layers/3_third/1.png"),
        new BackgroundObject(719*2, "assets/img/3_background/layers/2_second/1.png"),
        new BackgroundObject(719*2, "assets/img/3_background/layers/1_first/1.png"),

        new BackgroundObject(719*3, "assets/img/3_background/layers/4_fourth/1.png"),
        new BackgroundObject(719*3, "assets/img/3_background/layers/3_third/2.png"),
        new BackgroundObject(719*3, "assets/img/3_background/layers/2_second/2.png"),
        new BackgroundObject(719*3, "assets/img/3_background/layers/1_first/2.png"),
    ],
    [
        ...Array(6).fill().map((_, i) => new Bottle(i)),
    ],
    [
        ...Array(5).fill().map((_, i) => new Coin(i)),
    ]
)