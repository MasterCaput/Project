<<<<<<< HEAD
 function disabled() {
     let start = Date.now();

     let timer = setInterval(function() {
         let timePassed = Date.now() - start;

         dis.style.right = timePassed / 7 + 'px';

         if (timePassed > 3000) clearInterval(timer);

     }, 0.1);
 }
=======
 function disabled() {
     let start = Date.now();

     let timer = setInterval(function() {
         let timePassed = Date.now() - start;

         dis.style.right = timePassed / 7 + 'px';

         if (timePassed > 3000) clearInterval(timer);

     }, 0.1);
 }
>>>>>>> master
 window.onload = disabled();