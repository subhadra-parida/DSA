var findMaxConsecutiveOnes = function(nums) {
    let count = 0; 
    let maxCount = 0; 
    for (let i of nums) {
        if (i === 1) {
            maxCount++; 
        } else {
            count = Math.max(count, maxCount); 
            maxCount = 0;  
        }
    }
    count = Math.max(count, maxCount);
    console.log( count)
};

function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;  // To store the maximum number of consecutive 1's
    let currentCount = 0;  // To count consecutive 1's in the current streak

    for (let num of nums) {
        if (num === 1) {
            currentCount++;  // Increment the count of consecutive 1's
        } else {
            maxCount = Math.max(maxCount, currentCount);  // Update maxCount if currentCount is greater
            currentCount = 0;  // Reset currentCount since we hit a 0
        }
    }

    // Check the last streak of 1's
    return Math.max(maxCount, currentCount);
}