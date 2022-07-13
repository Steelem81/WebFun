console.log("page loaded...");
vid = document.getElementById("vid")

function playVid(element) {
    console.log('playing vid');
    vid.play();
    // element.play();
}

function pauseVid(element) {
    vid.pause();
}