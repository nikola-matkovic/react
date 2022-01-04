//parent and child class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person{
    constructor(name, age, yearsOfExperince){
        //calling parent's constructor.
        super(name, age);
        //custom: 
        this.yearsOfExperince = yearsOfExperince;
    }
    code(){
        console.log(`${this.name} is programmer with ${this.yearsOfExperince} years of experience`); 
    }
}

let person1 = new Person("tarik", 19);
let programmer1 = new Programmer ("bahir", 19, 0.5);

console.log(person1);
console.log(programmer1);
programmer1.describe(); 
programmer1.code();

// array of programmers 
const programmers =  [
    new Programmer("Nikola", 19, 7),
    new Programmer("Marko", 18, 3)
];

function developSoftware(programmers){
    programmers.forEach( (programmer) => {
        programmer.code();
    });
}
developSoftware(programmers);