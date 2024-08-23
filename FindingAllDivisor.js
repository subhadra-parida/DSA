function findDivisors(n) {
    const divisors = new Set();
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.add(i);
            divisors.add(n / i);
        }
    }
    return Array.from(divisors).sort((a, b) => a - b);
}

// Example usage
const num = 28;
console.log(findDivisors(num)); // Output: [1, 2, 4, 7, 14, 28]