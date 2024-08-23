// function countPairsWithTargetSum(arr, target) {
//     let count = 0;
//     let numMap = new Map(); 
//     for (let num of arr) {
//         let complement = target - num;
//         if (numMap.has(complement)) {
//             count += numMap.get(complement);
//         }
//         numMap.set(num, (numMap.get(num) || 0) + 1);
//     }
//     return count;
// }
// let arr = [1, 5, 7, -1, 5];
// let target = 6;
// console.log(countPairsWithTargetSum(arr, target));  // Output: 3


let arr = [1, 2, 3, 1, 9, 8];
let target = 2;
let count = 0;
let numMap = new Map(); 
for (let num of arr) {
    let complement = target - num;
    if (numMap.has(complement)) {
        count += numMap.get(complement);
    }
    numMap.set(num, (numMap.get(num) || 0) + 1);
}
console.log(count);  // Output: 2