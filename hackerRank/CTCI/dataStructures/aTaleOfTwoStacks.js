// Queues: A Tale of Two Stacks
// A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.
//
// A basic queue has the following operations:
//
// Enqueue: add a new element to the end of the queue.
// Dequeue: remove the element from the front of the queue and return it.
// In this challenge, you must first implement a queue using two stacks. Then process  queries, where each query is one of the following  types:
//
// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

// Sample Input
// ['1 42', '2', '1 14', '3', '1 28', '3', '1 60', '1 78', '2', '2']
// Sample Output
// 14
// 14


var queue = (input) => {
  let result = [];
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    let action = item[0];
    let element = item.split(" ")[1];

    switch (action) {
      case '1':
        stack.push(element);
        break;
      case '2':
        stack.reverse().pop();
        stack.reverse();
        // dequeue(stack);
        break;
      case '3':
        result.push(stack[0], "\n");
        break;
    }
  }

  return result;
};
/* For those who believe reverse().pop() is 'cheating' */ 
var dequeue = (main) => {
  let temp = [];
  while (main.length > 1) {
    temp.push(main.pop());
  }
  main.pop();

  while (temp.length > 0) {
    main.push(temp.pop());
  }
  return main;
};
