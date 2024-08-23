function findAPValues() {
    // Given sequence: 28, 22, x, y, 4
    // Common difference d
    const d = 22 - 28; // which is -6

    // Calculate x
    const x = 22 + d; // x = 22 - 6

    // Calculate y
    const y = x + d; // y = 16 - 6

    return { x, y };
}

// Example usage:
const result = findAPValues();
console.log(`x = ${result.x}`); // Output: x = 16
console.log(`y = ${result.y}`); // Output: y = 10
