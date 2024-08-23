function isPalindrome(s) {
    if (s === s.split('').reverse().join('')) {
        return "YES";
    } else {
        return "NO";
    }
}
const input = 'aba'; 
console.log(isPalindrome(input));
