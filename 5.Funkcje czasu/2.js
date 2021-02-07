let tab = ["Awokado", "Masło", "Sól"]; 
setTimeout(function() {
    for (let i=0; i<tab.length; i++) {
        console.log(tab[i]);
    }
    i = 0;
    var x = setInterval(function() {
  
        if(tab.length>i) {
            console.log(tab[i++]);
        }
        clearInterval(x);
    }, 3000);
    
}, 2000);
