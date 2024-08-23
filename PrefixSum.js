const arr = [1, 2, 3, 4, 5];
const prefix = new Array(arr.length);

prefix[0] = arr[0]; // Initialize the first element

for (let i = 1; i < arr.length; i++) {
  prefix[i] = prefix[i - 1] + arr[i];
}

console.log(prefix); // Output: [1, 3, 6, 10, 15]