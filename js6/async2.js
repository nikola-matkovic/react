//geting data from  server (simulation)

console.log("start");

function loginUser(email, password){
    setTimeout(()=>{
        console.log("now we have the data");
        return {userEmail: email};
    }, 500);
}

const user = loginUser("nikola@matkovic.com", 123456);
console.log(user); //undefined;


console.log("end")
