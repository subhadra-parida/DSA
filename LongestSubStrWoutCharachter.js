/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} The length of the longest substring without repeating characters.
 */
function lengthOfLongestSubstring(s) {
    let start = 0; // Starting index of the sliding window
    let maxLength = 0; // Maximum length of substring found
    let charSet = new Set(); // Set to track unique characters

    for (let end = 0; end < s.length; end++) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
