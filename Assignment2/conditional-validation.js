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

/*
**Tricky question:** What happens if you remove all the `break` statements? Predict before trying.

Answer - That means once a matching case is found, it executes that case and every case after it until 
the end of the switch

*/
/*## Exercise 7: Switch - Grouping Cases (Multiple Cases, One Outcome)

**Scenario:** Map transaction response codes to categories. Some codes share the same message - use fall-through to group them.

**Requirements:**

```javascript
let responseCode = 51;

switch (responseCode) {
    case 0:
        // "Approved - transaction successful"
        break;
    case 8:
        // "Approved - ID verification required"
        break;
    case 5:
    case 51:
    case 61:
        // Group these: "Declined - insufficient funds or over limit"
        // (5, 51, and 61 all print the same message - intentional fall-through)
        break;
    case 54:
        // "Declined - expired card"
        break;
    case 91:
    case 96:
    case 99:
        // Group these: "System error - try again later"
        break;
    default:
        // "Unknown response code: " + responseCode
}
*/
console.log(
  "=====Exercise 7: Switch - Grouping Cases (Multiple Cases, One Outcome)=====",
);
let responseCode = 100;
switch (responseCode) {
  case 0:
    console.log(
      `Response Code is ${responseCode} = Approved - transaction successful`,
    );
    break;
  case 8:
    console.log(
      `Response Code is ${responseCode} = Approved - ID verification required`,
    );
    break;
  case 5:
  case 51:
  case 61:
    console.log(
      `Response Code is ${responseCode} = Declined - insufficient funds or over limit`,
    );
    break;
  case 54:
    console.log(`Response Code is ${responseCode} = Declined - expired card`);
    break;
  case 91:
  case 96:
  case 99:
    console.log(
      `Response Code is ${responseCode} = System error - try again later`,
    );
    break;
  default:
    console.log(`Response Code is ${responseCode} = Unknown response code`);
}

/*
## Exercise 8: Switch with Expressions

`switch` compares using `===`. So you can switch on any expression that produces a value, not just a plain variable.

### 8a: Switch on a computed value (grade buckets)

Instead of `if (score >= 90)` chains, compute the "tens digit" and switch on that:

```javascript
let score = 85;

// Math.floor(85 / 10) = 8 -> maps to grade B
switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}
*/

console.log("===== ## Exercise 8a: Switch with Expressions=====");
let scores = [100, 95, 85, 75, 65, 55];
for (let score of scores) {
  console.log(`Score: ${score}`);

  //Math.floor(85 / 10) = 8
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      console.log("Grade: A (Excellent)");
      break;
    case 8:
      console.log("Grade: B (Good)");
      break;
    case 7:
      console.log("Grade: C (Average)");
      break;
    case 6:
      console.log("Grade: D (Pass)");
      break;
    default:
      console.log("Grade: F (Fail)");
  }
  console.log("----------------");
}
/*
### 8b: Switch on `true` - range matching with expressions

When you need range checks but want switch style, switch on the literal `true` 
and put the condition in each `case`:

```javascript
let processingTime = 3.5;  // transaction processing time in seconds

switch (true) {
    case processingTime < 1:
        console.log("Instant processing");
        break;
    case processingTime < 3:
        console.log("Fast processing");
        break;
    case processingTime < 6:
        console.log("Acceptable - flag if this becomes a trend");
        break;
    default:
        console.log("Slow - investigate the delay");
}
```

**Test with processing times:** `0.5`, `2`, `4`, `8`

**Note:** `switch(true)` works because each `case` expression evaluates to `true` or `false`. The first `case` that equals `true` wins. Use this sparingly - if-else-if is often clearer for ranges.
*/
console.log(
  "=====Exercise 8b Using Switch case: Switch on `true` - range matching with expressions=====",
);
let processingTime = 8;
// transaction processing time in seconds, tested with time 0.5`, `2`, `4`, `8`

switch (true) {
  case processingTime < 1:
    console.log("Instant processing");
    break;
  case processingTime < 3:
    console.log("Fast processing");
    break;
  case processingTime < 6:
    console.log("Acceptable - flag if this becomes a trend");
    break;
  default:
    console.log("Slow - investigate the delay");
}
console.log(
  "=====Exercise 8b Using if-else-if : Switch on `true` - range matching with expressions=====",
);
let processingTime1 = 0.5;
if (processingTime1 < 1) {
  console.log("Instant processing");
} else if (processingTime1 < 3) {
  console.log("Fast processing");
} else if (processingTime1 < 6) {
  console.log("Acceptable - flag if this becomes a trend");
} else {
  console.log("Slow - investigate the delay");
}
/*
### 8c: Tricky questions - predict the output before running

**Snippet A - what prints?**
```javascript
*/
console.log(
  "===Exercise 8c: Tricky questions - predict the output before running=== ",
);
let alertPriority = "high";

switch (alertPriority) {
  case "High":
    console.log("Urgent");
    break;
  case "high":
    console.log("Also urgent"); // Correct Answer
    break;
} /*

**Snippet B - what prints?**
```javascript
*/
console.log("===Snippet B - what prints===");
let x = 2;

switch (x) {
  case 1:
    console.log("one"); // break statement missing
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("other");
}
/*
 **Snippet C - switch vs if-else, which should you choose?**

| Situation | Better choice |
|---|---|
| Matching one variable against 5+ fixed string/number values | `switch` |
| Checking ranges (`score >= 80`) | `if-else-if` |
| Multiple conditions combined with `&&` or `||` | `if-else-if` |
| Grouping several values with the same outcome | `switch` (fall-through) |
| Just two outcomes | ternary or `if-else` |
*/
console.log(
  "===Snippet C using Switch case - switch vs if-else, which should you choose?===",
);
let score5 = 85;

if (score5 >= 90) {
  console.log("Grade A");
} else if (score5 >= 80) {
  console.log("Grade B");
} else if (score5 >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

console.log(
  "===Snippet C using if-else case - switch vs if-else, which should you choose?===",
);
let day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Weekday");
}
