/*
## Exercise 6: Function Expressions
**Scenario:** Write two transfer checks, one as a function declaration and one as a function expression, and see how they differ.
Create a file called `function-expressions.js`.
**Requirements:**
1. Write a function **declaration** `isWithinLimit(amount)` that returns `true` if the amount is less than `10000`.
2. Write a function **expression** `const isPositiveAmount = function (amount) { ... };` that returns `true` if the amount is greater than 0.
3. At the very top of the file, above both functions, print `isWithinLimit(5000)`. Run it. Does it work?
4. Below both functions, print `isPositiveAmount(5000)`, `isPositiveAmount(-200)` and `isWithinLimit(25000)`.
5. Now move the `isPositiveAmount(5000)` line to the top of the file and run again. Write the error message as a comment, then move the line back.

*/

// Step 3: Function declaration can be called before it is defined
console.log("isWithinLimit(5000):", isWithinLimit(5000));

// Step 1: Function declaration
function isWithinLimit(amount) {
  return amount < 10000;
}

// Step 2: Function expression
const isPositiveAmount = function (amount) {
  return amount > 0;
};

// Step 4: Test both functions
console.log("isPositiveAmount(5000):", isPositiveAmount(5000));
console.log("isPositiveAmount(-200):", isPositiveAmount(-200));
console.log("isWithinLimit(25000):", isWithinLimit(25000));

/*
Step 5:
If you move this line to the top of the file:

console.log("isPositiveAmount(5000):", isPositiveAmount(5000));

You will get an error similar to:

ReferenceError: Cannot access 'isPositiveAmount' before initialization

This happens because function expressions assigned to const
are not hoisted in the same way as function declarations.
*/
