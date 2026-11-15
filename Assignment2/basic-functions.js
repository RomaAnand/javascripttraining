/*
## Exercise 1: Basic Functions - Account Data Generator

**Scenario:** Write small helper functions for generating banking customer data.

Create a file called `basic-functions.js`.

**Requirements:**
1. Write `generateAccountId(firstName, lastName)` that returns the two names lowercased and joined, e.g. `"johndoe"`.
2. Write `generateEmail(firstName, lastName)` that returns `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com` ``.
3. Write `generateTempPin(seed)` that returns `seed + "00"` (e.g. `"42" -> "4200"`).
4. Call each function with `"John"`, `"Doe"` (and `"42"` for the pin) and print the results.
*/

console.log("===== Exercise 1: Basic Functions - Account Data Generator =====");
// 1. Generate Account ID
function generateAccountId(firstName, lastName) {
  return firstName.toLowerCase() + lastName.toLowerCase();
}

// 2. Generate Email
function generateEmail(firstName, lastName) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com`;
}

// 3. Generate Temporary PIN
function generateTempPin(seed) {
  return seed + "00";
}

// 4. Call functions and print results
console.log(`Account ID: ${generateAccountId("John", "Doe")}`);
console.log(`Email: ${generateEmail("John", "Doe")}`);
console.log(`Temp PIN: ${generateTempPin(1234)}`);
