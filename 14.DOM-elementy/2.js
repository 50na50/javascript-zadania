function show(x) {
    // 1.
        console.log(x.innerHTML);

    //2. 
        console.log(x.outerHTML);

    //3. 
        console.log([...x.classList].join(''));

    //4. 
        console.log([...x.classList]);

    //5. 
        console.log(x.dataset)
    }
    show(document.querySelector('.short-list'));  