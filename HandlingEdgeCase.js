// 1. Empty Inputs

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([])); // Output: 0


// 2. Single Element Input

function maxSubArraySum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0]; // Handle single element array

  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

console.log(maxSubArraySum([5])); // Output: 5


// 3. Large Inputs

function countSubarraysWithSum(arr, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
  
    map.set(0, 1);
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (map.has(sum - k)) {
        count += map.get(sum - k);
      }
  
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  
    return count;
  }
  
  // Test with a large array
  const largeArr = Array(1000000).fill(1);
  console.log(countSubarraysWithSum(largeArr, 500000)); // Handles large input efficiently
  