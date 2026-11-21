/*
## Exercise 4: Premium Amounts Analysis

**Scenario:** Store and analyze a batch of premium payment amounts.

Create a file called `premium-analysis.js`.

**Requirements:**
1. Create an array called `premiumAmounts` with these values:
   - 850, 1200, 640, 990, 1450, 720, 1100

2. Calculate and print:
   - Total number of amounts
   - First amount
   - Last amount
   - Check if amount 990 exists in the array
*/

let premiumAmounts = [850, 1200, 640, 990, 1450, 720, 1100];
// Total number of amounts
console.log("Amounts :", premiumAmounts);
console.log("Total amounts:", premiumAmounts.length);
// First amount
console.log("First amount:", premiumAmounts[0]);
// last amount
console.log("Last amount: ", premiumAmounts[premiumAmounts.length - 1]);
// Check if amount 990 exists in the array
let index990 = premiumAmounts.indexOf(990);
console.log(
  `Amount 990 found:${index990 !== -1 ? "Yes" : "No"} (at index ${index990})`,
);
let index500 = premiumAmounts.indexOf(500);
console.log(
  `Amount 500 found:${index500 !== -1 ? "Yes" : "No"} (index: ${index500})`,
);
