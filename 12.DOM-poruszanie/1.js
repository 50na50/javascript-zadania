//1.
console.log(document.getElementById('buz').parentElement);

//2.
console.log(document.getElementById('buz').parentElement.querySelectorAll('*:not(#buz)'));

//3.
console.log(document.getElementById('foo').children);

// 4.
console.log(document.getElementById('foo').parentElement);

// 5.
console.log(document.getElementById('foo').children[0]);

// 6.
const children = document.getElementById('foo').children;
console.log(children[Math.ceil(children.length / 2 - 1)]);