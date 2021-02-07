let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    //1.
    function One(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    //2.
    function Two(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    //3.
    function Three(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }

    //4.
    function Four(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }

    //5.
    function Five(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', third)});
