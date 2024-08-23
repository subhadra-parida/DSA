function countSubarraysWithSum(arr, k) {
    const map = new Map();
    let count = 0;
    let sum = 0;
  
    map.set(0, 1); // To handle the case where the subarray starts from index 0
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (map.has(sum - k)) {
        count += map.get(sum - k);
      }
  
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  
    return count;
  }
  
  const arr = [1, 1, 1];
  const k = 2;
  console.log(countSubarraysWithSum(arr, k)); // Output: 2 ([1, 1] and [1, 1])
  