function mycount(arr){
    let count = 0;
    // Iterate through all pairs
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
    }
    return count
}
let arr = [1, 2, 3, 1, 1, 3];
console.log(mycount(arr));  // Output: 4


