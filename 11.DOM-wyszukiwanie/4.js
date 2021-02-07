function allPrint(params) {
    params.forEach((param) => console.log(document.querySelectorAll(param)));
  }
  
  allPrint(['li', 'ul', 'span', 'div.list span', 'div#spans span']);//wszystkie elementy 