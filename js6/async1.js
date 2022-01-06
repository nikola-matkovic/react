//sync code example 

function someFunct(){
    console.log("we are in function");
    console.log("Hello");
}

console.log("start");

someFunct();

console.log("end");

//async code example 

console.log("\nstart2");

setTimeout(()=>{
    console.log("We are int the timeout");
}, 2000);

console.log("end2");
