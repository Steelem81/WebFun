// for each number that is a multiple of 3 print Fizz
// for each number that is a multiple of 5 print Buzz
//for numbers that are a multiple of both 3 and 5 print FizzBuzz

function fizzbuzz(range) {
    for (let i = 0; i < range; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz");
        }else if(i % 5 === 0) {
            console.log("Buzz");
        }else if (i % 3 === 0){
            console.log("FizzBuzz");
        }else {
            console.log(i);
        }

    }
}

fizzbuzz(100);