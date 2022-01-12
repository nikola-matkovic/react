//promise

const promise = new Promise((resolve, rejact) =>{
    setTimeout(() => {
        console.log("Got the user");
        //resolve({user: "ed"});
        rejact(new Error("User not logged in"));
    }, 1000);
});

promise.then(user => {
    console.log(user);
}).catch(err => console.log(err));