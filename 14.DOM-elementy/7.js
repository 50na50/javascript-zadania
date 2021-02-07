var somethink = document.querySelector('#longLists').querySelectorAll('li');
  somethink.forEach((c) => {
    if(c.dataset.text == null) c.setAttribute("text","data-text");
  });