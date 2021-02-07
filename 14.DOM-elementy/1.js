function getTagNames(elements) {
    const elsArr = Array.from(elements);
    return elsArr.map((el) => el.tagName);
}
console.log(getTagNames(document.getElementsByClassName('more-divs')));