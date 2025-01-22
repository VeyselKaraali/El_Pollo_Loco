class DomUtils {
    static toggleElementVisibility(id, isVisible) {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle("d-none", !isVisible);
            return element;
        }
        console.warn(`The element with ID "${id}" was not found.`);
    }
}