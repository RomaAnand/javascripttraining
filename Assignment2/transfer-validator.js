/*
## Exercise 5: Guard Clauses - Transfer Validator

**Scenario:** Refactor a nested validation function into flat guard clauses.

Create a file called `transfer-validator.js`.

**Requirements:**
1. Write the nested version first, `validateTransferNested(fromAccount, toAccount, amount)`:
   - If `fromAccount` is not empty, check `toAccount` is not empty, then check `amount > 0`, returning `"Transfer valid"` only if all three pass. Return the appropriate error message at whichever level fails (`"From account required"`, `"To account required"`, `"Amount must be positive"`).
2. Then write the guard-clause version, `validateTransferEarly(fromAccount, toAccount, amount)`, using early returns instead of nesting.
3. Test both with: `("", "ACC-2002", 500)`, `("ACC-1001", "", 500)`, `("ACC-1001", "ACC-2002", -50)`, `("ACC-1001", "ACC-2002", 500)`.
*/

//Why guard clauses are preferred: Instead of nesting multiple if statements,
// you check invalid conditions first and return immediately.
// This keeps the code flatter, easier to read, and easier to maintain.

console.log("=== Exercise 5: Guard Clauses - Transfer Validator ===");

// Nested version
function validateTransferNested(fromAccount, toAccount, amount) {
  if (fromAccount !== "") {
    if (toAccount !== "") {
      if (amount > 0) {
        return "Transfer valid";
      } else {
        return "Amount must be positive";
      }
    } else {
      return "To account required";
    }
  } else {
    return "From account required";
  }
}

// Guard clause version
function validateTransferEarly(fromAccount, toAccount, amount) {
  if (fromAccount === "") {
    return "From account required";
  }

  if (toAccount === "") {
    return "To account required";
  }

  if (amount <= 0) {
    return "Amount must be positive";
  }

  return "Transfer valid";
}

// Test cases
console.log(
  `validateTransferNested("", "ACC-2002", 500) → ${validateTransferNested("", "ACC-2002", 500)}`,
);
console.log(
  `validateTransferNested("ACC-1001", "", 500) → ${validateTransferNested("ACC-1001", "", 500)}`,
);
console.log(
  `validateTransferNested("ACC-1001", "ACC-2002", -50) → ${validateTransferNested("ACC-1001", "ACC-2002", -50)}`,
);
console.log(
  `validateTransferNested("ACC-1001", "ACC-2002", 500) → ${validateTransferNested("ACC-1001", "ACC-2002", 500)}`,
);

console.log("");

console.log(
  `validateTransferEarly("", "ACC-2002", 500) → ${validateTransferEarly("", "ACC-2002", 500)}`,
);
console.log(
  `validateTransferEarly("ACC-1001", "", 500) → ${validateTransferEarly("ACC-1001", "", 500)}`,
);
console.log(
  `validateTransferEarly("ACC-1001", "ACC-2002", -50) → ${validateTransferEarly("ACC-1001", "ACC-2002", -50)}`,
);
console.log(
  `validateTransferEarly("ACC-1001", "ACC-2002", 500) → ${validateTransferEarly("ACC-1001", "ACC-2002", 500)}`,
);
