/*
## Exercise 1: Clinic Configuration Variables

**Scenario:** Create configuration variables for a clinic's system settings.

Create a file called `clinic-config.js`.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create these 6 variables:
  1. Clinic name (constant)
  2. API URL (constant)
  3. Environment name (Staging, Production)
  4. Current nurse on duty
  5. Today's date
  6. Are reminders enabled? Use a real boolean (`true` or `false`, no quotes)
- Print them in a formatted way
- Then the shift changes: give the nurse-on-duty variable a new name and print it again

*/
// Constants (values that never change)
const clinicName = "Sunrise Health Clinic";
const apiUrl = "https://api.sunrisehealth.example.com";
// Variables that might change
let environment = "Staging";
let nurseOnDuty = "Amara Okafor";
let todaysDate = "2026-08-06";
let remindersEnabled = true;
console.log("==========================================");
console.log("       CLINIC SYSTEM CONFIGURATION        ");
console.log("==========================================");
console.log("Clinic Name:", clinicName);
console.log("API URL:", apiUrl);
console.log("Environment:", environment);
console.log("Nurse on Duty:", nurseOnDuty);
console.log("Date:", todaysDate);
console.log("Reminders Enabled:", remindersEnabled);
console.log("==========================================");
// Shift change
nurseOnDuty = "Daniel Reyes";
// Print updated nurse on duty
console.log("Shift change. Nurse on Duty:", nurseOnDuty);
