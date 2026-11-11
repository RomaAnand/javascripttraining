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
console.log("========Exercise 1: Customer Email Validation========");
var email = "customer@examplebank.com";
if (email.includes("@") && email.includes(".")) {
  console.log("Valid email format");
} else {
  console.log("Invalid email format");
}

/*
## Exercise 2: Transaction Status Categorizer

**Scenario:** Your banking system returns different transaction statuses. 
You need to display appropriate messages.

**Requirements:**
1. Create a variable `transactionStatus` with value `"APPROVED"`
2. Write an if-else-if statement that handles:
   - `"APPROVED"` -> Print: `"Transaction approved"`
   - `"DECLINED"` -> Print: `"Transaction declined - contact your bank"`
   - `"PENDING"` -> Print: `"Transaction pending"`
   - Anything else -> Print: `"Unknown transaction status"`

**Test Cases:**
Try running your code with each of these values:
- `"APPROVED"`
- `"DECLINED"`
- `"PENDING"`
- `"ON_HOLD"`

*/
console.log("=====Exercise 2: Transaction Status Categorizer=====");
var transactionStatus = "APPROVED";
if (transactionStatus === "APPROVED") {
  console.log("Transaction Status: " + transactionStatus);
  console.log("Transaction approved");
} else if (transactionStatus === "PENDING") {
  console.log("Transaction Status: " + transactionStatus);
  console.log("Transaction pending");
} else if (transactionStatus === "DECLINED") {
  console.log("Transaction Status: " + transactionStatus);
  console.log("Transaction declined - contact your bank");
} else {
  console.log("Transaction Status: " + transactionStatus);
  console.log("Unknown transaction status");
}

/*
## Exercise 3: Online Banking Password Strength Checker

**Scenario:** Validate password strength when a customer registers for online banking.

**Requirements:**
1. Create a variable `portalPassword` with value `"Bank@123"`
2. Write an if-else-if statement that checks password length:
   - Less than 6 characters -> `"Weak password - too short"`
   - Less than 10 characters -> `"Medium password strength"`
   - 10 or more characters -> `"Strong password"`
*/
console.log(
  "========Exercise 3: Online Banking Password Strength Checker========",
);
var portalPassword = "Bank@123";
if (portalPassword.length < 6) {
  console.log("Weak password - too short");
} else if (portalPassword.length < 10) {
  console.log("Medium password strength");
} else {
  console.log("Strong password");
}

/*

## Exercise 4: Loan Risk Score Grading

**Scenario:** Convert loan application risk scores to letter grades.

**Requirements:**
1. Create a variable `score` with value `85`
2. Write an if-else-if statement that assigns grades:
   - 90 or above -> `"Grade: A (Excellent)"`
   - 80-89 -> `"Grade: B (Good)"`
   - 70-79 -> `"Grade: C (Average)"`
   - 60-69 -> `"Grade: D (Pass)"`
   - Below 60 -> `"Grade: F (Fail)"`
*/
console.log("========Exercise 4: Loan Risk Score Grading========");
var score = 90;
if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score >= 80) {
  console.log("Grade: B (Good)");
} else if (score >= 70) {
  console.log("Grade: C (Average)");
} else if (score >= 60) {
  console.log("Grade: D (Pass)");
} else {
  console.log("Grade: F (Fail)");
}

/*
## Exercise 6: Switch - Basic Value Matching

**Scenario:** Exercise 2 used if-else-if to handle transaction statuses. 
Rewrite it using `switch` and notice how much cleaner it reads when matching 
one variable against several fixed values.

**Requirements:**
1. Create a variable `transactionStatus` with value `"DECLINED"`
2. Use a `switch` statement to print:
   - `"APPROVED"` -> `"Transaction approved"`
   - `"DECLINED"` -> `"Transaction declined - contact your bank"`
   - `"PENDING"` -> `"Transaction pending"`
   - `"ON_HOLD"` -> `"Transaction on hold - review required"`
   - anything else -> `"Unknown transaction status"`

**Starter template:**
```javascript
let transactionStatus = "DECLINED";

switch (transactionStatus) {
    case "APPROVED":
        // your code
        break;
    // add remaining cases
}
*/
console.log("========Exercise 6: Switch - Basic Value Matching========");
let transactionStatus1 = "DECLINED";
switch (transactionStatus1) {
  case "APPROVED":
    console.log("Transaction approved");
    break;
  case "DECLINED":
    console.log("Transaction declined - contact your bank");
    break;
  case "PENDING":
    console.log("Transaction pending");
    break;
  case "ON_HOLD":
    console.log("Transaction on hold - review required");
    break;
  default:
    console.log("Unknown transaction status");
}
