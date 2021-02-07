function addEvenOddClass(number) {
    const newClass = number % 2 === 0 
      ? 'even'
      : 'odd';
    console.log(number, newClass);
    document.getElementById('numbers').classList.add(newClass);
  }
  
  addEvenOddClass(Math.floor(Math.random() * 10));
  