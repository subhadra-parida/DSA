const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input and compute the factorial
rl.question("Enter any number = ", (input) => {
    let N = parseInt(input.trim());  // Convert input to an integer
    let fact = 1;

    // Loop to calculate factorial
    while (N > 0) {
        fact *= N;
        N--;
    }

    // Print the factorial
    console.log(fact);

    rl.close();
});
