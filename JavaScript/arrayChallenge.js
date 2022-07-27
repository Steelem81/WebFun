//1. Always hungry given an array, log yummy each time the value is "food" and if "food" is not present then "I'm hungry"

function alwaysHungry(arr) {
if(arr.includes("food")){
for(let i=0; i<arr.length; i++) {
    if(arr[i] == "food"){
        console.log("yummy")
    }
    }
}else {
    console.log("I'm hungry")
}
}

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
        filteredArr.push(arr[i])
    }
}
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    var avg = sum/arr.length;
    var count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]> avg){
            count++;
        }
    }
    return count;
}

// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from

    var fibArr = [0, 1];
    for(let i=0; i<n-2; i++){
        fibArr.push(fibArr[i] + fibArr[i+1])
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
