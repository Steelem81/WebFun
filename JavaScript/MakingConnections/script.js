var editProfile = document.getElementById("edit-profile-link");



function updateConnectionCounts(){
    var connectionsCount = document.querySelectorAll("#connections-card > div.user-line");
    var connectionsReqCount = document.querySelectorAll("#connections-req-card > div.user-line");
    
    document.getElementById("connection-requests").innerHTML = connectionsReqCount.length;
    document.getElementById("connections-count").innerHTML = connectionsCount.length;  
}

updateConnectionCounts();

editProfile.addEventListener("click", function() {
    document.getElementById("profile-name").innerHTML = "Jeff Steele";
});

document.querySelectorAll('img.accept-circle, img.reject-circle').forEach(item => {
    item.addEventListener('click', function(b) {
        this.parentElement.parentElement.remove()
        updateConnectionCounts();
    })
})

document.querySelectorAll('img.accept-circle').forEach(item => {
    item.addEventListener('click', function() {
        user = this.closest(".user-line")
        user.children[1].remove()
        document.getElementById("connections-card").appendChild(user);

        updateConnectionCounts();
    });
});
