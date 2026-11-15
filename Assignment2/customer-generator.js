/*
## Exercise 2: Complete Customer Generator

**Scenario:** Combine your helper functions from Exercise 1 into one function that builds a full customer record.

Create a file called `customer-generator.js` (re-declare the three helper functions from Exercise 1 at the top).

**Requirements:**
1. Write `generateCustomer(firstName, lastName)` that returns an object with:
   - `name` - full name
   - `email` - from `generateEmail`
   - `accountId` - from `generateAccountId`
   - `balance` - `0`
   - `isActive` - `true`
2. Generate two customers and print both objects.
*/
console.log("===== Exercise 2: Complete Customer Generator =====");
// Helper function 1
function generateEmail(firstName, lastName) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com`;
}

// Helper function 2
function generateAccountId() {
  return Math.floor(Math.random() * 100000);
}

// Helper function 3
function generateFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Main function
function generateCustomer(firstName, lastName) {
  return {
    name1: generateFullName(firstName, lastName),
    email: generateEmail(firstName, lastName),
    accountId: generateAccountId(),
    balance: 0,
    isActive: true,
  };
}

// Generate two customers and print both objects
const customer1 = generateCustomer("roma", "anand");
const customer2 = generateCustomer("john", "doe");

console.log(customer1);
console.log(customer2);
