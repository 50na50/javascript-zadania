function sumIndexesOfTwoArrays(array1, array2) {
    let arraySum = 0;
    array1.forEach((v, i) => arraySum += i);
    array2.forEach((v, i) => arraySum += i);
    return arraySum;
}
console.log(sumIndexesOfTwoArrays([3], [2, 8, 9]));