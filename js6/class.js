class Person {
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age; 
    }
    fullName(){
        return this.fName + " " + this.lName;
    }
}
const o1 = new Person("Nikola", "Matkovic", 19);
const o2 = new Person("Marko", "Petrović", 18);

if(o1.age > o2.age){
    console.log(`${o1.fullName()} is older then ${o2.fullName()}`);
}
else if(o1.age < o2.age){
    console.log(`${o2.fullName()} is older then ${o1.fullName()}`);
}
else{
    console.log(`${o2.fullName()} and ${o1.fullName()} both  are ${o1.age} years old`);
}