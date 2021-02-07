function sumObject(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumObj = new sumObject([1, 2, 3, 4]);

console.log(sumObj.sum);