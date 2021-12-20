//function constructor
function Person(first, last, age){ //constructor  for object
  this.firstName  = first;
  this.lastName  = last;
  this.age  = age;
}
person1 = new Person("Jovan", "Jovanović", 25);


function write(){
  console.log("hello world");
}

max = findMax(1, 2, 3, 4, 5, 10, 8, 9);

function findMax(){
  let max = -Infinity;
  for(key in arguments){
    if(arguments[key] > max){
      max = arguments[key];
    }
  }
  return max;
}
console.log(max);
//call()
const phone ={
  turnOn: function (){
    console.log(`i'm ${this.name} ${this.model} and i'm On!`);
  }
}
const  phone1 = {
  name: "xiaomi",
  model: "mi 5x",
  ram: "4GB",
  rom: "32GB"
}
phone.turnOn.call(phone1);

const laptop ={
  turnOn: function (battery, time){
    console.log(`i'm ${this.name} ${this.model} and i'm On. i needed ${time}secounds for boot. Now i  have ${battery}% of battery`);
  }
}
const laptop1 = {
  name: "lenovo",
  model: "thinkpad",
  ram: "8GB",
  rom: "250GB"
}
const laptop2 = {
  name: "apple",
  model: "M1",
  ram: "8GB",
  rom: "250GB"
}
laptop.turnOn.call(laptop1, 50, 90);
laptop.turnOn.apply(laptop2, [12, 40]);

console.log(Math.max.apply(null, [1, 2, 3]));
const nums = [1, 2, 3];
console.log(Math.max(...nums));