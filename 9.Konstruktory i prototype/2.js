class Calculator {
    constructor(numbers) {
        this.numbers = numbers;
        this.history = [];
    }

    add(name) {
        const result = this.numbers.reduce((a, b) => a + b);
        this.saveToHistory('Adding', result);
        return result;
    }

    substract(city) {
        const result = this.numbers.reduce((a, b) => a - b);
        this.saveToHistory('Substracting', result);
        return result;
    }

    divide() {
        const result = this.numbers.reduce((a, b) => a / b);
        this.saveToHistory('Dividing', result);
        return result;
    }

    multiply() {
        const result = this.numbers.reduce((a, b) => a * b);
        this.saveToHistory('Multiplying', result);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }

    saveToHistory(actionName,result) {
        this.history.push({
            action: actionName,
            input: this.numbers,
            output: result
        })
    }
}

const calculator1 = new Calculator([7,8,9]);
calculator1.multiply();
calculator1.add();
calculator1.divide();
console.log(calculator1.getHistory());
calculator1.clearHistory();
console.log(calculator1.getHistory());

const calculator2 = new Calculator([15, 13, -2]);
calculator2.substract();
calculator2.multiply();
console.log(calculator2.getHistory());
