let intervalIds = [];

function setStoppableInterval(fn, time) {
    let id = setInterval(() => {
        if (!World.isGamePaused) {
            fn();
        }
    }, time);
    intervalIds.push(id);
}