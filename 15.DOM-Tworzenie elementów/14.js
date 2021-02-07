var object = {
    name: '',
    surname: ''
};

function changeObject(name, surname) {
    object.name = name;
    object.surname = surname;
    object.nameLength = name.length;
    object.surnameLength = surname.length;
    if (name.length > 5 || surname.length > 5) {
        const btn = document.createElement('button');
        btn.innerText = 'Restore';
        btn.addEventListener('click', (x) => {
            object = {
                name: '',
                surname: ''
            }
        });
        document.body.appendChild(btn)
    }
}

changeObject('Kot', 'Filemon');
