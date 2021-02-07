class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const person1 = new Person('Anna Maria', 'Wesołowska', 63, 'Poland', 'Warsaw', 'polish');
const person2 = new Person('Jan', 'Sobieski', 50, 'Hungary', 'Vienna', 'latin');
const person3 = new Person('Kubuś', 'Puchatek', 3, 'Frence', 'Paris', 'french');
const person4 = new Person('Krzysztof', 'Columb', 48, 'Spain', 'Madrid', 'portuguese');
const person5 = new Person('Artur', 'Król', 30, 'England', 'London', 'english');

person1.newCity("Cracow");
person2.newAge(25);
person3.newCity("Los Angeles");
person5.newAge(18);
person5.newAge(80);


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
