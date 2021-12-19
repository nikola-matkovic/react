let str = "1";
let str2 = str.padStart(4, 0);
let str3 = str.padEnd(4, 0);

console.log(str2);
console.log(str3);

const person = {
  fName : "Nikola",
  lName : "Matković",
  age : 19
};

const ent = Object.entries(person); 

console.log(ent);
for (let [key, value] of ent) {
  console.log(`${key}: ${value}`);
}

const map =  new  Map(ent);
map.forEach((value, key) =>{
  console.log(`${key}: ${value}`);
});

const values = Object.values(person);
values.forEach((value) => {
  console.log(value);
});

let s = 0;
function sum (...args){
  console.log(args);
  args.forEach((e) => {
    s += e;
  });
  return s;
}
console.log(sum(1, 5, 6 , 19));

const part1 = [1, 2, 3, 4, 5];
const part2 = [6, 7, 8, 9];
const all = [0, ...part1, ...part2];
console.log(all);

const info =  {firsName : "nikola", lastName : "matkovic", age : 19};
const moreInfo = {university : "DUNP", phone: "xiaomi"};
const allInfo = {...info, ...moreInfo};

for (let key in allInfo){
  console.log(allInfo[key]);
}
