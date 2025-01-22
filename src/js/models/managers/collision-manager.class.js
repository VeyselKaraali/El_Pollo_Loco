class CollisionManager {
    static enemyWithThrowableBottle(character, enemies) {
        character.throwableBottles.forEach((bottle) => {
            enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy)) {
                    bottle.splash();
                    enemy.reduceEnergy();
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

    static characterWithEnemy(character, enemies) {
        enemies.forEach((enemy, index) => {
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
        }
    }
}