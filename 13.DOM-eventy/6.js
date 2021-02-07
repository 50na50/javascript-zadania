document.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = window.scrollY >= 200
        ? 'red'
        : 'white';
});
