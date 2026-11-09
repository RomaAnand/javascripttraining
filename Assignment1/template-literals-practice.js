/*
## Exercise 6: Template Literals
**Scenario:** Build patient messages and test data with template literals.
Create a file called `template-literals-practice.js`.
**Requirements:**
1. Create `firstName` and `lastName` variables and combine them into `fullName` using a template literal.
2. Build an `email` from the name using `.toLowerCase()` inside a template literal: `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com` ``
3. Create a multi-line template literal that prints a visit confirmation, including the patient's name, email, and appointment type.
4. Given a consultation fee of `500` and a lab fee of `250`, print the total using a calculation **inside** `${ }`.
5. Build three pieces of test data from these values, and print them:
   ```javascript
   const baseUrl = "https://portal.sunrisehealth.example.com";
   const patientId = "P-1001";
   const visitDate = "2026-08-06";
   ```
   - The appointments page URL: `<baseUrl>/patients/<patientId>/appointments`
   - A selector for the patient's row: `[data-patient-id="<patientId>"]`
   - The message the page should show: `Appointment booked for <fullName> on <visitDate>`
*/
//1. Create `firstName` and `lastName` variables and combine them into `fullName` using a template literal.
let firstName = "Aisha";
let lastName = "Khan";
let fullName = `${firstName} ${lastName}`;
console.log("Full Name:" + fullName);
//Output: Full Name:Aisha Khan
//2. Build an `email` from the name using `.toLowerCase()` inside a
// template literal: `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
console.log("mail:" + email);
//Output: mail: aisha.khan@example.com
//3. Create a multi-line template literal that prints a visit confirmation,
//including the patient's name, email, and appointment type.
/*
========================================
        VISIT CONFIRMATION
========================================
Patient: Aisha Khan
Email: aisha.khan@example.com
Appointment: Annual Checkup
========================================
*/
console.log("========================================");
//console.log("");
console.log("         VISIT CONFIRMATION             ");
console.log("========================================");
console.log("Patient:" + fullName);
console.log("Email:" + email);
console.log("Appointment: Annual Checkup");
console.log("========================================");

//4. Given a consultation fee of `500` and a lab fee of `250`,
// print the total using a calculation **inside** `${ }`.

const consultationFee = 500;
const labFee = 250;
console.log(`Total Fee :${consultationFee + labFee}`);

/*
5. Build three pieces of test data from these values, and print them:
   ```javascript
   const baseUrl = "https://portal.sunrisehealth.example.com";
   const patientId = "P-1001";
   const visitDate = "2026-08-06";
   ```
   - The appointments page URL: `<baseUrl>/patients/<patientId>/appointments`
   - A selector for the patient's row: `[data-patient-id="<patientId>"]`
   - The message the page should show: `Appointment booked for <fullName> on <visitDate>`
*/

const baseUrl = "https://portal.sunrisehealth.example.com";
const patientId = "P-1001";
const visitDate = "2026-08-06";

// 1. Appointments page URL
const appointmentsUrl = `URL: ${baseUrl}/patients/${patientId}/appointments`;
console.log(appointmentsUrl);
//2. A selector for the patient's row: `[data-patient-id="<patientId>"]`
const patientSelector = `Selector: [data-patient-id="${patientId}"]`;
console.log(patientSelector);
//3. The message the page should show:`Appointment booked for <fullName> on <visitDate>`
console.log(`Appointment booked for ${fullName} on ${visitDate}`);
