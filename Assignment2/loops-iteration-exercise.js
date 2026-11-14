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

/*Exercise 4: Find Cancelled Appointments
**Scenario:** Identify and report all cancelled appointments from a day's schedule.

**Requirements:**
1. Create two parallel arrays:
   - `appointmentTypes`: ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"]
   - `appointmentOutcomes`: ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]

2. Use a for loop to:
   - Print all appointment outcomes
   - Find and print ONLY the cancelled appointments with their types
   - Count total cancellations
*/
console.log("===Exercise 4: Find Cancelled Appointments===");
const appointmentTypes = [
  "Checkup",
  "Dental",
  "Eye Exam",
  "Vaccination",
  "Blood Test",
  "Follow-up",
];
const appointmentOutcomes = [
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "CANCELLED",
];

let cancellationCount = 0;

console.log("Daily Appointment Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\nAll Appointments:");
for (let i = 0; i < appointmentTypes.length; i++) {
  console.log(`${i + 1}. ${appointmentTypes[i]} : ${appointmentOutcomes[i]}`);
}
console.log("\nCancelled Appointments (need rebooking):");

for (i = 0; i < appointmentTypes.length; i++) {
  if (appointmentOutcomes[i] === "CANCELLED") {
    console.log(`- ${appointmentTypes[i]}`);
    cancellationCount++;
  }
}
console.log("");
console.log(" Total cancellations :", cancellationCount);

/*
## Exercise 4.5: Stop Early with break, Skip with continue

**Scenario:** The front desk runs two quick checks on today's queue.

- `break` stops the **whole loop**.
- `continue` skips the **rest of this round** and moves on to the next one.

### Part A: break

Find the first patient who has waited more than 30 minutes, then stop checking.

**Requirements:**
1. Create an array called `waitTimes` with these values: 12, 18, 35, 8, 42
2. Create a counter `checkedCount` starting at 0
3. Use a for loop. In each round:
   - Add 1 to `checkedCount`
   - Print the patient number and wait time
   - If the wait time is over 30, print an alert and use `break`
4. After the loop, print how many patients were checked
*/
const waitTimes = [12, 18, 35, 8, 42];
let checkedCount = 0;
console.log("Checking wait times (stop at the first one over 30 min):");
for (let i = 0; i < waitTimes.length; i++) {
  checkedCount++;
  console.log(`patient ${i + 1}: ${waitTimes[i]} min`);
  if (waitTimes[i] > 30) {
    console.log("  Over 30 minutes! Alerting the doctor.");
    break;
  }
}

console.log(`\nChecked ${checkedCount} of ${waitTimes.length} patients`);
