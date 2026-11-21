/*
## Exercise 3: Policyholder Email Management

**Scenario:** Manage policyholder emails using array methods.

Create a file called `policyholder-emails.js`.

**Requirements:**
1. Create an array called `policyholderEmails` with these initial values:
   - "alice@example.com"
   - "ben@example.com"
   - "chloe@example.com"

2. Perform these operations:
   - Print initial emails and count
   - Add "dev@example.com" to the END
   - Add "admin@example.com" to the BEGINNING
   - Remove the last email
   - Remove the first email
   - Print final emails and count
*/

let policyholderEmails = [
  "alice@example.com",
  "ben@example.com",
  "chloe@example.com",
];
console.log("===== Exercise 3: Policyholder Email Management =====");
// Print initial emails and count
console.log("Initial emails: ", policyholderEmails);
console.log("Count:", policyholderEmails.length);
//Add "dev@example.com" to the END
policyholderEmails.push("dev@example.com");
console.log("After adding dev@example.com to end:", policyholderEmails);
//Add "admin@example.com" to the BEGINNING
policyholderEmails.unshift("admin@example.com");
console.log("After adding admin@example.com to beginning:", policyholderEmails);
// Remove the last email
policyholderEmails.pop();
console.log("After removing last email:", policyholderEmails);
// Remove the first email
policyholderEmails.shift();
console.log("After removing first email:", policyholderEmails);
// Print final emails and count
console.log("Final emails: ", policyholderEmails);
console.log("Count:", policyholderEmails.length);
