function longestCommonPrefix(strs) {
    // Handle the edge case where there are no strings
    if (strs.length === 0) {
        return "";
    }
    
    // Initialize the prefix as an empty string
    let prefix = "";
    
    // Find the length of the shortest string in the array
    let minLength = Math.min(...strs.map(s => s.length));
    
    // Compare characters column by column up to the length of the shortest string
    for (let i = 0; i < minLength; i++) {
        // Get the character at the current index from the first string
        let char = strs[0][i];
        
        // Compare this character with the same index character from other strings
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        
        // If all strings have the same character at this index, add it to the prefix
        prefix += char;
    }
    
    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Output: ""
