let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    if (timePassed >= 3000) {
        clearInterval(timer); // закончить анимацию через 3 секунды
        return;
    }

    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    draw(timePassed);

}, 30);

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
    train.style.left = timePassed / 3 + 'px';
}