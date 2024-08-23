// function maxSumSubarray(arr, k) {
//     let maxSum = 0;
//     let windowSum = 0;
  
//     // Calculate the sum of the first window of size k
//     for (let i = 0; i < k; i++) {
//       windowSum += arr[i];
//     }
  
//     // Slide the window across the array
//     maxSum = windowSum;
//     for (let i = k; i < arr.length; i++) {
//       windowSum += arr[i] - arr[i - k];
//       maxSum = Math.max(maxSum, windowSum);
//     }
  
//     return maxSum;
//   }
  
//   const arr = [2, 1, 5, 1, 3, 2];
//   const k = 3;
//   console.log(maxSumSubarray(arr, k)); // Output: 9 (from subarray [5, 1, 3])
  

  function maxSumFixedSizeWindow(arr, k) {
    if (arr.length < k) return null;

    let maxSum = 0;
    let windowSum = 0;

    // Compute the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window from start to end
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6];
const k = 3;
console.log(maxSumFixedSizeWindow(arr, k)); // Output: 15
