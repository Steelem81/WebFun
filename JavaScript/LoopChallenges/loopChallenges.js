function odds(range) {
    for (let i = 0; i <= range; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// odds(20);

function divByThree(range) {
    for (let i=range; i > 0; i--) {
        if (i %3 == 0) {
            console.log(i);
        }
    }
}

// divByThree(100);

function printSequence(sequence) {
    for(let i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
    }
}

// printSequence([4, 2.5, 1, 0.5, -2, -3.5]);

function sigma(start, end) {
    var sum = 0;
    for(let i = start; i <= end; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
// sigma(1, 100);

function factorial(start, end) {
    var product = 1;
    for(let i = start; i <= end; i++) {
        product = product * i;
    }
    console.log(product);
}

factorial(1, 12);

