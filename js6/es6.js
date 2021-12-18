function sum(...args){
  let sum = 0;
  args.forEach((arg)=>{
    sum += arg;
  });
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));

fName = "Nikola";
lName = "Matković";
if(fName.toLowerCase().includes("n")){
  console.log("There is N in "+ fName);
}
if(lName.toLowerCase().startsWith("m")){
  console.log("Lname starts with m: " + lName);
}
if(lName.toLowerCase().endsWith("ić")){
  console.log("Lname starts with ić: " + lName);
} 
// math
const PI = 3.14;
console.log(Math.trunc(PI));          // 3
console.log(Math.sign(PI));           // 1 //is positive, negativ or 0 // -1 0 1
console.log(cbrt(64));                // cube root 
// math.log2, math.log10