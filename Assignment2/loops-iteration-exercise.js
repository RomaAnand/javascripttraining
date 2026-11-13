/*
## Exercise 1: Print All Appointments
**Scenario:** Display all appointments on today's clinic schedule with numbering.
**Requirements:**
1. Create an array called `appointments` with these values:
   - "Annual checkup"
   - "Dental cleaning"
   - "Eye exam"
   - "Vaccination"
   - "Blood test"
2. Use a for loop to print each appointment with:
   - Appointment number (starting from 1, not 0!)
   - Appointment name
*/
console.log("===Exercise 1: Print All Appointments===");
const appointments = [
  "Annual checkup",
  "Dental cleaning",
  "Eye exam",
  "Vaccination",
  "Blood test",
];

for (let i = 0; i < appointments.length; i++) {
  console.log(`Appointment ${i + 1} : ${appointments[i]}`);
}
console.log(`Total appointments: ${appointments.length}`);
/*


*/
