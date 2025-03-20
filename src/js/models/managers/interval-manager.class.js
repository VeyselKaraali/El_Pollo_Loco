/**
 * Manages the intervals for executing functions in a game loop.
 * Provides methods to start stoppable intervals and stop all intervals.
 */
class IntervalManager {
    static intervalIds = [];

    /**
     * Sets a stoppable interval that executes the provided function at a specified time interval.
     * The interval is paused when the game state is set to "paused".
     * @param {Function} fn - The function to be executed at each interval.
     * @param {number} time - The time interval in milliseconds.
     */
    static setStoppableInterval(fn, time) {
        let id = setInterval(() => {
            if (!StateManager.getState("isPaused")) {
                fn();
            }
        }, time);
        IntervalManager.intervalIds.push(id);
    }

    /**
     * Stops all active intervals that have been set by `setStoppableInterval`.
     * This clears all intervals stored in the `intervalIds` array.
     */
    static stopAllIntervals() {
        IntervalManager.intervalIds.forEach(id => clearInterval(id));
        IntervalManager.intervalIds = [];
    }
}
