function ClassesAndRemove(classes) {
    classes.forEach(v => console.log(v));
    console.log([...classes].join('+'));
      document.getElementsByClassName(classes.value)[0].classList = [];
}
    console.log('Usunięto wszytskie klasy');


ClassesAndRemove(document.getElementById('classes').classList);
