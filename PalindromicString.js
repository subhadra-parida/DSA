function isPalindrome(s) {
    return s === s.split('').reverse().join('') ? 'YES' : 'NO';
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(isPalindrome(input.trim()));
    rl.close();
});
