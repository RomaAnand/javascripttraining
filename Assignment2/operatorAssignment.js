/*
## Exercise 1: Screening Age Eligibility
**Scenario:** A screening program is only available to patients between 18 and 65.
**Requirements:**
1. Create a variable `age` with value `25`
2. Write an if-else statement that:
   - Checks if age is >= 18 AND <= 65
   - If yes, print: `"Eligible for the screening (18-65)"`
   - If no, print: `"Outside the screening's eligible age range"`
**Test Cases:**
Try running your code with these values:
- `18` -> Eligible (boundary)
- `17` -> Not eligible (too young)
- `65` -> Eligible (boundary)
- `66` -> Not eligible (too old)
- `25` -> Eligible (in range)
*/
let age = 25;
console.log(`age = ${age}`);
if (age >= 18 && age <= 65) {
  console.log("Eligible for the screening (18-65)");
} else {
  console.log("Outside the screening's eligible age range");
}

/*
## Exercise 2: Patient Intake Validator

**Scenario:** A patient can be admitted with EITHER (a patient ID AND an insurance ID) OR a referral code.

**Requirements:**
1. Create three variables:
   - `patientId` with value `"P-1001"`
   - `insuranceId` with value `"INS-778"`
   - `referralCode` with value `""`
2. Write an if-else statement that:
   - Checks if (patientId is NOT empty AND insuranceId is NOT empty) OR referralCode is NOT empty
   - If yes, print: `"Sufficient intake information"`
   - If no, print: `"Insufficient intake information - provide patient ID+insurance ID OR a referral code"`

**Hint:** Use parentheses to group the AND condition:
```javascript
if ((condition1 && condition2) || condition3) {
```

**Test Cases:**
- `patientId="P-1001"`, `insuranceId="INS-778"`, `referralCode=""` -> Valid
- `patientId="P-1001"`, `insuranceId=""`, `referralCode=""` -> Invalid
- `patientId=""`, `insuranceId=""`, `referralCode="REF-22"` -> Valid

*/
let patientId = "P-1001";
let insuranceId = "INS-778";
let referralCode = "";
console.log("Details are -");
console.log(`PatientId : ${patientId}`);
console.log(`InsuranceId : ${insuranceId}`);
console.log("Referral code:", referralCode || "(empty)");
/*
2. Write an if-else statement that:
   - Checks if (patientId is NOT empty AND insuranceId is NOT empty) OR referralCode is NOT empty
   - If yes, print: `"Sufficient intake information"`
   - If no, print: `"Insufficient intake information - provide patient ID+insurance ID OR a referral code"`
   */

if ((patientId != "" && insuranceId != "") || referralCode != "") {
  console.log("Sufficient intake information");
} else {
  console.log(
    "Insufficient intake information - provide patient ID+insurance ID OR a referral code",
  );
}
/*
Output -
Details are -
PatientId : P-1001
InsuranceId : INS-778
Referral code: (empty)
Sufficient intake information
*/

/*
## Exercise 3: Appointment Status Validator

**Scenario:** An appointment is considered closed out cleanly if status is "COMPLETED" OR "RESCHEDULED", AND there are no recorded complications.

**Requirements:**
1. Create two variables:
   - `status` with value `"COMPLETED"`
   - `complications` with value `0`
2. Write an if-else statement that:
   - Checks if (status is "COMPLETED" OR "RESCHEDULED") AND complications equals 0
   - If yes, print: `"Appointment closed out cleanly"`
   - If no, print: `"Appointment needs follow-up"`

**Test Cases:**
- `status="COMPLETED"`, `complications=0` -> Clean
- `status="RESCHEDULED"`, `complications=0` -> Clean
- `status="COMPLETED"`, `complications=2` -> Follow-up
- `status="CANCELLED"`, `complications=0` -> Follow-up
*/

let status1 = "COMPLETED";
let complications = 0;

console.log("Status:", status1);
console.log("Complications:", complications);

console.log("\nValidation:");
console.log("  Status :", status1 === "COMPLETED" || status1 === "RESCHEDULED");
console.log("  No complications:", complications === 0);

if (
  (status1 === "COMPLETED" || status1 === "RESCHEDULED") &&
  complications === 0
) {
  console.log("\nAppointment closed out cleanly");
} else {
  console.log("\nAppointment needs follow-up");
}

//Output - Appointment closed out cleanly

/*
## Exercise 4: Wait Time Validator

**Scenario:** Clinic policy - patient wait time must be under 30 minutes.

**Requirements:**
1. Create a variable `waitTime` with value `25`
2. Write an if-else statement that:
   - Checks if waitTime < 30
   - If yes, print: `"Wait time within target (X minutes)"`
   - If no, print: `"Wait time exceeds target (X minutes, target: 30 minutes)"`
*/

let waitTime = 40;
if (waitTime < 30) {
  console.log("Wait time within target: " + waitTime + " minutes");
} else {
  console.log(
    "Wait time exceeds target " +
      waitTime +
      " minutes" +
      ", target: 30 minutes",
  );
}

//Output - Wait time within target: 25 minutes // for waitTime = 25;
//Output - Wait time exceeds target 40 minutes, target: 30 minutes  // for waitTime = 40;
