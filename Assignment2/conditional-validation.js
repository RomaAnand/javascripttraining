/*
## Exercise 1: Customer Email Validation

**Scenario:** Before approving a new account, validate the customer's email address.

**Requirements:**
1. Create a variable `email` with value `"customer@examplebank.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"Valid email format"`
   - If no, print: `"Invalid email format"`
   */
var email = "customer@examplebank.com";
if (email.includes("@") && email.includes(".")) {
  console.log("Valid email format");
} else {
  console.log("Invalid email format");
}
