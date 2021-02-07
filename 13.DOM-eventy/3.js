const div = document.getElementById('ex3');
div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseout', (e) => {
    div.style.backgroundColor = 'red';
});