const a = ["Ala", "Ola","Jaś","Staś", "Krzyś"];
//1.
console.log(a[0],a[1]);

//2.
console.log([a.length-1]);

//3.
console.log(a);

//4.
for (var i = 1; i< a.length - 1; i += 2) {
    console.log(a[i]);
 }

//5.
console.log(a.filter((value) => typeof value === 'string'));

//6.
console.log(a.filter((value) => typeof value === 'number'));