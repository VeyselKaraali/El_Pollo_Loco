/**
 * Handles various collision detection and resolution logic in the game.
 */
class CollisionManager {

    /**
     * Detects collisions between regular chickens and throwable bottles.
     * If a collision occurs, the bottle splashes and the chicken loses energy.
     * @param {Array<ChickenRegular>} chickenRegular - The array of regular chickens.
     * @param {Array<ThrowableBottle>} throwableBottles - The array of throwable bottles.
     */
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

    /**
     * Detects collisions between a big chicken and throwable bottles.
     * If a collision occurs, the big chicken loses energy and the bottle splashes.
     * @param {ChickenBig} chickenBig - The big chicken object.
     * @param {Array<ThrowableBottle>} throwableBottles - The array of throwable bottles.
     */
    static chickenBigWithThrowableBottle(chickenBig, throwableBottles) {
        throwableBottles.forEach((bottle) => {
            if(chickenBig.isColliding(bottle)) {
                chickenBig.reduceEnergy();
                chickenBig.statusBarHealth.setValue(chickenBig.energy);
                bottle.splash();
            }
        });
    }

    /**
     * Detects collisions between the player character and regular chickens.
     * If the character is above ground and collides with a regular chicken, the chicken's energy is reduced to zero.
     * If the character is not above ground, the character's energy is reduced.
     * @param {Character} character - The player character object.
     * @param {Array<ChickenRegular>} chickenRegular - The array of regular chickens.
     */
    static characterWithChickenRegular(character, chickenRegular) {
        chickenRegular.forEach((enemy, index) => {
            if(character.isAboveGround() && character.isColliding(enemy) && !enemy.isDead() && character.speedY < 0) {
                enemy.energy = 0;
                character.bounce();
            }
            else if (!character.isAboveGround() && character.isColliding(enemy) && !enemy.isDead()) {
                character.reduceEnergy();
                character.statusBarHealth.setValue(character.energy);
            }
        });
    }

    /**
     * Detects collisions between the player character and a big chicken.
     * If a collision occurs, the character loses energy.
     * @param {Character} character - The player character object.
     * @param {ChickenBig} chickenBig - The big chicken object.
     */
    static characterWithChickenBig(character, chickenBig) {
        if (character.isColliding(chickenBig) && !chickenBig.isDead()) {
            character.reduceEnergy();
            character.statusBarHealth.setValue(character.energy);
        }
    }

    /**
     * Detects collisions between the player character and coins.
     * If a collision occurs, the character collects the coin and updates their coin count.
     * @param {Character} character - The player character object.
     * @param {Array<Coin>} coins - The array of coins.
     */
    static characterWithCoin(character, coins) {
        coins.forEach((coin, index) => {
            if (character.isColliding(coin) && !character.statusBarCoin.isFull()) {
                character.collectCoin();
                character.statusBarCoin.setValue(character.collectedCoins);
                coins.splice(index, 1);
            }
        });
    }

    /**
     * Detects collisions between the player character and bottles.
     * If a collision occurs, the character collects the bottle and updates their bottle count.
     * @param {Character} character - The player character object.
     * @param {Array<Bottle>} bottles - The array of bottles.
     */
    static characterWithBottle(character, bottles) {
        bottles.forEach((bottle, index) => {
            if (character.isColliding(bottle) && !character.statusBarBottle.isFull()) {
                character.collectBottle();
                character.statusBarBottle.setValue(character.collectedBottles);
                bottles.splice(index, 1);
            }
        });
    }

    /**
     * Checks if the player character is near the big chicken.
     * If so, the big chicken's status bar is moved and its speed is increased.
     * @param {Character} character - The player character object.
     * @param {ChickenBig} chickenBig - The big chicken object.
     */
    static characterNearChickenBig(character, chickenBig) {
        if (chickenBig.x - character.x < (WorldConfig.WIDTH / 5 * 4) ) {
            chickenBig.statusBarHealth.y = 30;
            chickenBig.isNearCharacter = true;
            chickenBig.speedX = 0.75;
        }
    }
}
