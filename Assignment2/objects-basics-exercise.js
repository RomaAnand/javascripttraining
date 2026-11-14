/*
## Exercise 1: Create a Leave Request Object

**Scenario:** Create a structured leave request object.

**Requirements:**
1. Create an object called `leaveRequest` with these properties:
   - id: "LR-001"
   - type: "Sick Leave"
   - status: "PENDING"
   - days: 2

2. Print each property using dot notation
3. Add a new property `approver` with value "Priya Sharma"
4. Modify the `status` to "APPROVED"
5. Print the complete object
*/
console.log("===== Exercise 1: Create a Leave Request Object =====");
// Create leave request object
let leaveRequest = {
  id: "LR-001",
  type: "Sick Leave",
  status1: "PENDING",
  days: 2,
};

console.log("Leave Request Details");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

// Print each property using dot notation
console.log("ID :", leaveRequest.id);
console.log("type :", leaveRequest.type);
console.log("status1 :", leaveRequest.status1);
console.log("days :", leaveRequest.days);

console.log("\nAdding approver ...");
// Add a new property
leaveRequest.approver = "Priya Sharma";

console.log("===Changing status ===");

// Modify an existing property
leaveRequest.status1 = "APPROVED";

console.log("\nUpdated Leave Request: ");
console.log(leaveRequest);

/*
## Exercise 2: Employee Records
**Scenario:** Create multiple employee objects.
**Requirements:**
1. Create 3 employee objects with these properties:
   - employeeId
   - department
   - role
2. Store all 3 employees in an array called `employees`
3. Loop through the array and print each employee's details
4. Count how many employees have role "Manager" vs "Associate"
*/
console.log("");
console.log("===== Exercise 2: Employee Records =====");
// Create Employee Object
// Exercise 2: Employee Records

console.log("Employee Directory");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

// Create employee objects
const employee1 = {
  employeeId: "EMP-101",
  department: "Sales",
  role: "Manager",
};

const employee2 = {
  employeeId: "EMP-102",
  department: "Sales",
  role: "Associate",
};

const employee3 = {
  employeeId: "EMP-103",
  department: "Support",
  role: "Associate",
};

// Store employees in an array
const employees = [employee1, employee2, employee3];

let managerCount = 0;
let associateCount = 0;

// Loop through array and print details
for (let i = 0; i < employees.length; i++) {
  console.log(`\nEmployee ${i + 1}:`);
  console.log(`  ID: ${employees[i].employeeId}`);
  console.log(`  Department: ${employees[i].department}`);
  console.log(`  Role: ${employees[i].role}`);

  // Count roles
  if (employees[i].role === "Manager") {
    managerCount++;
  } else if (employees[i].role === "Associate") {
    associateCount++;
  }
}

// Print summary
console.log("\nSummary:");
console.log(`  Total employees: ${employees.length}`);
console.log(`  Managers: ${managerCount}`);
console.log(`  Associates: ${associateCount}`);

/*
## Exercise 3: Leave Requests Array

**Scenario:** Create an array of leave request objects and calculate statistics.

**Requirements:**
1. Create an array called `leaveRequests` with 5 request objects
2. Each request object should have:
   - type (leave type)
   - status ("APPROVED", "REJECTED", or "PENDING")
   - days (number of days)

3. Loop through and print each request

4. Calculate and print:
   - Total requests
   - Approved count
   - Rejected count
   - Pending count
   - Approval rate (percentage)
   - Total days requested
*/
console.log("");
console.log("=== Exercise 3: Leave Requests Array ===");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
const leaveRequests = [
  {
    type: "Sick Leave",
    status2: "APPROVED",
    days: 2,
  },
  {
    type: "Casual Leave",
    status2: "REJECTED",
    days: 1,
  },
  {
    type: "Earned Leave",
    status: "APPROVED",
    days: 5,
  },
  {
    type: "Unpaid Leave",
    status: "PENDING",
    days: 3,
  },
  {
    type: "Sick Leave",
    status: "APPROVED",
    days: 1,
  },
];
let approvedCount = 0;
let rejectedCount = 0;
let pendingCount = 0;
let totalDays = 0;
// Print requests and calculate statistics
for (let i = 0; i < leaveRequests.length; i++) {
  const request = leaveRequests[i];
  let symbol = "";

  if (request.status === "APPROVED") {
    symbol = "✓";
    approvedCount++;
  } else if (request.status === "REJECTED") {
    symbol = "✗";
    rejectedCount++;
  } else {
    symbol = "⊘";
    pendingCount++;
  }

  totalDays += request.days;

  console.log(`${symbol} ${i + 1}. ${request.type}`);
  console.log(`  Status: ${request.status}`);
  console.log(`  Days: ${request.days}`);
  console.log("");
}

const totalRequests = leaveRequests.length;
const approvalRate = (approvedCount / totalRequests) * 100;

console.log("Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`  Total requests: ${totalRequests}`);
console.log(
  `  Approved: ${approvedCount} (${((approvedCount / totalRequests) * 100).toFixed(1)}%)`,
);
console.log(
  `  Rejected: ${rejectedCount} (${((rejectedCount / totalRequests) * 100).toFixed(1)}%)`,
);
console.log(
  `  Pending: ${pendingCount} (${((pendingCount / totalRequests) * 100).toFixed(1)}%)`,
);
console.log("");
console.log(`  Total days requested: ${totalDays}`);
console.log(`  Approval rate: ${approvalRate.toFixed(1)}%`);

/*
## Exercise 4: Object Methods and 'this' Keyword

**Scenario:** Create objects with methods to simulate a payroll run.

**Requirements:**
1. Create an object called `payrollRun` with:
   - name: "March Payroll"
   - totalEmployees: 5
   - processedEmployees: 0

2. Add these methods to the object:
   - `start()` - prints "Running payroll: [name]"
   - `process()` - increments processedEmployees and prints the count
   - `getReport()` - prints a summary with completion rate

3. Call the methods to:
   - Start the run
   - Process 3 employees
   - Generate the report

4. Create a second object `leaveRequest` with methods:
   - `submit()` - sets status to "SUBMITTED" and records submit time
   - `approve()` - sets status to "APPROVED" and calculates processing time
   - `reject(reason)` - sets status to "REJECTED" with reason
   - Properties: type, status, submitTime
*/

console.log("");
console.log("===== Exercise 4: Object Methods and 'this' Keyword =====");
// Payroll object
const payrollRun = {
  name: "March Payroll",
  totalEmployees: 5,
  processedEmployees: 0,
  start() {
    console.log(`\nRunning payroll: ${this.name}`);
  },
  process() {
    this.processedEmployees++;
    console.log(`✓ Employee processed! Total: ${this.processedEmployees}`);
  },
  getReport() {
    const completionRate =
      (this.processedEmployees / this.totalEmployees) * 100;
    console.log("\nPayroll Report:");
    console.log(`  Name: ${this.name}`);
    console.log(`  Total employees: ${this.totalEmployees}`);
    console.log(
      `  Processed: ${this.processedEmployees} (${completionRate.toFixed(1)}%)`,
    );
    console.log(
      `  Remaining: ${this.totalEmployees - this.processedEmployees}`,
    );
  },
};

// Call methods
payrollRun.start();
payrollRun.process();
payrollRun.process();
payrollRun.process();
payrollRun.getReport();

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\nLeave Request with Methods:");

// Leave Request object
const leaveRequest1 = {
  type: "Sick Leave",
  status: "DRAFT",
  submitTime: null,
  processingTime: null,
  reason: "",

  submit() {
    this.status = "SUBMITTED";
    this.submitTime = Date.now();

    console.log(`\n✓ Submitted: ${this.type}`);
    console.log(`  Status: ${this.status}`);
  },

  approve() {
    this.status = "APPROVED";
    this.processingTime = ((Date.now() - this.submitTime) / 1000).toFixed(2);

    console.log(`\n✓ ${this.type} APPROVED`);
    console.log(`  Processing time: ${this.processingTime}s`);
  },

  reject(reason) {
    this.status = "REJECTED";
    this.reason = reason;

    console.log(`\n✗ ${this.type} REJECTED`);
    console.log(`  Reason: ${this.reason}`);
  },
};

// Demo
leaveRequest1.submit();

// Small delay so processing time is visible
setTimeout(() => {
  leaveRequest1.approve();
}, 50);

/*
## Exercise 5: Deleting Properties

**Scenario:** Clean up temporary fields from an employee record before archiving it.

**Requirements:**
1. Create an object `employeeRecord` with:
   - employeeId: "EMP-101"
   - department: "Sales"
   - tempNote: "temporary"
   - debugInfo: "some debug data"

2. Print the object before cleanup

3. Use `delete` to remove:
   - tempNote
   - debugInfo

4. Print the object after cleanup

5. Use the `in` operator to check if `tempNote` still exists
*/

console.log("");
console.log("===== Exercise 5: Deleting Properties =====");
console.log("Archive Employee Record");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

// 1. Create employeeRecord object
const employeeRecord = {
  employeeId: "EMP-101",
  department: "Sales",
  tempNote: "temporary",
  debugInfo: "some debug data",
};

// 2. Print object before cleanup
console.log("\nBefore cleanup:");
console.log(employeeRecord);

// 3. Delete temporary properties
delete employeeRecord.tempNote;
delete employeeRecord.debugInfo;

// 4. Print object after cleanup
console.log("\nAfter cleanup:");
console.log(employeeRecord);

// 5. Check if properties exist using the in operator
console.log("\nDoes 'tempNote' exist?", "tempNote" in employeeRecord);
console.log("Does 'employeeId' exist?", "employeeId" in employeeRecord);

console.log("\n✓ Record ready to archive!");
