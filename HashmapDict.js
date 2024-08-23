// Function to create a new Map
function createMap() {
    return new Map();
}

// Function to add key-value pairs to the Map
function addKeyValuePair(myMap, key, value) {
    myMap.set(key, value);
}

// Function to retrieve a value by key
function getValueByKey(myMap, key) {
    return myMap.get(key);
}

// Function to check if a key exists in the Map
function hasKey(myMap, key) {
    return myMap.has(key);
}

// Function to delete a key-value pair from the Map
function deleteKey(myMap, key) {
    myMap.delete(key);
}

// Function to get the size of the Map
function getMapSize(myMap) {
    return myMap.size;
}

// Function to iterate over key-value pairs in the Map
function iterateMap(myMap) {
    myMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

// Function to clear all key-value pairs from the Map
function clearMap(myMap) {
    myMap.clear();
}

// Example Usage

// Create a new Map
let myMap = createMap();

// Adding key-value pairs to the Map
addKeyValuePair(myMap, 'name', 'Alice');
addKeyValuePair(myMap, 'age', 30);
addKeyValuePair(myMap, 'profession', 'Developer');

// Retrieving values by key
console.log(getValueByKey(myMap, 'name'));       // Output: Alice
console.log(getValueByKey(myMap, 'age'));        // Output: 30

// Checking if a key exists in the Map
console.log(hasKey(myMap, 'profession')); // Output: true
console.log(hasKey(myMap, 'salary'));     // Output: false

// Removing a key-value pair from the Map
deleteKey(myMap, 'age');
console.log(hasKey(myMap, 'age'));        // Output: false

// Getting the size of the Map (number of key-value pairs)
console.log(getMapSize(myMap));           // Output: 2

// Iterating over key-value pairs in the Map
iterateMap(myMap);
// Output:
// name: Alice
// profession: Developer

// Clearing all key-value pairs from the Map
clearMap(myMap);
console.log(getMapSize(myMap));           // Output: 0
