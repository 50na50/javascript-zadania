const area = document.createElement('area');
const inputs = [{
    label: 'Element',
    id: 'element',
    type: 'text'
}, {
    label: 'Text',
    id: 'text',
    type: 'text'
}, {
    label: 'Color',
    id: 'color',
    type: 'color'
}, {
    label: 'How many times?',
    id: 'count',
    type: 'number'
}, {
    label: 'Create',
    type: 'submit'
}];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            createElement(e);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    area.appendChild(label);

    area.appendChild(elInput);
});

function createElement(e) {
    e.preventDefault();
    let el = null;

    inputs.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': el = document.createElement(value); break;
            case 'text': el.innerText = value; break;
            case 'color': el.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(el.cloneNode(true));
            } break;
        }
    });
}

document.body.appendChild(area);