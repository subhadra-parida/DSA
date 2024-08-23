// Concatenation:- 
let str1 = "Hello, ";
let str2 = "World!";
let result = str1 + str2; // "Hello, World!"
console.log(result);

//Substring Extraction:-
let str = "Hello, World!";
let subStr = str.substring(0, 8);
console.log(subStr);

// Splitting a string:-
let names = "Subha, Barsha, Lisa";
let name = names.split(",")
console.log(name);

// Replacing a Substring:-
let sentense = "Hello, World!";
let newSentense = sentense.replace("Everyone", "Everyone");
console.log(newSentense);

// Trimming Whitespace:-
let trim = "   Hello, Subha!   ";
let trimStr =  trim.trim();
console.log(trim)

// Converting Case:-
let string = "Hello, Everyone!";
let upperStr = string.toUpperCase();
let lowerStr = string.toLowerCase();
console.log(upperStr);
console.log(lowerStr)

// Checking for Substring is there or not :-
let world = "Hey, Subha!";
let newWorld = world.includes("Hey") ;
console.log(newWorld);

// Finding Index of a SubString :- 
let index = "Hey, Everyone!";
let findIndex = index.indexOf("Everyone");
console.log(findIndex);

// Extracting Characters:-
let char = "Hello, Everyone!"
let characters = char.charAt(4);
console.log(characters);

