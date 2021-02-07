class Person {
    constructor(name, surname, age, country, city) {
      Object.assign(this, { name, surname, age, country, city })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYear() {
      this.age++;
    }
  
  }
  
  const person1 = new Person('Maja', 'Pszczółka', 8, 'Poland', 'Warsow');
  const person2 = new Person('Gucio', 'Truteń', 40, 'Germany', 'Berlin');
  
  person1.fMeal = ['Honey', 'sweets', 'syrup'];
  person2.fMeal = ['cake', 'beer'];
  
  function printMeal() {
    console.log(this.fMeal);
  }
  
  function addMeal(dish) {
    this.fMeal.push(dish)
  }
  
  person1.printMeal = printMeal;
  person2.printMeal = printMeal;
  person1.addMeal = addMeal;
  person2.addMeal = addMeal;
  
  person1.printMeal();
  person1.addMeal('cookies');
  person2.printMeal();
  