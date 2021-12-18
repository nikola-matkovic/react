let a = 5; 
let b = 1;
console.log(`${a} & ${b} = ${a & b}`);
console.log(`${a} | ${b} = ${a | b}`);
console.log(`${a} ^ ${b} = ${a ^ b}`);
console.log(`~${a} = ${~a}`);
console.log(`${a} << ${b} = ${a << b}`);
console.log(`${a} >> ${b} = ${a >> b}`);
console.log(`${a} >>> ${b} = ${a >>> b}`);

let n = 8
if(n & 1)  
  console.log("odd");
else
  console.log("even");
if (!(n & (n-1))){
  console.log("number is  power of 2 ");
}
a = 5;
b = 6;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b);