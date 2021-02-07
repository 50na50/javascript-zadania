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
  
  person1.printInfo();
  person1.addYear();
  person2.printInfo();