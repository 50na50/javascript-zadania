function Calculator(a,b) {
    this.a = a;
    this.b = b;
    this.add = function () {
        return this.a + this.b;
    }
    this.substract = function () {
        return this.a - this.b;
    }
    this.divide = function () {
        if (this.b === 0) return "cannot divide by 0";
        return this.a / this.b;
    }
    this.multiply = function () {
        return this.a * this.b
    }
}

const calculator = new Calculator(3,1);
console.log(calculator.add());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.substract());
