
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}
function longestPalindrome(s) {
    if (s.length === 0) return "";

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes (single character center)
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for even-length palindromes (two-character center)
        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

// Example usage
console.log(longestPalindrome("babad")); // Output: "bab" (or "aba")
console.log(longestPalindrome("cbbd"));  // Output: "bb"
