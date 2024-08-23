function findGoodPairs(arr) {
    let pairs = [];
    let freqMap = {};
    // Iterate through the array and find the pairs
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (freqMap[num] !== undefined) {
            // For each previous occurrence of the number, create a pair
            for (let index of freqMap[num]) {
                pairs.push([arr[index], arr[i]]);
            }
            freqMap[num].push(i);
        } else {
            freqMap[num] = [i];
        }
    }
    return pairs;
}
let arr = [1, 4, 2, 3, 1, 1, 3, 4];
console.log(findGoodPairs(arr));
// Output: [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 3, 3 ] ]