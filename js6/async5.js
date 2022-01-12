console.log("start");

function loginUser(email, password){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("now we have the data");
            resolve({userEmail: email});
        }, 200);
    })
}

function getUserVideos(email){
    return new Promise((resolve, reject ) =>{
        setTimeout(()  =>{
            resolve(["video1", "video2", "video3"]);
        },200)
    })
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Title of the video");
        },200);
    });
}

loginUser("nikola", "iloveyou")
    .then(user => getUserVideos(user.userEmail))
    .then(videos  => videoDetails(videos[0]))
    .then(details => console.log(details));

console.log("end");