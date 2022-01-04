class  Person{
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age;
    }
}

let p1 = new Person("Nikola", "Matkovic", 19);

class Rectangle{
    constructor(width, height, color){
        console.log("the rectangle is being created!")
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        return this.width * this.height;
    }
    printDescription(){
        console.log(`This rectangle is ${this.width} cm width and ${this.height} cm  height. This rectange  have ${this.color} color `);
    }
}
let r1 = new Rectangle(5, 10, "blue");
let r2 = new Rectangle(3, 2, "red");
console.log(r1.area());
console.log(r2.area());
r1.printDescription();