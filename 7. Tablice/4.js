function sleep(table){
    return table.reduce((a,b) => (a+b));
}
console.log(sleep([9,8,7,6,5]));