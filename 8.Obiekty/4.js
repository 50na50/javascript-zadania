const car = {
    name:'BMW',
    age: 7,
    color: 'Red',
    model: 67
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))