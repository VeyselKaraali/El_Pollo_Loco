/**
 * A utility class that provides methods to manipulate DOM elements, such as toggling visibility and showing specific screens.
 */
class DomUtils {
    /**
     * Toggles the visibility of an element based on its ID.
     * If the element is found, it will either show or hide the element by adding/removing the "d-none" class.
     *
     * @param {string} id - The ID of the DOM element to toggle visibility for.
     * @param {boolean} isVisible - A boolean indicating whether the element should be visible (true) or hidden (false).
     * @returns {HTMLElement|null} The element that was toggled, or null if no element with the given ID was found.
     */
    static toggleElementVisibility(id, isVisible) {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle("d-none", !isVisible);
            return element;
        }
        console.warn(`The element with ID "${id}" was not found.`);
        return null;
    }

    /**
     * Shows or hides the end screen and the win/lose screens based on the provided visibility values.
     * This function toggles the visibility of the following elements:
     * - The "end-screen-container"
     * - The "win-screen"
     * - The "lose-screen"
     *
     * @param {boolean} isEndScreenVisible - A boolean indicating whether the end screen container should be visible.
     * @param {boolean} isWinScreenVisible - A boolean indicating whether the win screen should be visible.
     * @param {boolean} isLoseScreenVisible - A boolean indicating whether the lose screen should be visible.
     */
    static showEndScreen(isEndScreenVisible, isWinScreenVisible, isLoseScreenVisible) {
        DomUtils.toggleElementVisibility("end-screen-container", isEndScreenVisible);
        DomUtils.toggleElementVisibility("win-screen", isWinScreenVisible);
        DomUtils.toggleElementVisibility("lose-screen", isLoseScreenVisible);
    }
}
