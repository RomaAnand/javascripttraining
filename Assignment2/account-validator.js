/*
## Exercise 3: Account Number Validator

**Scenario:** Write a function that checks whether an account number looks valid.

Create a file called `account-validator.js`.

**Requirements:**
1. Write `validateAccountNumber(accountNumber)` that returns `"VALID"` if the string starts with `"ACC-"` and has exactly 7 characters total, otherwise `"INVALID"`.
2. Test it with `"ACC-1001"`, `"ACC-1"`, and `"1001"`.
*/

console.log("===== Exercise 3: Account Number Validator =====");
function validateAccountNumber(accountNumber) {
  if (accountNumber.startsWith("ACC-") && accountNumber.length === 8) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

// Test cases
console.log(`ACC-1001: ${validateAccountNumber("ACC-1001")}`);
console.log(`ACC-1: ${validateAccountNumber("ACC-1")}`);
console.log(`1001: ${validateAccountNumber("1001")}`);
