//take the pressed number
//apply the set operator
//to the next pressed number

var calcs = []
var operator = ''
var mathFunctions = {
    '+': function(x,y){ return x + y; },
    '-': function(x,y){ return x - y; },
    '*': function(x,y){ return x * y; },
    '/': function(x,y){ return x / y; },
}

function clr(){
    calcs = []
    updateDisplay(0)
}

function setOP(op){
    operator = op
    if(calcs.length > 3){
        calculate()
    }
}

function updateDisplay(display){
    document.querySelector("#display").innerHTML = display
}

function press(num){
    calcs.push(num)
    updateDisplay(num)
    
}

function calculate(){
    console.log(calcs.at(-2))
    result = mathFunctions[operator](calcs.at(-2), calcs.at(-1))
    console.log(result)
    calcs.push(result)
    console.log(calcs)
    updateDisplay(result)
}

