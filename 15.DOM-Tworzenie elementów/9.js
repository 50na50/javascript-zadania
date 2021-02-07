const area = document.createElement('area');
const table = document.createElement('table');

const inputs = [{
    label: 'Name',
    id: 'fName',
    type: 'text'
}, {
    label: 'Surname',
    id: 'name',
    type: 'text'
}, {
    label: 'Age',
    id: 'age',
    type: 'number'
}, {
    label: 'Childrens',
    id: 'kids',
    type: 'number'
}, {
    label: 'Gender',
    id: 'gender',
    type: 'text'
}, {
    label: 'More',
    type: 'submit',
    id: 'more'
}, {
    label: 'Create',
    type: 'submit',
    id: 'print'
}];

let data = [];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            if (v.id === 'print') {
                renderTable(e);
            } else {
                addRow();
            }
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    area.appendChild(label);

    area.appendChild(elInput);
});

function addRow() {
    const row = [];
    inputs.forEach((v) => {
        if (v.type !== 'submit') {
            const value = document.getElementById(v.id)?.value;
            row.push(value);
        }
    });
    data.push(row);
    // if table exist, re-render on adding new row
    if (table.children.length > 0) {
        renderTable();
    }
}

function renderTable(e) {
    e?.preventDefault();
    table.innerHTML = '';
    if (data.length > 0) {
        const dataCells = inputs.filter(v => v.type !== 'submit');
        // create table header
        const thead = document.createElement('thead');
        dataCells.forEach(v => {
            const th = document.createElement('th');
            th.innerText = v.label;
            thead.appendChild(th);
        });
        table.appendChild(thead);
        // create table body
        const tbody = document.createElement('tbody');
        capitalize();
        data.forEach((v, i) => {
            const tr = document.createElement('tr');
            v.forEach(val => {
                const td = document.createElement('td');
                td.innerText = val;
                tr.appendChild(td);
            })
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Usuń';
            removeButton.addEventListener('click', (e) => {
                data.splice(i, 1);
                renderTable();
            });
            tr.appendChild(removeButton);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }
}

document.body.appendChild(area);
document.body.appendChild(table);