const button = document.createElement('button');
button.innerText = 'ghost button ';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);