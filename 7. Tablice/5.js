function numbers(table){
    let average = table.reduce((a, b) => a += b) / table.length;

    table.map((a) => console.log(a * average));
}
numbers([7,8,9,8,4]);