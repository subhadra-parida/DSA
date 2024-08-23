hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;




// Function Hoisting.....
greet(); // Output: "Hello, world!"

function greet() {
    console.log("Hello, world!");
}


// Interpreted Hoisting ............
var a; // Declaration is hoisted
console.log(a); // Output: undefined
a = 5; // Initialization
console.log(a); // Output: 5