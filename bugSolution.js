function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(add(5, 3)); // Output: 8
  console.log(subtract(10, 4)); // Output: 6
  console.log(multiply(7, 2)); // Output: 14
  console.log(divide(9, 3)); // Output: 3
  console.log(divide(9, 0)); //This will be caught
} catch (error) {
  console.error('An error occurred:', error.message);
}
console.log("Program continues to execute")