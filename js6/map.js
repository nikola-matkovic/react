//
'use strict'
const m1 = new Map([                             //new map
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);
process.stdout.write(m1.get(2));
m1.set(4, "four");                              //set
m1.delete(1);                                   //delete
if(m1.has(3)){                                  //has
    console.log("number 3 is in the map");
}
m1.forEach((val) => {                          //foreach
    console.log(val);
});
let s = m1.size;                               //size
console.log("with iter:");
const iter = m1.entries();
for(let i=0; i<=s; i++){
    console.log(iter.next());
}