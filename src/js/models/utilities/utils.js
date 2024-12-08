let intervalIds = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(() => {
        if (!isGamePaused) {
            fn();
        }
    }, time);
    intervalIds.push(id);
}