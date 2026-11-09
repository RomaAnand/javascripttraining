/*
## Exercise 1: Policy Types Array

**Scenario:** Create an array to store the policy types your agency offers.

**Requirements:**
1. Create an array called `policyTypes` with these 4 values:
   - "Auto"
   - "Home"
   - "Life"
   - "Health"

2. Print the following:
   - The complete array
   - Total number of policy types
   - The first policy type
   - The last policy type (use `.length`, not a hard-coded index!)
*/

let policyTypes = ["Auto", "Home", "Life", "Health"];
console.log("The complete array: ", policyTypes); // Print the complete array
console.log("Total number of policy types: ", policyTypes.length); // Print Total number of policy types
console.log("The first policy type: ", policyTypes[0]); // Print the first policy type
console.log("The last policy type: ", policyTypes.length - 1); // Print the Total number of policy types -1,
// Wrong Output : The last policy type:  3
console.log("The last policy type: ", policyTypes[policyTypes.length - 1]);
// Correct Output : The last policy type:  Health

/*
## Exercise 2: Claim Status by Index
**Scenario:** Print each claim status in order, and show how index position relates 
to array position.
**Requirements:**
1. Create an array called `claimStatuses` with these 4 values:
   - "Filed"
   - "Under Review"
   - "Approved"
   - "Rejected"
2. Print each value using its index (`claimStatuses[0]`, `claimStatuses[1]`, etc.), labeled 
with its position (1st, 2nd, 3rd, 4th)
3. Print a small table showing position, index, and value lined up, similar to the zero-indexed 
visualization from class
*/
const claimStatuses = ["Filed", "Under Review", "Approved", "Rejected"];
console.log("Array 1st position: ", claimStatuses[0]);
console.log("Array 2nd position: ", claimStatuses[1]);
console.log("Array 3rd position: ", claimStatuses[2]);
console.log("Array 4th position: ", claimStatuses[3]);

console.log("\nPosition:  1st           2nd             3rd           4th");
console.log("Index:     0             1               2             3 ");
console.log(
  `Value:     ${claimStatuses[0]}         ${claimStatuses[1]}    ${claimStatuses[2]}      ${claimStatuses[3]}`,
);

/*
Output :-
Array 1st position:  Filed
Array 2nd position:  Under Review
Array 3rd position:  Approved
Array 4th position:  Rejected

Position:  1st           2nd             3rd           4th
Index:     0             1               2             3 
Value:     Filed         Under Review    Approved      Rejected

*/

/*
## Exercise 3: Premium Amounts and Length

**Scenario:** Store premium payment amounts and calculate values using `.length`.

**Requirements:**
1. Create an array called `premiumAmounts` with these 4 values:
   - 450, 620, 380, 900

2. Calculate and print:
   - Total number of premium amounts
   - First amount
   - Last amount (using `.length - 1`, not a hard-coded index)
   - Second-to-last amount (using `.length - 2`)
*/

const premiumAmounts = [450, 620, 380, 900];
console.log(`Total number of premium amounts: ${premiumAmounts.length}`); // Print Total number of premium amounts
console.log(`First amount: ${premiumAmounts[0]}`); // Print First amount
console.log(`Last amount: ${premiumAmounts[premiumAmounts.length - 1]}`); // Print  Last amount using `.length - 1`
console.log(`Last amount: ${premiumAmounts[premiumAmounts.length - 2]}`); // Print  2nd Last amount using `.length - 2`

/*## Tricky Questions

1. An arra2. If `array.length` is 4, what index does `array[array.length]` point to? 
Is that a valid element?
array has 4 elements, so its valid indexes are 0 through 3. 
What happens if you access `array[4]` - does it crash, or return something else?

Answer - • array[array.length] evaluates to array[4] because array.length is 4.
• It does not point to a valid element. Valid indices for an array of length 4 are 0, 1, 2, and 3.
JavaScript arrays are objects. If a property/index doesn't exist,
JavaScript returns undefined instead of crashing.
*/
