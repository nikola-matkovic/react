//geting data from  server2 (simulation)

console.log("start");

function loginUser(email, password, callback){
    setTimeout(()=>{
        console.log("now we have the data");
        callback({userEmail: email});
    }, 500);
}

function getUserVideos(email, callback){
    setTimeout(() => {
        callback(["video1", "video2", "video3"]);
    }, 1000);
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback("Title of the video");
    }, 1000);
}

const user = loginUser("nikola@matkovic.com", 123456, user=>{
    console.log(user);
    getUserVideos(user.userEmail, (videos) =>{
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        }); 
    });
});

console.log("end");