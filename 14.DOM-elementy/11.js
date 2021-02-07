function switchThem(child) {
    let childs = [...child];
    childs.forEach((element) => {
        var newNmb = Math.round(Math.random() * 10);
        element.dataset.oldValue = element.innerHTML;
        element.innerHTML = newNmb;
    });
}

let child = document.querySelector('#longList').children;
switchThem(child)
});