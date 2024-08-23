function printAllSubarrays(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      console.log(`Subarray from ${i} to ${j}:`, arr.slice(i, j + 1), `Sum: ${sum}`);
    }
  }
}

const arr = [1, 2, 3];
printAllSubarrays(arr);
