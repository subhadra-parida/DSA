

function factorial(N) {
    let fact = 1;
    while (N > 0) {
        fact *= N;
        N--;
    }
    return fact;
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    const N = parseInt(line.trim());  
    console.log(factorial(N));        
    rl.close();                     
});
