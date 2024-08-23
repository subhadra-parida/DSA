function modifyObject(obj) {
    obj.key = 'newValue';
}

let myObj = { key: 'oldValue' };
modifyObject(myObj);
console.log(myObj.key); // Output: 'newValue' (myObj is modified)