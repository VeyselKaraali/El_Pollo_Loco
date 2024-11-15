class StartScreen extends DrawableObject{
    IMAGES_START_SCREEN=[
        "assets/img/2_intro_outro_screens/1_start/1.png",
    ]

    constructor() {
        super(0,0,720,480);
        this.loadImages(this.IMAGES_START_SCREEN);
    }

}

