// for (var  of iterable
let fname = "nikola";

for(let i of fname){
    console.log(i);
}

const  arr = [1, 2, 3, 4, 5];

for(let i  of arr){
    console.log(i);
}

const map = new Map();
map.set("fName", "nikola");
map.set("lName", "matkovic");
map.set("age", 19);

//vraća sve elemente sa sve ključem
for(let i of map){
    console.log(i);
}
map.forEach((val, key)=>{
    console.log(`Key: ${key} \t value: ${val} \n`);
});