let changeButton = document.createElement('button');
changeButton.id = "change"
changeButton.type = 'button'
changeButton.innerText = "Użyj dużych liter!";
root.appendChild(changeButton);  

function changeLetters() {
  document.querySelectorAll('tr').forEach((row) => {
    row.querySelectorAll('td').forEach((cell) => {
      cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
    })
  })
}  

document.querySelector('#change').addEventListener('click', changeLetters);