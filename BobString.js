function minOperationsToAnagram(S, T) {
    const countS = {};
    const countT = {};

    // Count characters in S
    for (let char of S) {
        countS[char] = (countS[char] || 0) + 1;
    }

    // Count characters in T
    for (let char of T) {
        countT[char] = (countT[char] || 0) + 1;
    }

    console.log("Count for S:", countS);
    console.log("Count for T:", countT);

    // Calculate the number of operations needed
    let operations = 0;

    // Compare frequencies for each character in S
    for (let char in countS) {
        if (countT[char]) {
            operations += Math.abs(countS[char] - countT[char]);
        } else {
            operations += countS[char];
        }
    }

    // Handle remaining characters in T that were not in S
    for (let char in countT) {
        if (!countS[char]) {
            operations += countT[char];
        }
    }

    console.log(`Operations needed to make '${S}' and '${T}' anagrams: ${operations}`);
    return operations;
}

// Example Usage
const testCases = [
    { S: 'abc', T: 'cba' },
    { S: 'abd', T: 'acb' },
    { S: 'talentpad', T: 'talepdapd' },
    { S: 'code', T: 'road' }
];

testCases.forEach(({ S, T }, index) => {
    console.log(`Test case ${index + 1}: S = ${S}, T = ${T}`);
    console.log(`Result: ${minOperationsToAnagram(S, T)}`);
    console.log('---------------------------------');
});
