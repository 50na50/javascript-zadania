var ourInput = document.querySelector('#calculator > input');
    var clearFlag = false;
    var another = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (clearFlag == true) {
                ourInput.value = "";
                clearFlag = false;
            }
            ourInput.value = ourInput.value + event.target.innerText;
            if (another == true) {
                ourInput.value = eval(ourInput.value);
                another = false;
                clearFlag = true;
            }
            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                another = true;
            }
        });
    });
  
