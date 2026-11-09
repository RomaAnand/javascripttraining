/*
## Exercise 4: Truthy/Falsy Checks

**Scenario:** Apply truthy/falsy rules to realistic checks, including the classic traps.

Create a file called `truthy-falsy-checks.js`.

**Requirements:**
1. Given `let complaintReason = "";`, write an if-else that prints `"Complaint on file"` or `"No complaint"` based on truthiness.
2. Given `let appointmentType;` (undefined), use `||` to default it to `"General Consultation"` and print the result.
3. Given `let symptoms = [];` (an empty array), write the **wrong** check (`if (symptoms)`) and show it incorrectly reports "has symptoms." Then write the **correct** check using `.length > 0`.
4. Given `let complications = 0;`, write the **wrong** check (`if (complications)`) and show it incorrectly reports "no complications" even when the count is a real, valid zero. Then write the **correct** check using `> 0`.
5. Given `let followUpDays = 0;` (0 means "follow up the same day"), default it to `7` using `||` and then using `??`. Print both and explain the difference in a comment.

**Example Output:**
```
No complaint

Appointment type: General Consultation

Wrong check on empty array: Has symptoms! (bug - array is truthy even when empty)
Correct check: No symptoms

Wrong check on zero: No complications (misleading - 0 is falsy)
Correct check: 0 complications recorded

Follow-up with ||: 7 days (wrong - 0 was a real value)
Follow-up with ??: 0 days (correct)

*/

//1. Given `let complaintReason = "";`,
// write an if-else that prints `"Complaint on file"` or `"No complaint"` based on truthiness.

let complaintReason = ""; // Empty string is falsy

if (complaintReason) {
  console.log("Complaint on file");
} else {
  console.log("No complaint");
}

console.log();

//2. Given `let appointmentType;` (undefined),
// use `||` to default it to `"General Consultation"` and print the result.

let appointmentType;

let finalAppointmentType = appointmentType || "General Consultation"; // 2. Undefined value defaults using ||
console.log("Appointment type:", finalAppointmentType);

console.log();

//3. Given `let symptoms = [];` (an empty array),
// write the **wrong** check (`if (symptoms)`) and show it incorrectly reports "has symptoms."
// Then write the **correct** check using `.length > 0`.

// 3. Empty array truthy/falsy checks
let symptoms = []; //Given `let symptoms = [];` (an empty array), array is truthy even when empty

// Wrong check
if (symptoms) {
  console.log(
    "Wrong check on empty array: has symptoms. (bug - array is truthy even when empty)",
  );
} else {
  console.log("Wrong check on empty array: No symptoms");
}

// Correct check
if (symptoms.length > 0) {
  //use check symptoms.length > 0
  console.log("Correct check: Has symptoms");
} else {
  console.log("Correct check: No symptoms");
}

console.log();

//4. Given `let complications = 0;`, write the **wrong** check (`if (complications)`)
// and show it incorrectly reports "no complications" even when the count is a real, valid zero.
// Then write the **correct** check using `> 0`.

// 4. Zero value truthy/falsy checks
let complications = 0; //Given `let complications = 0;`

// Wrong check
if (complications) {
  console.log(`Wrong check on zero: ${complications} complications`);
} else {
  console.log(
    "Wrong check on zero: No complications (misleading - 0 is falsy)",
  );
}

// Correct check
if (complications > 0) {
  console.log(`Correct check: ${complications} complications recorded`);
} else {
  console.log("Correct check: 0 complications recorded");
}

console.log();

//5. Given `let followUpDays = 0;` (0 means "follow up the same day"),
// default it to `7` using `||` and then using `??`.
// Print both and explain the difference in a comment.

// 5. Defaulting with || vs ??
let followUpDays = 0; //Given `let followUpDays = 0;` (0 means "follow up the same day"),
// Using ||
let followUpWithOr = followUpDays || 7; //default it to `7` using `||`
// Using ??
let followUpWithNullish = followUpDays ?? 7; // and then using `??`
console.log(
  `Follow-up with ||: ${followUpWithOr} days (wrong - 0 was a real value)`,
);
console.log(`Follow-up with ??: ${followUpWithNullish} days (correct)`);
/*
Difference:
|| treats all falsy values as missing:
false, 0, "", null, undefined, NaN
 
?? only treats null and undefined as missing.
 
Since 0 is a valid value for followUpDays,
|| replaces it with 7, while ?? keeps the original 0.

*/
