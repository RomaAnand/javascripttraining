/*
## Exercise 5: slice() - Extract Claim Batches
**Scenario:** You have one day's full claim queue, but you often want to work with just a slice of it (e.g. "morning batch only") without touching the original array.
Create a file called `claim-batches-slice.js`.
**Requirements:**
1. Create an array called `claimQueue` with these 6 values:
   - "Morning1", "Morning2", "Morning3", "Afternoon1", "Afternoon2", "Afternoon3"

2. Using `.slice()` (never modify `claimQueue` directly), create:
   - `morningBatch` - the first 3 claims
   - `afternoonBatch` - the last 3 claims (use a **negative** index)
   - `middleBatch` - claims from index 2 up to (not including) index 5
   - `queueCopy` - a full copy of the entire array (call `.slice()` with no arguments)

3. Print each new array, and finish by printing `claimQueue` again to prove the original array is still unchanged.

**Example Output:**
```
Full Claim Queue: [ 'Morning1', 'Morning2', 'Morning3', 'Afternoon1', 'Afternoon2', 'Afternoon3' ]

Morning batch only (first 3): [ 'Morning1', 'Morning2', 'Morning3' ]
Afternoon batch only (last 3): [ 'Afternoon1', 'Afternoon2', 'Afternoon3' ]
Middle batch (index 2-5): [ 'Morning3', 'Afternoon1', 'Afternoon2' ]
Full copy: [ 'Morning1', 'Morning2', 'Morning3', 'Afternoon1', 'Afternoon2', 'Afternoon3' ]

Original claim queue unchanged: [ 'Morning1', 'Morning2', 'Morning3', 'Afternoon1', 'Afternoon2', 'Afternoon3' ]
*/
console.log("===== Exercise 5: slice() - Extract Claim Batches =====");
let claimQueue = [
  "Morning1",
  "Morning2",
  "Morning3",
  "Afternoon1",
  "Afternoon2",
  "Afternoon3",
];
console.log("Full Claim Queue: ", claimQueue);
// the first 3 claims
const morningBatch = claimQueue.slice(0, 3);
// Last 3 claims using a negative index
const afternoonBatch = claimQueue.slice(-3);
// Index 2 up to (not including) index 5
const middleBatch = claimQueue.slice(2, 5);
// Full copy of the array
const queueCopy = claimQueue.slice();

console.log("Morning batch only (first 3): ", morningBatch);
console.log("Afternoon batch only (first 3): ", afternoonBatch);
console.log("Middle batch only (first 3): ", middleBatch);
console.log("Full copy: ", queueCopy);
console.log("Original claim queue unchanged: ", queueCopy);
