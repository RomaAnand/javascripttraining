/*
## Exercise 6: splice() - Modify Claim List In Place

**Scenario:** Unlike `slice()`, `splice()` changes the array it's called on - perfect for editing a claim list directly as it moves through review.

Create a file called `claim-list-splice.js`.

**Requirements:**
1. Create an array called `claimList` with these 5 values:
   - "Auto", "Home", "Health", "Travel", "Life"
2. Print the original array.
3. **Step 1 - Remove:** Use `.splice()` to remove 1 element at index 2. Store the removed element(s) in a variable and print them, then print the array afterward.
4. **Step 2 - Insert:** Use `.splice()` to insert `"Marine"` and `"Pet"` at index 1, **without removing anything** (`deleteCount` of 0). Print the array afterward.
5. **Step 3 - Replace:** Use `.splice()` to replace the element at index 0 with `"Motorcycle"`. Print the array afterward.
6. Print a closing note confirming that `.splice()` modifies the original array (unlike `.slice()`).
*/
let claimList = ["Auto", "Home", "Health", "Travel", "Life"];
console.log(claimList);
//3. **Step 1 - Remove:** Use `.splice()` to remove 1 element at index 2. - .splice(2,1)
// Store the removed element(s) in a variable and print them, then print
// the array afterward.
// 3. Step 1 - Remove
let removedClaims = claimList.splice(2, 1);
console.log("Removed element(s):", removedClaims);
console.log("After removal:", claimList);
//4. **Step 2 - Insert:** Use `.splice()` to insert `"Marine"` and `"Pet"` at index 1,
// **without removing anything** (`deleteCount` of 0). Print the array afterward.
// 4. Step 2 - Insert
claimList.splice(1, 0, "Marine", "Pet");
console.log("After insertion:", claimList);
// 5. Step 3 - Replace the element at index 0 with `"Motorcycle"`.
// Print the array afterward.
claimList.splice(0, 1, "Motorcycle");
console.log("After replacement:", claimList);
// // 6. Closing note
console.log("Key point: splice() modifies the ORIGINAL array!", claimList);

/*
## Tricky Questions

1. `indexOf()` and `includes()` both use strict equality (`===`) to compare.
 Does `claimDecisions.indexOf("approved")` (lowercase) find an entry stored 
 as `"APPROVED"`?
2. If you assign to an index far beyond an array's current length
 (e.g. `arr[10] = "x"` on an empty array), what happens to the indexes you skipped,
  and what does `.length` become?

  Ans -
  1.No.

2. Both indexOf() and includes() use strict equality (===), 
so string comparisons are case-sensitive.

*/
