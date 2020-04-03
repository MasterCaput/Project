function wheel() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        wl.style.right = timePassed / 5 + 'px';

        if (timePassed > 1800) clearInterval(timer);

    }, 20);
}
window.onload = wheel();