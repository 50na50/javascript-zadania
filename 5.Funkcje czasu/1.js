var x = 0;
var n = setInterval(() => {
    if(x == 15)
        {
            clearInterval(n);
        }
       console.log("Cześć po raz "+ x++)
}, 3000);