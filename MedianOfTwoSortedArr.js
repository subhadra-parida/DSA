/**
 * Finds the median of two sorted arrays.
 * @param {number[]} nums1 - First sorted array.
 * @param {number[]} nums2 - Second sorted array.
 * @return {number} The median of the two sorted arrays.
 */
function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;

        // i is too small, increase it
        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        }
        // i is too big, decrease it
        else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        }
        // i is perfect
        else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2.0;
        }
    }

    throw new Error("Input arrays are not sorted or have invalid lengths.");
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
console.log("Median:", findMedianSortedArrays(nums1, nums2)); // Output: 2.00000

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log("Median:", findMedianSortedArrays(nums3, nums4)); // Output: 2.50000
