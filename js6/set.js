const a = [1,2, 3, 1, 2, 1, 5, 4, 1];
const set1 = new Set(a);

const set2 = new Set("This is possible but has not point");

console.log(set1, set2);

set1.add(6);                                    //add
if(set1.has(6)){                                //has
    console.log("Set have six");
}

set1.delete(1);                                 //delete
console.log(set1)

set1.forEach((value) => {                      //foreach
    console.log(value * 3);
});

const iterator1 = set1.values();               //values
let size = set1.size;                          //size

for(let i = 0;  i < size; i++){
    console.log(iterator1.next().value);
}
console.log("itterator 2:");
const iterator2 = set1.values();
for(let i of iterator2){
    console.log(i);
}