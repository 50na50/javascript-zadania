let downloadTxt = function(elementId) {
    let el = document.querySelector(`#${elementId}`);
    el.addEventListener('click', function(event) {
        console.log(event.target.textContent.trim());
    });
}
downloadTxt('ex2');