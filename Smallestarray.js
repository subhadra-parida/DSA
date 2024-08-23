function smallestSubarrayWithSum(arr, s) {
    let minLength = Infinity;
    let windowSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      windowSum += arr[end];
  
      while (windowSum >= s) {
        minLength = Math.min(minLength, end - start + 1);
        windowSum -= arr[start];
        start++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  const arr = [2, 3, 1, 2, 4, 3];
  const s = 7;
  console.log(smallestSubarrayWithSum(arr, s)); // Output: 2 ([4, 3])
  