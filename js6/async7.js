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

async  function displayUser(){
    try{
        const user = await loginUser("Džoni", 123);
        const videos = await getUserVideos(user.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    }
    catch(err){
        console.log(err); 
    }
}
displayUser();
console.log("end");