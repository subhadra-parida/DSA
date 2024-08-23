function sumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i; // Add both divisors i and n/i if they are different
        }
    }
    return sum;
}

// Example usage
const num = 28;
console.log(sumOfDivisors(num)); // Output: 52
