class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead; // Pointer to the current node in the result list
    let carry = 0; // Carry for addition
  
    // Traverse both lists until both are exhausted
    while (l1 !== null || l2 !== null || carry !== 0) {
      // Get the values from the current nodes of both lists, if available
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
  
      // Calculate the sum of the two digits plus carry
      let sum = x + y + carry;
  
      // Update the carry for the next digit
      carry = Math.floor(sum / 10);
  
      // Create a new node with the digit value (sum % 10)
      current.next = new ListNode(sum % 10);
      
      // Move the current pointer to the next node
      current = current.next;
  
      // Move to the next nodes in l1 and l2 if available
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    return dummyHead.next;
  }
  function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  // Utility function to convert a linked list to an array
  function listToArray(node) {
    let arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
  
  // Example usage
  let l1 = arrayToList([2, 4, 3]);
  let l2 = arrayToList([5, 6, 4]);
  
  let result = addTwoNumbers(l1, l2);
  console.log(listToArray(result)); // Output: [7, 0, 8]
  