# Unhandled Exception in JavaScript Calculator

This repository demonstrates a common error in JavaScript: unhandled exceptions. The `divide` function throws an error if the second argument is 0, causing the program to crash.  The solution shows how to handle this error gracefully using a try...catch block.

## Bug

The `bug.js` file contains the buggy code.  The `divide` function doesn't handle the case where the denominator is 0, resulting in an uncaught exception.

## Solution

The `bugSolution.js` file provides a solution by wrapping the `divide` function call in a `try...catch` block. This allows the program to continue running even if an error occurs, providing a more robust user experience.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to see the unhandled exception.
4. Run `node bugSolution.js` to see the solution implemented with error handling.