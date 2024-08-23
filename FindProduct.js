function productModulo(arr, modulo) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
        product = (product * arr[i]) % modulo;
    }
    
    return product;
}
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const N = parseInt(input[0].trim());
const arr = input[1].trim().split(' ').map(Number);

// Define the modulo value
const MODULO = 1000000007;

// Calculate and print the result
console.log(productModulo(arr, MODULO));
