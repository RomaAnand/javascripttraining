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
## Exercise 1.5: Refactor with for...of Loop

**Scenario:** Learn the modern, cleaner way to iterate arrays when you don't need the index.

**Requirements:**
1. Take the same `appointments` array from Exercise 1
2. Rewrite the loop using `for...of` instead of traditional for loop
3. Notice how the code becomes cleaner and more readable

*/

console.log("===Exercise 1.5 : Refactor with for...of Loop===");
const appointments1 = [
  "Annual checkup",
  "Dental cleaning",
  "Eye exam",
  "Vaccination",
  "Blood test",
];
console.log("Today's Clinic Schedule (for...of version)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");
let appointmentNumber = 1;
for (let appointment of appointments1) {
  console.log(appointmentNumber + "." + appointment);
  appointmentNumber++;
}
console.log("\n Total appointments : " + appointments1.length);
/*
## Exercise 2: Count Appointment Outcomes

**Scenario:** Analyze a day's appointment outcomes and generate statistics.

**Requirements:**
1. Create an array called `appointmentStatuses` with these values:
   - "COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"

2. Use a for loop to count:
   - Total appointments
   - COMPLETED appointments
   - CANCELLED appointments
   - RESCHEDULED appointments

3. Calculate and print:
   - Completion rate (percentage)
   - Cancellation rate (percentage)
*/
console.log("=====Exercise 2: Count Appointment Outcomes =====");
const appointmentStatuses = [
  "COMPLETED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "RESCHEDULED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
];

let completedCount = 0;
let cancelledCount = 0;
let rescheduledCount = 0;

for (i = 0; i < appointmentStatuses.length; i++) {
  if (appointmentStatuses[i] === "COMPLETED") {
    completedCount++;
  } else if (appointmentStatuses[i] === "CANCELLED") {
    cancelledCount++;
  } else if (appointmentStatuses[i] === "RESCHEDULED") {
    rescheduledCount++;
  }
}

let totalAppointments = appointmentStatuses.length;
// Calculate rates
let completionRate = (completedCount / totalAppointments) * 100;
let cancellationRate = (cancelledCount / totalAppointments) * 100;

// Output
console.log("Appointment Outcomes");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("\nCounting outcomes...\n");

console.log("Statistics:");
console.log(`  Total appointments: ${totalAppointments}`);
console.log(`  Completed: ${completedCount}`);
console.log(`  Cancelled: ${cancelledCount}`);
console.log(`  Rescheduled: ${rescheduledCount}`);

console.log(`\n  Completion rate: ${completionRate}%`);
console.log(`  Cancellation rate: ${cancellationRate}%`);

/*
## Exercise 3: Calculate Patient Satisfaction Scores
**Scenario:** Calculate statistics for a batch of patient satisfaction survey scores.
**Requirements:**
1. Create an array called `satisfactionScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90, 87

2. Use a for loop to calculate:
   - Total of all scores
   - Average score
   - Highest score (you'll need to track this as you loop)
   - Lowest score (you'll need to track this as you loop)
*/
console.log("=== Exercise 3: Calculate Patient Satisfaction Scores ===");
const satisfactionScores = [85, 92, 78, 95, 88, 73, 90, 87];
let total = 0;
let highest = satisfactionScores[0];
let lowest = satisfactionScores[0];
//Loop through all scores
for (let i = 0; i < satisfactionScores.length; i++) {
  total += satisfactionScores[i];

  if (satisfactionScores[i] > highest) {
    highest = satisfactionScores[i];
  }
  if (satisfactionScores[i] < lowest) {
    lowest = satisfactionScores[i];
  }
}

// Calculate average
let average = total / satisfactionScores.length;
//Print Result
console.log("Total score :", total);
console.log("Average Score :", average);
console.log("Highest Score :", highest);
console.log("Lowest Score :", lowest);
