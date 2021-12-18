'use strict'   //use strict

let fname = "Marina";
let fLetter = fname[0];  //charAt
console.log(fLetter); 

let fullName = "                Nikola Matković           ".trim();  //trim just sides
console.log(fullName);
const arr = [1, 2, 3, 4, 5];
console.log(typeof(arr));
if(Array.isArray(arr)){
  console.log("It's array");                           //typeof returns  object
}

let ages = [45, 18, 21, 20, 9 , 65, 38];
let adult = ages.filter(age =>  age > 18);              //filter 
console.log(adult); 

let numbers = [1, 2, 3, 4, 5, 6];
let powered = numbers.map( e => e**2);            // map
console.log(powered);

let total = numbers.reduce((total, value) => {    //reduce - left to right 
  process.stdout.write((value + " ").toString());          
  return total + value;
});
console.log(total);

let total2 = numbers.reduceRight((total, value) => {   //same, reduceRight -right  to left 
  process.stdout.write((value+ " ").toString());          
  return total + value;
});
console.log(total2);

if(ages.every( value => value >= 18 )){               //every
  console.log("everyone is older then 18!")   
}
else{
  console.log("Not all are older then 18!")
}
if(ages.some( value => value >= 18 )){               //some
  console.log("Someone is older then 18")   
}
else{
  console.log("No one is older then 18")
}
console.log(numbers.indexOf(5));                    //indexof

if(ages.includes(20)){                              //includes 
  console.log("someone is 20 years old");
}
let l = 'abcdefghijklmnopqrstuvwxyz';
const letters = Array.from(l);                      //from
console.log(letters)
const keys = numbers.keys();                        //Keys
for(let x of keys){
  console.log(x);
}