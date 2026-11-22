/*## Exercise 1: Convert to Arrow Functions
Convert the following traditional functions to arrow functions:

```javascript
// Exercise 1a: Convert this function
function greetPatient(name) {
    return "Hello, " + name;
} */
console.log("===== Exercise 1: Convert to Arrow Functions =====");
const greetPatient = (name1) => {
  return "Hello, " + name1;
};
/* // Exercise 1b: Convert this function
function isEligibleForVaccine(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}*/
const isEligibleForVaccine = (age) => (age >= 18 ? true : false);
/*// Exercise 1c: Convert this function
function calculateBill(price, quantity) {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
}*/
const calculateBill = (price, quantity) => {
  let total = price * quantity;
  let tax = total * 0.1;
  return total + tax;
};
//Test
console.log(greetPatient("Aisha"));
console.log(isEligibleForVaccine(20));
console.log(calculateBill(10, 5));

/*
## Exercise 2: forEach() - Process Every Visit

```javascript
let appointmentTypes = ["Annual Physical", "Dental Checkup", "Eye Exam", "Vaccination", "Follow-up Visit"];
```

1. **2a:** Use `forEach` to print `"Starting: <type>"` for every entry in `appointmentTypes`.
2. **2b:** Use `forEach` with the index parameter to print a numbered list: `"1. Annual Physical"`, `"2. Dental Checkup"`, and so on.
3. **2c:** Given this array of visit objects, use `forEach` to print a report. Use `✓` for `"COMPLETED"` and `✗` for anything else, in the format `<symbol> <patientName> - <appointmentType>: <status> (<duration>m)`.
   ```javascript
   let todaysAppointments = [
       { patientName: "Aisha Khan",      appointmentType: "Annual Physical", status: "COMPLETED", duration: 30 },
       { patientName: "Raj Verma",       appointmentType: "Dental Checkup",  status: "CANCELLED",  duration: 20 },
       { patientName: "Meera Nair",      appointmentType: "Eye Exam",        status: "COMPLETED",  duration: 25 },
       { patientName: "Kabir Malhotra",  appointmentType: "Vaccination",     status: "COMPLETED",  duration: 15 }
   ];
*/
console.log("===== Exercise 2: forEach() - Process Every Visit =====");
let appointmentTypes = [
  "Annual Physical",
  "Dental Checkup",
  "Eye Exam",
  "Vaccination",
  "Follow-up Visit",
];
//1. **2a:** Use `forEach` to print `"Starting: <type>"` for every entry in
// `appointmentTypes`.

appointmentTypes.forEach(function (type) {
  console.log(`Starting: ${type}`);
});
//2. **2b:** Use `forEach` with the index parameter to print a numbered list:
// `"1. Annual Physical"`, `"2. Dental Checkup"`, and so on.
appointmentTypes.forEach(function (type, index) {
  console.log(`${index + 1}. ${type}`);
});

//3. **2c:** Given this array of visit objects, use `forEach` to print a report.
// Use `✓` for `"COMPLETED"` and `✗` for anything else, in the
// format `<symbol> <patientName> - <appointmentType>: <status> (<duration>m)`.
let todaysAppointments = [
  {
    patientName: "Aisha Khan",
    appointmentType: "Annual Physical",
    status: "COMPLETED",
    duration: 30,
  },
  {
    patientName: "Raj Verma",
    appointmentType: "Dental Checkup",
    status: "CANCELLED",
    duration: 20,
  },
  {
    patientName: "Meera Nair",
    appointmentType: "Eye Exam",
    status: "COMPLETED",
    duration: 25,
  },
  {
    patientName: "Kabir Malhotra",
    appointmentType: "Vaccination",
    status: "COMPLETED",
    duration: 15,
  },
];
todaysAppointments.forEach(function (appointment) {
  let symbol = appointment.status === "COMPLETED" ? "✓" : "✗";
  console.log(
    `${symbol} ${appointment.patientName} - ${appointment.appointmentType} : ${appointment.status} (${appointment.duration}m)`,
  );
});

/*
## Exercise 3: map() - Transform Every Rating

```javascript
let patientRatings = [85, 92, 78, 95, 88, 73, 90];
```

1. **3a:** Use `map` to turn each rating into a percentage string, e.g. `85` becomes `"85%"`.
2. **3b:** Use `map` to turn each rating into `"COMPLETED"` if it's 80 or above, otherwise `"CANCELLED"`.
3. **3c:** Use `map` (with the index parameter) to turn each rating into an object: `{ visitNumber, rating, status, tier }`, where `visitNumber` is the 1-based position, `status` follows the same rule as 3b, and `tier` is `"A"` for 90+, `"B"` for 80-89, `"C"` below 80.
*/

console.log("===== ## Exercise 3: map() - Transform Every Rating =====");
// 1. **3a:** Use `map` to turn each rating into a percentage string,
//  e.g. `85` becomes `"85%"`.
let patientRatings = [85, 92, 78, 95, 88, 73, 90];
let percentageRatings = patientRatings.map((rating) => `${rating}%`);
console.log(percentageRatings);

//2. **3b:** Use `map` to turn each rating into `"COMPLETED"` if it's 80 or above,
// otherwise `"CANCELLED"`.
// 3b: Convert ratings to COMPLETED or CANCELLED
let visitStatuses = patientRatings.map((rating) =>
  rating >= 80 ? "COMPLETED" : "CANCELLED",
);
console.log(visitStatuses);
// let patientRatings = [85, 92, 78, 95, 88, 73, 90];
// 3. **3c:** Use `map` (with the index parameter) to turn each rating into
// an object: `{ visitNumber, rating, status, tier }`, where `visitNumber` is the
//  1-based position, `status` follows the same rule as 3b, and `tier` is `"A"` for
//  90+, `"B"` for 80-89, `"C"` below 80.
// 3c: Convert ratings to objects
let visitDetails = patientRatings.map((rating, index) => {
  let status = rating >= 80 ? "COMPLETED" : "CANCELLED";

  let tier;
  if (rating >= 90) {
    tier = "A";
  } else if (rating >= 80) {
    tier = "B";
  } else {
    tier = "C";
  }
  return {
    // an object: `{ visitNumber, rating, status, tier }`, where `visitNumber` is the
    //
    visitNumber: index + 1,
    rating: rating,
    status: status,
    tier: tier,
  };
});
console.log(visitDetails);
console.log("===== Exercise 4: filter() - Select Visits =====");
/*
## Exercise 4: filter() - Select Visits

```javascript
let allVisits = [
    { visitType: "Annual Physical",  status: "COMPLETED", duration: 30, priority: "high"   },
    { visitType: "Dental Checkup",   status: "CANCELLED", duration: 20, priority: "medium" },
    { visitType: "Eye Exam",         status: "COMPLETED", duration: 25, priority: "high"   },
    { visitType: "Vaccination",      status: "COMPLETED", duration: 15, priority: "low"    },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 45, priority: "high"   },
    { visitType: "Follow-up Visit",  status: "CANCELLED", duration: 20, priority: "high"   }
];
1. **4a:** `filter` to get only `"CANCELLED"` visits. Print each `visitType`.
2. **4b:** `filter` to get visits longer than 25 minutes. Print each as `"<visitType> (<duration>m)"`.
3. **4c:** `filter` to get visits that are both `"COMPLETED"` and `priority === "high"`. Print each `visitType`.
*/
let allVisits = [
  {
    visitType: "Annual Physical",
    status: "COMPLETED",
    duration: 30,
    priority: "high",
  },
  {
    visitType: "Dental Checkup",
    status: "CANCELLED",
    duration: 20,
    priority: "medium",
  },
  {
    visitType: "Eye Exam",
    status: "COMPLETED",
    duration: 25,
    priority: "high",
  },
  {
    visitType: "Vaccination",
    status: "COMPLETED",
    duration: 15,
    priority: "low",
  },
  {
    visitType: "Physical Therapy",
    status: "COMPLETED",
    duration: 45,
    priority: "high",
  },
  {
    visitType: "Follow-up Visit",
    status: "CANCELLED",
    duration: 20,
    priority: "high",
  },
];

//  **4a:** `filter` to get only `"CANCELLED"` visits. Print each `visitType`.
// 4a: Cancelled visits
let cancelled = allVisits
  .filter((visit) => visit.status === "CANCELLED")
  .map((visit) => visit.visitType);
console.log("cancelled:", cancelled);
//**4b:** `filter` to get visits longer than 25 minutes. Print each
//  as `"<visitType> (<duration>m)"`.
// 4b: Visits longer than 25 minutes
let long = allVisits
  .filter((visit) => visit.duration > 25)
  .map((visit) => `${visit.visitType}(${visit.duration}m)`);
console.log("long: ", long);

//**4c:** `filter` to get visits that are both `"COMPLETED"` and
// `priority === "high"`. Print each `visitType`.
let highPriorityCompleted = allVisits
  .filter((visit) => visit.status === "COMPLETED" && visit.priority === "high")
  .map((visit) => visit.visitType);

console.log("highPriorityCompleted:", highPriorityCompleted);
console.log(
  "===== Exercise 5a: find() and findIndex() - Locate a Specific Visit =====",
);
/*
## Exercise 5: find() and findIndex() - Locate a Specific Visit

```javascript
let visitCollection = [
    { visitType: "Annual Physical",  status: "COMPLETED", duration: 30, department: "General Medicine" },
    { visitType: "Dental Checkup",   status: "CANCELLED", duration: 20, department: "Dental"           },
    { visitType: "Eye Exam",         status: "COMPLETED", duration: 25, department: "General Medicine" },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 50, department: "Rehab"             },
    { visitType: "Follow-up Visit",  status: "CANCELLED", duration: 15, department: "General Medicine" }
];
```

1. **5a:** `find` the first `"CANCELLED"` visit and print it with `JSON.stringify`.
2. **5b:** `findIndex` of the first `"CANCELLED"` visit, print the index.
3. **5c:** `find` a visit longer than 40 minutes, print its `visitType`.
4. **5d:** `find` the first visit in `"General Medicine"`, print its `visitType`.
5. **5e:** `find` a visit with status `"RESCHEDULED"` (there isn't one). Print the result, then `findIndex` for the same condition and print that result too.
6. **5f:** `find` the `"Physical Therapy"` visit, change its `status` to `"CANCELLED"`, then print the updated status.
*/

let visitCollection = [
  {
    visitType: "Annual Physical",
    status: "COMPLETED",
    duration: 30,
    department: "General Medicine",
  },
  {
    visitType: "Dental Checkup",
    status: "CANCELLED",
    duration: 20,
    department: "Dental",
  },
  {
    visitType: "Eye Exam",
    status: "COMPLETED",
    duration: 25,
    department: "General Medicine",
  },
  {
    visitType: "Physical Therapy",
    status: "COMPLETED",
    duration: 50,
    department: "Rehab",
  },
  {
    visitType: "Follow-up Visit",
    status: "CANCELLED",
    duration: 15,
    department: "General Medicine",
  },
];
// **5a:** `find` the first `"CANCELLED"` visit and print it with `JSON.stringify`.
// 5a: Find first cancelled visit
let firstCancelled = visitCollection.find(
  (visit) => visit.status === "CANCELLED",
);
console.log("firstCancelled: ", JSON.stringify(firstCancelled));
console.log("firstCancelled: ", firstCancelled);
//**5b:** `findIndex` of the first `"CANCELLED"` visit, print the index.
// 5b: Find index of first cancelled visit
let firstCancelledIndex = visitCollection.findIndex(
  (visit) => visit.status === "CANCELLED",
);
console.log("firstCancelledIndex:", firstCancelledIndex);
// **5c:** `find` a visit longer than 40 minutes, print its `visitType`.
// 5c: Find first visit longer than 40 minutes
let longVisit = visitCollection.find((visit) => visit.duration > 40);
console.log("longVisit: ", longVisit.visitType);
//**5d:** `find` the first visit in `"General Medicine"`, print its `visitType`.
// 5d: Find first General Medicine visit
let firstGenMed = visitCollection.find(
  (visit) => visit.department === "General Medicine",
);
console.log("firstGenMed: ", firstGenMed.visitType);
//**5e:** `find` a visit with status `"RESCHEDULED"` (there isn't one).
// Print the result, then `findIndex` for the same condition and print that result too
// 5e: Find a RESCHEDULED visit
let notFound = visitCollection.find((visit) => visit.status === "RESCHEDULED");
console.log("notFound find:", notFound);
let notFoundIndex = visitCollection.findIndex(
  (visit) => visit.status === "RESCHEDULED",
);
console.log("notFound findIndex:", notFoundIndex);
//**5f:** `find` the `"Physical Therapy"` visit, change its `status` to
// `"CANCELLED"`, then print the updated status.
// 5f: Find Physical Therapy visit and update status
let physicalTherapy = visitCollection.find(
  (visit) => visit.visitType === "Physical Therapy",
);

physicalTherapy.status = "CANCELLED";
console.log("updated: ", physicalTherapy.status);
console.log("===== Exercise 6: some() and every() =====");

/*
## Exercise 6: some() and every() - Boolean Checks
```javascript
let visitBatch = [
    { visitType: "Annual Physical", status: "COMPLETED", rating: 85, duration: 30 },
    { visitType: "Eye Exam",        status: "COMPLETED", rating: 92, duration: 25 },
    { visitType: "Dental Checkup",  status: "COMPLETED", rating: 78, duration: 40 },
    { visitType: "Vaccination",     status: "COMPLETED", rating: 88, duration: 15 }
];
1. **6a:** `some` visit `"CANCELLED"`?
2. **6b:** `some` visit with `rating < 80`?
3. **6c:** `some` visit with `duration > 35`?
4. **6d:** `every` visit `"COMPLETED"`?
5. **6e:** `every` visit with `rating >= 80`?
6. **6f:** `every` visit with `duration < 60`?
*/
let visitBatch = [
  {
    visitType: "Annual Physical",
    status: "COMPLETED",
    rating: 85,
    duration: 30,
  },
  { visitType: "Eye Exam", status: "COMPLETED", rating: 92, duration: 25 },
  {
    visitType: "Dental Checkup",
    status: "COMPLETED",
    rating: 78,
    duration: 40,
  },
  { visitType: "Vaccination", status: "COMPLETED", rating: 88, duration: 15 },
];

//1. **6a:** `some` visit `"CANCELLED"`?
let someCancelled = visitBatch.some((visit) => visit.status === "CANCELLED");
console.log(`someCancelled: ${someCancelled}`);

//2. **6b:** `some` visit with `rating < 80`?
let someLowRating = visitBatch.some((visit) => visit.rating < 80);
console.log(`someLowRating: ${someLowRating}`);
//3. **6c:** `some` visit with `duration > 35`?
let someLongDuration = visitBatch.some((visit) => visit.duration > 35);
console.log(`someLongDuration: ${someLongDuration}`);
//4. **6d:** `every` visit `"COMPLETED"`?
let everyCompleted = visitBatch.every((visit) => visit.status === "COMPLETED");
console.log(`everyCompleted : ${everyCompleted}`);
//5. **6e:** `every` visit with `rating >= 80`?
let everyHighRating = visitBatch.every((visit) => visit.rating >= 80);
console.log(`everyHighRating : ${everyHighRating}`);
//6. **6f:** `every` visit with `duration < 60`?
let everyFast = visitBatch.some((visit) => visit.duration < 60);
console.log(`everyFast : ${everyFast}`);
console.log("===== Exercise 7: reduce() - Combine Into a Single Value =====");
/*
## Exercise 7: reduce() - Combine Into a Single Value

```javascript
let visitRatings = [85, 92, 78, 95, 88, 73, 90];
```

1. **7a:** `reduce` to sum all ratings.
2. **7b:** `reduce` to calculate the average (sum divided by length, `.toFixed(2)`).
3. **7c:** `reduce` to find the maximum rating.
4. **7d:** `reduce` to find the minimum rating.

Then, given this array:
```javascript
let weeklyVisits = [
    { visitType: "Annual Physical", status: "COMPLETED" },
    { visitType: "Dental Checkup",  status: "CANCELLED" },
    { visitType: "Eye Exam",        status: "COMPLETED" },
    { visitType: "Vaccination",     status: "COMPLETED" },
    { visitType: "Follow-up Visit", status: "CANCELLED" }
];
```
5. **7e:** `reduce` into a summary object `{ completed, cancelled, total }` counting each status.
6. **7f:** `reduce` to group `visitType` values by `status` into an object, e.g. `{ COMPLETED: [...], CANCELLED: [...] }`.
*/

let visitRatings = [85, 92, 78, 95, 88, 73, 90];

// 7a: Sum all ratings
let sum = visitRatings.reduce((total, rating) => total + rating, 0);
console.log(`sum: ${sum}`);

// 7b: Average rating
let avg = (
  visitRatings.reduce((total, rating) => total + rating, 0) /
  visitRatings.length
).toFixed(2);
console.log(`avg: ${avg}`);

// 7c: Maximum rating
let max = visitRatings.reduce((highest, rating) =>
  rating > highest ? rating : highest,
);
console.log(`max: ${max}`);

// 7d: Minimum rating
let min = visitRatings.reduce((lowest, rating) =>
  rating < lowest ? rating : lowest,
);
console.log(`min: ${min}`);

let weeklyVisits = [
  { visitType: "Annual Physical", status: "COMPLETED" },
  { visitType: "Dental Checkup", status: "CANCELLED" },
  { visitType: "Eye Exam", status: "COMPLETED" },
  { visitType: "Vaccination", status: "COMPLETED" },
  { visitType: "Follow-up Visit", status: "CANCELLED" },
];

// 7e: Summary counts
let summary = weeklyVisits.reduce(
  (result, visit) => {
    if (visit.status === "COMPLETED") {
      result.completed++;
    } else if (visit.status === "CANCELLED") {
      result.cancelled++;
    }

    result.total++;
    return result;
  },
  { completed: 0, cancelled: 0, total: 0 },
);

console.log(`summary: ${JSON.stringify(summary)}`);

// 7f: Group visit types by status
let grouped = weeklyVisits.reduce((result, visit) => {
  if (!result[visit.status]) {
    result[visit.status] = [];
  }

  result[visit.status].push(visit.visitType);
  return result;
}, {});

console.log("grouped:", JSON.stringify(grouped, null, 2));
