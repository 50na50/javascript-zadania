var listValues = document.querySelector('#longList');
    function showTable(listValues) {
        var li = [];
        listValues.querySelectorAll('li').forEach((d) => {
            li.push(d.innerHTML);
        });
        return li;
    }
    console.log(showTable(listValues));