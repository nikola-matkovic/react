// old way
// const vehicles = ['mustang', 'f-150', 'expedition'];
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

//new way
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

console.log(car, truck, suv);


// skip with comma:

const fruits = ["apple", "lemon", "tomato"]

const [green, ,  red ] = fruits;
console.log("green fruit is "+ green+" and, red fruit is "+red);