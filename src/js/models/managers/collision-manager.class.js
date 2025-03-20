class CollisionManager {
    static ChickenRegularWithThrowableBottle(chickenRegular, throwableBottles) {
        throwableBottles.forEach((bottle) => {
            chickenRegular.forEach((chickenRegular) => {
                if (bottle.isColliding(chickenRegular)) {
                    bottle.splash();
                    chickenRegular.reduceEnergy();
                }
            });
        });
    }

    static chickenBigWithThrowableBottle(chickenBig, throwableBottles) {
        throwableBottles.forEach((bottle) => {
            if(chickenBig.isColliding(bottle)) {
                chickenBig.reduceEnergy();
                chickenBig.statusBarHealth.setValue(chickenBig.energy);
                bottle.splash();
            }
        });
    }

    static characterWithChickenRegular(character, chickenRegular) {
        chickenRegular.forEach((enemy, index) => {
            if(character.isAboveGround() && character.isColliding(enemy) && !enemy.isDead()) {
                enemy.energy = 0;
                character.bounce();
            }

            else if (!character.isAboveGround() && character.isColliding(enemy) && !enemy.isDead()) {
                character.reduceEnergy();
                character.statusBarHealth.setValue(character.energy);
            }
        })
    }

    static characterWithChickenBig(character, chickenBig) {
        if (character.isColliding(chickenBig) && !chickenBig.isDead()) {
            character.reduceEnergy();
            character.statusBarHealth.setValue(character.energy);
        }
    }

    static characterWithCoin(character, coins) {
        coins.forEach((coin, index) => {
            if (character.isColliding(coin) && !character.statusBarCoin.isFull()) {
                character.collectCoin();
                character.statusBarCoin.setValue(character.collectedCoins);
                coins.splice(index, 1);
            }
        });
    }

    static characterWithBottle(character, bottles) {
        bottles.forEach((bottle, index) => {
            if (character.isColliding(bottle) && !character.statusBarBottle.isFull()) {
                character.collectBottle();
                character.statusBarBottle.setValue(character.collectedBottles);
                bottles.splice(index, 1);
            }
        });
    }

    static characterNearChickenBig(character, chickenBig) {
        if (chickenBig.x - character.x < (WorldConfig.WIDTH / 3 * 2) ) {
            chickenBig.statusBarHealth.y = 30;
            chickenBig.isNearCharacter = true;
            chickenBig.speedX = 0.75;
        }
    }
}