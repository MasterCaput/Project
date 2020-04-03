function disabled() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        dis.style.right = timePassed / 5 + 'px';

        if (timePassed > 1500) clearInterval(timer);


    }, 30);
}

window.onload = disabled();