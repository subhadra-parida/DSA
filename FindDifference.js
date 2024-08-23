function findCommonDifference(arithmeticProgress) {
    if (arithmeticProgress.length < 2) {
        throw new Error("The sequence must contain at least two terms.");
    }
    
    // Calculate the common difference using the first two terms
    const commonDifference = arithmeticProgress[1] - arithmeticProgress[0];
    
    // Optionally verify the common difference for all consecutive terms
    for (let i = 2; i < arithmeticProgress.length; i++) {
        if (arithmeticProgress[i] - arithmeticProgress[i - 1] !== commonDifference) {
            throw new Error("The sequence is not an arithmetic progression.");
        }
    }
    
    return commonDifference;
}

// Example usage:
const arithmeticProgress = [20, 40, 60, 80, 100];
const commonDifference = findCommonDifference(arithmeticProgress);
console.log(`The common difference is: ${commonDifference}`); // Output: The common difference is: 10
