 function disabled() {
     let start = Date.now();

     let timer = setInterval(function() {
         let timePassed = Date.now() - start;

         dis.style.right = timePassed / 5 + 'px';

         if (timePassed > 1800) clearInterval(timer);

     }, 0.1);
 }
 window.onload = disabled();