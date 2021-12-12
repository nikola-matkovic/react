/*Objects that can be iterated over with for..of are called iterable.
Iterables must implement the Symbol.iterator method.
*/
let fName = "Nikola";

for(let i of fName){
    console.log(i)
}

const a = [1, 2, 3, 4, 5];

for(let i of a){
    console.log(i);
}

const set = new Set(a);

for(let i of set){
    console.log(i);
}

const m = new Map();
m.set(0, "zero");
m.set(1, "one");

for(let [key, value] of m){
    console.log(`key: ${key} \t value: ${value}`);
}

let lName = "matković";
let iterator = lName[Symbol.iterator]();
let l = lName.length;
for(let i = 0; i <= l; i++){
    console.log(iterator.next());
}
//my iterable
function iter(){
    let num = 0;
    let done = false;
    return {
        next : function(){
            num += 5;
            if(num==100) {done = true}
            return {value: num, done:done};
        },
        log : function(){ //return the value of num
            return num;
        }
    }
}

const n1 = iter();
console.log(n1.log()); //0;
n1.next(); //5
n1.next(); //10
n1.next(); //15
console.log(n1.next().value); //20
// new itterable, with for-of support
let itter2 = {}

itter2[Symbol.iterator] = function(){
    let num = 0;
    done = false;
    return {
        next : function(){
            num += 5;
            if(num==100) {done = true}
            return {value: num, done:done};
        },
        log : function(){ //return the value of num
            return num;
        }
    }
}
for ( i of itter2){
    console.log(i); //5 10 .... 100
}
// same, with class and arrow functions
class Iter {
    constructor(){}
    [Symbol.iterator](){
        let num = 0;
        done = false;
        return {
            next : () => {
                num += 5;
                if(num==100) {done = true}
                return {value: num, done:done};
            },
            log : () => { //return the value of num
                return num;
            }
        }
    }
}
let n2 = new Iter();
console.log("itter2:")
for (let i of n2){
    process.stdout.write((i+ " ").toString());
}