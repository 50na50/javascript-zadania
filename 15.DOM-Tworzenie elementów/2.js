const fFruits = ['apple', 'pear', 'peach', 'tomato', 'watermelon', 'orange'];
const ul = document.createElement("ul");
fFruits.forEach(x => {
    const li = document.createElement("li");
    li.innerText = x;
    ul.appendChild(li);
});
document.body.appendChild(ul);