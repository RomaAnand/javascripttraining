/*
## Exercise 1: Track Unique Claim Regions

A batch import brings in a list of regions that filed claims this week, but the list has duplicates because two regional offices sent overlapping reports. You need to deduplicate it and check membership efficiently.

1. Create a Set called `claimRegions` and add these values one at a time:
   `"north"`, `"south"`, `"north"`, `"east"`, `"south"`, `"west"`

2. Print the size of the Set. It should be 4, not 6.

3. Use `has()` to check whether `"north"` and `"central"` are in the Set and print the results.

4. Delete `"west"` with `delete()`. Capture the return value and print it. Then try to delete `"central"` (which was never added) and print that return value too.

5. Print the final Set and its size.
*/
// Exercise 1: Track Unique Claim Regions

const claimRegions = new Set();

// Add values one at a time
claimRegions.add("north");
claimRegions.add("south");
claimRegions.add("north");
claimRegions.add("east");
claimRegions.add("south");
claimRegions.add("west");

// Print size
console.log(`Size (with duplicates ignored): ${claimRegions.size}`);

// Check membership
console.log(`Has 'north': ${claimRegions.has("north")}`);
console.log(`Has 'central': ${claimRegions.has("central")}`);

// Delete values
let deletedWest = claimRegions.delete("west");
console.log(`delete('west') returned: ${deletedWest}`);

let deletedCentral = claimRegions.delete("central");
console.log(`delete('central') returned: ${deletedCentral}`);

// Print final Set and size
console.log("Final claimRegions:", claimRegions);
console.log(`Final size: ${claimRegions.size}`);
