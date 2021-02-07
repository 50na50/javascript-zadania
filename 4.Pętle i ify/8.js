//A.
let stars = '*';
let pause = ' ';
for (var i = 0; i < 5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        result += stars;
    }
    console.log(result);
}

//B.
let stars = '*';
let pause = ' ';
for (var i = 0; i < 5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += pause;
    }
    for (var a = 0; a <= i; a++) {
        result += stars + pause;
    }
    console.log(result);
}

//C.
let stars = '*';
let pause = ' ';
for (var i = 0; i < 5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += pause;
    }
    for (var a = 0; a <= i; a++) {
        result += stars;
        result += (a < i) ? stars : '';
    }
    console.log(result);
}

//D.
let stars = '*';
let pause = ' ';
for (var i = 0; i < 11; i++) {
    var result = '';
    for (var j = 0; j < 5; j++) {
        if (i < 5) {
            result += j <= i ? stars : j;
        } else if (i > 5) {
            result = (j < i-6 ? (j-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

//E.
let stars = '*';
let pause = ' ';
for (var i = 0; i < 8; i++) {
    var result = '';
    for (var j = 4; j > i; j--) {
        result += pause;
    }
    for (var a = 0; a <= i; a++) {
        result += stars + pause;
    }
    if(i>=5) {
        result = '';
        for (var x = 0; x < 4; x++) {
          result += pause;
        }
        result += stars;
    }
  
    console.log(result);
}