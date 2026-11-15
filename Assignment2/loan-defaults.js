/*
## Exercise 4: Default Parameters - Loan Application
**Scenario:** Most loan applications use standard terms, but some customers negotiate custom ones.
Create a file called `loan-defaults.js`.

**Requirements:**
1. Write `createLoanApplication(applicantName, amount = 5000, termMonths = 12)` that prints:
   ```
   Applicant: <applicantName>
   Amount: $<amount>
   Term: <termMonths> months
   ```
2. Call it four times:
   - With only `applicantName` (all defaults)
   - With `applicantName` and a custom `amount`
   - With `applicantName`, `amount`, and a custom `termMonths`
   - With all three fully specified

**Bonus:** Add these two lines and observe the output. Why does `""` not use the default but `undefined` does?
```javascript
createLoanApplication("Edge Case", "");        // empty string
createLoanApplication("Edge Case", undefined); // explicit undefined
*/

// Function with default parameters
function createLoanApplication(applicantName, amount = 5000, termMonths = 12) {
  console.log(`Applicant : ${applicantName}`);
  console.log(`Amount : ${amount}`);
  console.log(`Term : ${termMonths} months`);
  console.log("---------------------------");
}

// 1. Only applicantName (all defaults)
createLoanApplication("Roma Anand");

// 2. applicantName + custom amount
createLoanApplication("Roma Anand1", 10000);

// 3. applicantName + custom amount + custom termMonths
createLoanApplication("Roma Anand3", 10000, 24);
// 4. All three fully specified
createLoanApplication("Roma Anand", 10000, 36);

// Bonus examples
createLoanApplication("Edge Case", ""); // empty string for Amount
createLoanApplication("Edge Case", undefined); // explicit undefined
