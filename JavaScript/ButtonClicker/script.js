function login(element){
    var logintext = element.innerText;
    if(logintext == 'Log In'){
        logintext = 'Log Out';
    } else if(logintext == 'Log Out'){
        logintext = 'Log In';
}   element.innerText = logintext;
}

function remove(element) {
    element.remove();
}
    