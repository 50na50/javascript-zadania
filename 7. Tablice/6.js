function evenAverage(array) {
    const evenNums = array.filter((v, i) => v % 2 === 0);
    return evenNums.reduce((a, b) => a + b) / evenNums.length;
}

console.log(evenAverage([8, 7, 29, 6]));