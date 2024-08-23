const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];
  
const sortedData = data.sort((a, b) => b.age - a.age);


console.log(sortedData);
// Output: [{ id: 3, name: "Charlie", age: 35 }, { id: 2, name: "Bob", age: 30 }, { id: 1, name: "Alice", age: 25 }]
