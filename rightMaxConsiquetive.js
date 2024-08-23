// function findMaxConsecutiveOnes(nums) {
//     let left = 0;
//     let zeroCount = 0;
//     let maxLength = 0;

//     for (let right = 0; right < nums.length; right++) {
//         if (nums[right] === 0) {
//             zeroCount++;
//         }
        
//         while (zeroCount > 1) {
//             if (nums[left] === 0) {
//                 zeroCount--;
//             }
//             left++;
//         }

//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }



function findMaxConsecutiveOnes(nums) {
    let start=0;
    let maxCount = 0;
    let lastZeroInd=0;
    let i = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            start = lastZeroInd+1;
            lastZeroInd = i;
            maxCount = Math.max(maxCount, i-start+1);
        }
    }
    maxCount = Math.max(maxCount, i-start+1);
    return maxCount;
}

const  nums = [7, 1, 5, 3, 6, 4];
console.log(findMaxConsecutiveOnes(nums))