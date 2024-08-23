// Function to map character to index based on the custom order
function charToIndex(C, baseChar) {
    return C.charCodeAt(0) - baseChar.charCodeAt(0);
}

// Function to verify if the words are in lexicographic order
function isLexicographic(key, n, words) {
    let decorder = new Array(26).fill(0);

    // Populate the decorder array based on the custom key
    for (let i = 0; i < key.length; i++) {
        decorder[charToIndex(key[i], 'A')] = i;
    }

    // Compare words pairwise to check their order
    for (let i = 0; i < n - 1; i++) {
        let j = 0;
        while (j < words[i].length && j < words[i + 1].length && words[i][j] === words[i + 1][j]) {
            j++;
        }

        // If the first word is fully traversed, it's considered smaller
        if (j === words[i].length) {
            continue;
        }

        // If the second word is fully traversed, the order is wrong
        if (j === words[i + 1].length) {
            return 0;
        }

        // Compare the characters based on their decorder index
        if (decorder[charToIndex(words[i][j], 'A')] > decorder[charToIndex(words[i + 1][j], 'A')]) {
            return 0;
        }
    }
    return 1;
}

// Input section (You can use prompt for browser-based input)
const prompt = require('prompt-sync')();
let key = prompt("Enter any word (custom alphabet order): ").toUpperCase();
let n = parseInt(prompt("Enter any number of words to check: "));
let words = [];

// Collecting the words to check
for (let i = 0; i < n; i++) {
    words.push(prompt(`Enter word ${i + 1}: `).toUpperCase());
}

// Check if the words are in lexicographic order according to the given key
let result = isLexicographic(key, n, words);
console.log(result);
