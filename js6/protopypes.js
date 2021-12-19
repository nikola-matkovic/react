function Person(first, last, age){ //constructor  for object
  this.firstName  = first;
  this.lastName  = last;
  this.age  = age;
}

person1 = new Person("Jovan", "Jovanović", 25);
person2 = new Person("Marko", "Marković", 25);

Person.prototype.lang = "sr";
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName
};

console.log(person1.lang);
console.log(person1.fullName());