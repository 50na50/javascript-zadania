const divRand = Math.floor(Math.random() * 7);
for (let i = 0; i < divRand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}