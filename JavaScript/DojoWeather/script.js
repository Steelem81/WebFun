var cities = document.querySelectorAll(".cities > li");
// var temps = document.querySelectorAll(".high, .low");

// console.log(temps)

cities.forEach( item => {item.addEventListener("click", function(){
    alert("Loading weather report for " + item.textContent);
})})

function fToC(temp){
    if (!Number.isInteger(temp)){
        temp = parseInt(temp)
    } 
    newTemp = Math.round((temp-32)*(5/9))
    return newTemp
}

function cToF(temp){
    if(!Number.isInteger(temp)){
        temp = parseInt(temp)
    }
    newTemp = Math.round((temp *(9/5)) + 32)
    return newTemp
}

document.querySelector("#temp-choice").addEventListener("change", function(e){
    if (this.value == "F"){
        document.querySelectorAll(".high, .low").forEach( item => 
            item.childNodes[0].textContent = cToF(item.childNodes[0].textContent)
            )
        } else if (this.value == "C") {
            document.querySelectorAll(".high, .low").forEach( item => 
                item.childNodes[0].textContent = fToC(item.childNodes[0].textContent)
            )
        }
    }
)

document.querySelector(".accept").addEventListener("click", function() {
    this.parentNode.remove()
})