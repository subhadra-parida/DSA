function countGoodPairs(arr) {
    let count = 0;
    let freqMap = {};
    // Iterate through the array and count the pairs
    for (let num of arr) {
        if (freqMap[num]) {
            count += freqMap[num];
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }
    }

    return count;
}

// Example usage:
let arr = [1, 2, 3, 1, 3, 1, 9];
console.log(countGoodPairs(arr));  // Output: 4


