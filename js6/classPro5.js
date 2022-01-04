//polymorphism
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log("generic Animal Sound");
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log("Woof! Woof"); 
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
}
class Cow extends Animal{
    constructor(name){
        super(name);
    }
    makeSound() {
        super.makeSound();
        console.log("Moo!");
    }
}
const a1 = new Animal("Dom");
const a2 = new Cat("Garfild");
const a3 = new Dog("Pućko");
const a4 = new Cow("milka");

a1.makeSound();
a2.makeSound();
a3.makeSound();
a4.makeSound();