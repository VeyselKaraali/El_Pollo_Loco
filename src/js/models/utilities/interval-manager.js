class IntervalManager {
    static intervalIds = [];

    static setStoppableInterval(fn, time) {
        let id = setInterval(() => {
            if (!World.isGamePaused) {
                fn();
            }
        }, time);
        IntervalManager.intervalIds.push(id);
    }

    static stopAllIntervals() {
        IntervalManager.intervalIds.forEach(id => clearInterval(id));
        IntervalManager.intervalIds = [];
    }
}