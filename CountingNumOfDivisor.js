function countDivisors(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += 1;
            if (i !== n / i) count += 1; // Count both divisors i and n/i if they are different
        }
    }
    return count;
}

// Example usage
const num = 28;
console.log(countDivisors(num)); // Output: 6
