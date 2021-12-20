//function constructor
function Person(first, last, age){ //constructor  for object
  this.firstName  = first;
  this.lastName  = last;
  this.age  = age;
}

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