function test(){
    console.log("test")
}
test();

let hello = () => "hello world"; //return by default
console.log(hello());

var a = () => {
    console.log("test2")
}
a();

//if you have only one parameter in arrow function, you can skip the parentheses


hello = val => "Hello " + val;

console.log(hello("Nikola"));