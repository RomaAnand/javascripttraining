/*
## Exercise 1: Claims Queue Array
**Scenario:** Create an array to store today's incoming claim types.
Create a file called `claims-queue.js`.
**Requirements:**
1. Create an array called `claimTypes` with these 5 values:
   - "Auto collision"
   - "Water damage"
   - "Theft claim"
   - "Fire damage"
   - "Liability claim"
2. Print the following:
   - The complete array
   - Total number of claims
   - The first claim
   - The last claim (use `.length`, not a hard-coded index!)
*/
console.log("===== Exercise 1: Claims Queue Array =====");
claimTypes = [
  "Auto collision",
  "Water damage",
  "Theft claim",
  "Fire damage",
  "Liability claim",
];

console.log("The complete array: ", claimTypes); // The complete array
console.log("Total number of claims: ", claimTypes.length); // Total number of claims
console.log("The first array: ", claimTypes[0]); // The first claim
console.log("The last claims: ", claimTypes[claimTypes.length - 1]); // The last claim

/*
## Exercise 2: Claims Processing Tracker

**Scenario:** Build a claim decisions array dynamically as claims get processed.

Create a file called `claims-tracker.js`.

**Requirements:**
1. Create an empty array called `claimDecisions`
2. "Process" 5 claims by adding these decisions one by one:
   - "APPROVED"
   - "APPROVED"
   - "REJECTED"
   - "APPROVED"
   - "PENDING_DOCS"
3. After adding each decision, print: "Claim X processed: [DECISION]"
4. At the end, print:
   - Total claims processed
   - The complete decisions array
   - Check if "REJECTED" exists (using `indexOf`)
*/
console.log("===== Exercise 2: Claims Processing Tracker =====");
claimDecisions = [
  "APPROVED",
  "APPROVED",
  "REJECTED",
  "APPROVED",
  "PENDING_DOCS",
];
for (i = 1; i <= claimDecisions.length; i++) {
  console.log(`Claim ${[i]} processed : ${claimDecisions[i - 1]}`);
}
console.log("Processing Summary:");
// Total claims processed
console.log("Total claim processed :", claimDecisions.length);
// The complete decisions array
console.log("Decisions :", claimDecisions);
let index = claimDecisions.indexOf("REJECTED");
if (index != -1) {
  console.log("Contains rejections: Yes (found at index ${index})");
} else {
  console.log("Contains rejections: No ");
}
