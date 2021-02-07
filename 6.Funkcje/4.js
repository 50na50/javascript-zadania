function myFunction(string) {
    let i = 0;
    const timer = setInterval(() => {
        if(i < 5) {
            console.log(string);
            i++;
        }
        else{
            console.log("The End");
            clearInterval(timer);
        } 
    }, 3000);
}


myFunction("To be continued ...");