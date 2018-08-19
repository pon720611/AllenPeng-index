var myVideo;

document.addEventListener("DOMContentLoaded", function()
{
    myVideo = document.getElementById("video1");
    myVideo.controls = false;
    myVideo.autoplay = true;
});

function playPause()
{
    if(myVideo.paused == true)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig()
{
    myVideo.width = 800;
}

function makeSmall()
{
    myVideo.width = 320;
}

function makeNormal()
{
    myVideo.width = 420;
}