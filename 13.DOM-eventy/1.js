// 1.
document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));

// 2.
document.addEventListener('mousemove', (event) => console.log(event));

// 3.
document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));

// 4.
document.addEventListener('keypress', (event) => console.log(event));

// 5.
document.addEventListener('scroll', (event) => console.log(event));

// 6.
document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));