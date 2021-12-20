class Person {
  constructor(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }
  fullName(){
    return this.fName + " " +this.lName;
  }
}
class Looking extends Person {
  cnstructor(eyes, height){
    
  }
}


const p1 = new Person("Nikola", "Matković", 19);
console.log(p1.fullName());