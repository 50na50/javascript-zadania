function countMyClicks() {
    const button = document.getElementById('ex5-button');
    var a = 0;
    button.addEventListener('click', counter);
    
    function counter() {
        ++a;
        button.nextElementSibling.innerText = a;

        if (a === 10) button.removeEventListener('click', counter);

    }
}

countMyClicks();