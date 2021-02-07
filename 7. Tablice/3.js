const array=[0,1,2,3,4,5,6];
//1.
var sum = 0;
    for (var i = 0; i < array.length; i++) {
    sum += array[i];
    }
console.log(sum); //zwraca 21

//2.
var difference = 0;
for (var i = 0; i < array.length; i++) {
  difference -= array[i];
  }
    console.log(difference);//-21

//3.


//4.
console.log(array.filter(i => i % 2 == 0)); //0,2,4,6

//5.
console.log(array.filter(i => i % 2 != 0)) //1,3,5


//6.
var max = Math.max(...array);
    console.log(max); //6

//7.
var min = Math.min(...array);
    console.log(min);//0

//8.
array.reverse();
console.log(array);