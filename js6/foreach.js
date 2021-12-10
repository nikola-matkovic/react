//this is foreach loop
const a =  [10, 20, 30, 40, 50];

let txt = "";

a.forEach( (val, ind, arr) => { txt += val;
  arr[ind] *= 3;
});
console.log(txt);
console.log(a);
//this is same loop but without arrow function
const b =  [10, 20, 30, 40, 50];

txt = "";

a.forEach(myFunction);
function myFunction(val, ind, arr){
  txt += val;
  arr[ind] *= 3;
}

console.log(txt);
console.log(b);