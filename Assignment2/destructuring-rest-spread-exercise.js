/*
# Destructuring, Rest & Spread - Exercise

**Topics:** Spread in function calls, rest parameters, array and object destructuring
**File to Create:** `destructuring-rest-spread-exercise.js`

---

## Setup

Create a new file called `destructuring-rest-spread-exercise.js` in your training folder and run it with `node destructuring-rest-spread-exercise.js` as you go.

---

## Exercise 1: Spread Operator

1. **1a:** This function takes 3 individual numbers, not an array:
   ```javascript
   function addThree(a, b, c) {
       return a + b + c;
   }
   let visitCounts = [4, 7, 5];
   ```
   Call `addThree` twice: once the old way using `visitCounts[0]`, `visitCounts[1]`, `visitCounts[2]`, and once using spread to pass all three values from the array in one go.

2. **1b:** Given this array, use `Math.max()` and `Math.min()` with spread to find the longest and shortest wait time.
   ```javascript
   let waitTimes = [12, 45, 9, 30];
   ```

3. **1c:** Merge these two arrays into one, in order, using spread. Don't use `.concat()`.
   ```javascript
   let morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM"];
   let afternoonSlots = ["2:00 PM", "2:30 PM"];
   ```

4. **1d:** Spread this array into `console.log` so each department prints as its own separate argument, not as one array. Don't use `.join()` or a loop.
   ```javascript
   let departmentList = ["cardiology", "neurology", "pediatrics"];
   ```

5. **1e:** Build a new settings object from `defaultSettings`, but with `reminderCount` overridden to `2`. Don't mutate `defaultSettings` itself.
   ```javascript
   let defaultSettings = { slotDuration: 30, reminderCount: 0, remindersEnabled: true };
   ```

6. **1f:** This function takes 3 individual numbers:
   ```javascript
   function calculateRange(a, b, c) {
       return Math.max(a, b, c) - Math.min(a, b, c);
   }
   let checkupTimes = [12, 45, 9];
   ```
   Call it using spread to pass in all 3 numbers from `checkupTimes`.
*/

// destructuring-rest-spread-exercise.js

console.log("=== Exercise 1: Spread Operator ===");

// 1a
function addThree(a, b, c) {
  return a + b + c;
}

let visitCounts = [4, 7, 5];

console.log(
  "Without spread:",
  addThree(visitCounts[0], visitCounts[1], visitCounts[2]),
);

console.log("With spread:   ", addThree(...visitCounts));

// 1b
let waitTimes = [12, 45, 9, 30];

console.log("Longest wait: ", Math.max(...waitTimes), "min");
console.log("Shortest wait:", Math.min(...waitTimes), "min");

// 1c
let morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM"];
let afternoonSlots = ["2:00 PM", "2:30 PM"];

let mergedSlots = [...morningSlots, ...afternoonSlots];

console.log("Merged slots:", mergedSlots);

// 1d
let departmentList = ["cardiology", "neurology", "pediatrics"];

console.log(...departmentList);

// 1e
let defaultSettings = {
  slotDuration: 30,
  reminderCount: 0,
  remindersEnabled: true,
};

let newSettings = {
  ...defaultSettings,
  reminderCount: 2,
};

console.log(newSettings);
console.log(defaultSettings);

// 1f
function calculateRange(a, b, c) {
  return Math.max(a, b, c) - Math.min(a, b, c);
}

let checkupTimes = [12, 45, 9];

console.log("Range:", calculateRange(...checkupTimes));
/*
## Exercise 2: Rest Parameters

1. **2a:** Write a function `logResultsFixed(r1, r2, r3)` that prints `"Result 1: <r1>"`, `"Result 2: <r2>"`, `"Result 3: <r3>"`. Call it once with `("COMPLETED", "CANCELLED", "COMPLETED")`, then call it again adding `"RESCHEDULED"` as a 4th argument and observe that it's silently ignored.

2. **2b:** Write `logResults(...results)` using a rest parameter that:
   - Prints `"Number of results: <count>"`
   - Prints `"Results array: <results>"`
   - Uses `forEach` to print `"  Visit <n>: <result>"` for each one

   Call it once with `("COMPLETED", "CANCELLED", "COMPLETED")` and once with `("COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED")`.

3. **2c:** Write `sumVisitDurations(...durations)` that:
   - Prints `"Calculating sum of durations: <durations>"`
   - Uses `reduce` to calculate the total and the average (`.toFixed(2)`)
   - Prints both, and returns the total

   Call it once with 3 durations `(30, 45, 20)` and once with 6 `(15, 30, 45, 60, 20, 25)`.

4. **2d:** Write `processBatch(batchName, department, ...patientIds)`, mixing regular parameters with a rest parameter. It should print the batch name, the department, a numbered list of patient IDs, and the total count.

   Call it with:
   ```javascript
   processBatch("Morning Batch", "Cardiology", "PT-1001", "PT-1002", "PT-1003");
   processBatch("Afternoon Batch", "Dental", "PT-2001", "PT-2002", "PT-2003", "PT-2004", "PT-2005");
   ```

5. **2e:** Write `validateAll(...conditions)` that checks each condition in order, prints `"  ✓ Condition <n> passed"` for a truthy one, or `"  ✗ Condition <n> failed!"` and returns `false` immediately on the first falsy one. If every condition passes, print `"✓ All conditions passed!"` and return `true`.

   Test it with:
   ```javascript
   let patient = {
       email: "aisha.khan@example.com",
       age: 25,
       insuranceId: "INS-12345678",
       active: true
   };

   validateAll(
       patient.email.includes("@"),
       patient.age >= 18,
       patient.insuranceId.length >= 8,
       patient.active === true
   );

   let patient2 = { email: "invalid-email", age: 15, insuranceId: "INS-1", active: false };
   validateAll(patient2.email.includes("@"), patient2.age >= 18);
*/
console.log("=== Exercise 2: Rest Parameters ===\n");

// =====================================
// 2a: Fixed Parameters
// =====================================

function logResultsFixed(r1, r2, r3) {
  console.log(`Result 1: ${r1}`);
  console.log(`Result 2: ${r2}`);
  console.log(`Result 3: ${r3}`);
}

console.log("With 3 arguments (works):");
logResultsFixed("COMPLETED", "CANCELLED", "COMPLETED");

console.log("\nWith 4 arguments (4th is ignored!):");
logResultsFixed("COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED");
console.log("  ^ 'RESCHEDULED' was ignored!");

// =====================================
// 2b: Rest Parameter
// =====================================

function logResults(...results) {
  console.log(`Number of results: ${results.length}`);
  console.log(`Results array: ${results}`);

  results.forEach((result, index) => {
    console.log(`  Visit ${index + 1}: ${result}`);
  });
}

console.log("\nWith 3 arguments:");
logResults("COMPLETED", "CANCELLED", "COMPLETED");

console.log("\nWith 5 arguments (all handled!):");
logResults("COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED");

// =====================================
// 2c: Sum Visit Durations
// =====================================

function sumVisitDurations(...durations) {
  console.log(`Calculating sum of durations: ${durations}`);

  const total = durations.reduce((sum, duration) => {
    return sum + duration;
  }, 0);

  const average = (total / durations.length).toFixed(2);

  console.log(`  Total: ${total}`);
  console.log(`  Average: ${average}`);

  return total;
}

console.log("\nSum of 3 durations:");
sumVisitDurations(30, 45, 20);

console.log("\nSum of 6 durations:");
sumVisitDurations(15, 30, 45, 60, 20, 25);

// =====================================
// 2d: Mixed Parameters + Rest Parameter
// =====================================

function processBatch(batchName, department, ...patientIds) {
  console.log(`Batch: ${batchName}`);
  console.log(`Department: ${department}`);
  console.log("Patients to process:");

  patientIds.forEach((patientId, index) => {
    console.log(`  ${index + 1}. ${patientId}`);
  });

  console.log(`Total: ${patientIds.length} patients`);
}

console.log("\nProcessing 3 patients:");
processBatch("Morning Batch", "Cardiology", "PT-1001", "PT-1002", "PT-1003");

console.log("\nProcessing 5 patients:");
processBatch(
  "Afternoon Batch",
  "Dental",
  "PT-2001",
  "PT-2002",
  "PT-2003",
  "PT-2004",
  "PT-2005",
);

// =====================================
// 2e: Validate All Conditions
// =====================================

function validateAll(...conditions) {
  console.log(`Checking ${conditions.length} conditions:`);

  for (let i = 0; i < conditions.length; i++) {
    if (conditions[i]) {
      console.log(`  ✓ Condition ${i + 1} passed`);
    } else {
      console.log(`  ✗ Condition ${i + 1} failed!`);
      return false;
    }
  }

  console.log("✓ All conditions passed!");
  return true;
}

let patient = {
  email: "aisha.khan@example.com",
  age: 25,
  insuranceId: "INS-12345678",
  active: true,
};

console.log("\nValidating valid patient:");
validateAll(
  patient.email.includes("@"),
  patient.age >= 18,
  patient.insuranceId.length >= 8,
  patient.active === true,
);

let patient2 = {
  email: "invalid-email",
  age: 15,
  insuranceId: "INS-1",
  active: false,
};

console.log("\nValidating invalid patient:");
validateAll(patient2.email.includes("@"), patient2.age >= 18);

/*
## Exercise 3: Destructuring

1. **3a - Array destructuring.** Given:
   ```javascript
   let visitDurations = [45, 38, 32, 41, 25];
   ```
   - Pull the first three values into `longest`, `second`, `third` using array destructuring.
   - Use comma-skipping to pull only the third value into a variable called `thirdLongest`.
   - Use destructuring combined with rest to grab the first value into `topDuration` and collect everything else into `remainingDurations`.

2. **3b - Object destructuring.** Given:
   ```javascript
   let visitRecord = { visitType: "Annual Physical", status: "COMPLETED", duration: 30, department: "General Medicine" };
   ```
   - Destructure `visitType`, `status`, and `duration` into variables with the same names.
   - Destructure again, renaming `visitType` to `recordType`, `status` to `recordStatus`, and `department` to `recordDept`.
   - Destructure a third time, pulling `visitType` (renamed to `vType`) plus two keys that don't exist on the object, `followUps` (default `0`) and `reminderLimit` (default `3`).

3. **3c - Destructuring in function parameters.** Write two versions of a function that prints a visit summary:
   - `reportVisitOld(record)` using plain dot notation (`record.visitType`, etc.)
   - `reportVisit({ visitType: rType, status: rStatus, duration: rDuration, department: rDept = "Unknown" })` destructuring directly in the parameter list, with a default for `department`

   Call both with `visitRecord` from 3b.

4. **3d - Nested destructuring.** Given:
   ```javascript
   let apiResponse = { status: 200, body: { patientId: "PT-3001", appointmentId: "APT-7001", outcome: "COMPLETED" } };
   ```
   In one statement, destructure `status` (renamed to `httpStatus`) at the top level, and `patientId` plus `outcome` from the nested `body` object.
*/
console.log("=== 3a - Array Destructuring ===");

let visitDurations = [45, 38, 32, 41, 25];

// Without destructuring
let first = visitDurations[0];
let secondOld = visitDurations[1];
let thirdOld = visitDurations[2];

console.log("Without destructuring:");
console.log(`  first=${first}, second=${secondOld}, third=${thirdOld}`);

// With destructuring
let [longest, second, third] = visitDurations;

console.log("\nWith destructuring:");
console.log(`  longest=${longest}, second=${second}, third=${third}`);

// Skip first two values
let [, , thirdLongest] = visitDurations;
console.log(`  thirdLongest only (skipped first two): ${thirdLongest}`);

// Destructuring with rest
console.log("\n--- Array destructuring + rest ---");

let [topDuration, ...remainingDurations] = visitDurations;

console.log(`  topDuration:        ${topDuration}`);
console.log(`  remainingDurations: ${remainingDurations}`);

console.log("\n=== 3b - Object Destructuring ===");

let visitRecord = {
  visitType: "Annual Physical",
  status: "COMPLETED",
  duration: 30,
  department: "General Medicine",
};

// Without destructuring
console.log("Without destructuring:");
console.log(`  ${visitRecord.visitType}: ${visitRecord.status}`);

// Basic destructuring
let { visitType, status, duration } = visitRecord;

console.log("\nWith destructuring:");
console.log(`  ${visitType}: ${status} (${duration}m)`);

// Renaming while destructuring
console.log("\n--- Renaming while destructuring ---");

let {
  visitType: recordType,
  status: recordStatus,
  department: recordDept,
} = visitRecord;

console.log(`  recordType:   ${recordType}`);
console.log(`  recordStatus: ${recordStatus}`);
console.log(`  recordDept:   ${recordDept}`);

// Default values
console.log("\n--- Default values in destructuring ---");

let { visitType: vType, followUps = 0, reminderLimit = 3 } = visitRecord;

console.log(`  vType:        ${vType}`);
console.log(`  followUps:    ${followUps} <- key not in object, default used`);
console.log(
  `  reminderLimit:${reminderLimit} <- key not in object, default used`,
);

console.log("\n=== 3c - Destructuring in Function Parameters ===");

// Old way
function reportVisitOld(record) {
  console.log(`${record.visitType}: ${record.status} (${record.duration}m)`);
}

// Destructuring in parameters
function reportVisit({
  visitType: rType,
  status: rStatus,
  duration: rDuration,
  department: rDept = "Unknown",
}) {
  console.log(`${rType}: ${rStatus} (${rDuration}m in ${rDept})`);
}

console.log("Old way (dot notation inside function):");
reportVisitOld(visitRecord);

console.log("With param destructuring:");
reportVisit(visitRecord);

console.log("\n=== 3d - Nested Destructuring ===");

let apiResponse = {
  status: 200,
  body: {
    patientId: "PT-3001",
    appointmentId: "APT-7001",
    outcome: "COMPLETED",
  },
};

// Nested destructuring
let {
  status: httpStatus,
  body: { patientId, outcome },
} = apiResponse;

console.log("API response (nested destructuring):");
console.log(`  httpStatus:    ${httpStatus}`);
console.log(`  patientId:     ${patientId}`);
console.log(`  outcome:       ${outcome}`);

/*
## Tricky Questions

1. If you write `function f(a, b, ...rest) {}` and call `f(1, 2, 3, 4, 5)`, 
what does `rest` contain?
Answer - Parameter assignment:

a = 1
b = 2
...rest collects all remaining arguments so rest = [3, 4, 5]
function f(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

f(1, 2, 3, 4, 5);
Otput-
1
2
[3, 4, 5]
2. Can you use a rest parameter anywhere in a parameter list, or does it 
have to be last? What happens if you try `function f(...rest, last) {}`?
Ans - Yes. A rest parameter must be the last parameter in the function definition.
Remember: ...rest = "gather everything that's left" → therefore it must always 
be the final parameter.
Quick Rule ✅
function example(a, b, ...rest) {} // Valid
function example(...rest) {}       // Valid
function example(...rest, a) {}    // ❌ SyntaxError
function example(a, ...rest, b) {} // ❌ SyntaxError

*/
