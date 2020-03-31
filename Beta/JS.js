window.onload = function() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        dis.style.right = timePassed / 6 + 'px';

        if (timePassed > 1000) clearInterval(timer);

    }, 3);
}