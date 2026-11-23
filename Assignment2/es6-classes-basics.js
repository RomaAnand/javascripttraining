/*

## Exercise 1 (Very Simple): Employee Class

**Scenario:** Create your very first class, just a constructor and one method.

**Requirements:**
1. Create a class called `Employee` with a constructor that accepts `name` and `department`, and stores them as `this.name` and `this.department`.
2. Add a method `displayInfo()` that prints: `Name: <name>, Department: <department>`
3. Create TWO different `Employee` objects and call `displayInfo()` on each.

**Example Output:**
```
Name: Aisha Khan, Department: Engineering
Name: Raj Verma, Department: Sales
*/
console.log("===== Exercise 1 (Very Simple): Employee Class =====");
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Department: ${this.department}`);
  }
}

// Create two Employee objects
const employee1 = new Employee("Aisha Khan", "Engineering");
const employee2 = new Employee("Raj Verma", "Sales");

// Call displayInfo() for each employee
employee1.displayInfo();
employee2.displayInfo();
console.log("===== Exercise 2 (Simple): OfficeSpace Class =====");

/*
## Exercise 2 (Simple): OfficeSpace Class

**Scenario:** Practice adding methods that **return** a calculated value instead of just printing.

**Requirements:**
1. Create a class called `OfficeSpace` with a constructor that accepts `lengthFt` and `widthFt`.
2. Add a method `calculateFloorArea()` that **returns** `lengthFt * widthFt`.
3. Add a method `calculateWallPerimeter()` that **returns** `2 * (lengthFt + widthFt)`.
4. Create one `OfficeSpace` object (length 5, width 3) and print both results.
*/
class OfficeSpace {
  constructor(lengthFt, widthFt) {
    this.lengthFt = lengthFt;
    this.widthFt = widthFt;
  }

  calculateFloorArea() {
    return this.lengthFt * this.widthFt;
  }
  calculateWallPerimeter() {
    return 2 * (this.lengthFt + this.widthFt);
  }
}

const office = new OfficeSpace(5, 3);

console.log(`Area: ${office.calculateFloorArea()}`);
console.log(`Perimeter: ${office.calculateWallPerimeter()}`);
console.log("===== Exercise 3 (Simple-Medium): LeaveBalance Class =====");
/*
## Exercise 3 (Simple-Medium): LeaveBalance Class

**Scenario:** Practice a class where methods **change** (mutate) a property over time, plus a default parameter value and simple validation.

**Requirements:**
1. Create a class called `LeaveBalance` with a constructor that accepts `employeeName` and `daysAvailable` (give `daysAvailable` a **default value of 0**).
2. Add a method `accrueLeave(days)` that adds `days` to `this.daysAvailable` and prints the new balance.
3. Add a method `requestLeave(days)` that:
   - If `days` is more than the current balance, print `"Cannot request <days> days. Insufficient leave balance!"` and do nothing else.
   - Otherwise, subtract `days` from `this.daysAvailable` and print the new balance.
4. Add a method `checkBalance()` that prints `"<employeeName> leave balance: <daysAvailable> days"`.
5. Create a balance for "Aisha Khan" starting with 20. Check the balance, accrue 5, request 10, then try to request 1000 (should fail).
*/

class LeaveBalance {
  constructor(employeeName, daysAvailable = 0) {
    this.employeeName = employeeName;
    this.daysAvailable = daysAvailable;
  }
  accrueLeave(days) {
    this.daysAvailable = this.daysAvailable + days;
    console.log(`Accrued ${days} days. New balance: ${this.daysAvailable}`);
  }
  requestLeave(days) {
    if (days > this.daysAvailable) {
      console.log(`Cannot request ${days} days. Insufficient leave balance!`);
    } else {
      this.daysAvailable = this.daysAvailable - days;
      console.log(`Used ${days} days. New balance: ${this.daysAvailable}`);
    }
  }
  checkBalance() {
    console.log(
      `${this.employeeName} leave balance: ${this.daysAvailable} days`,
    );
  }
}
// Create leave balance for Aisha Khan
const aishaLeave = new LeaveBalance("Aisha Khan", 20);
aishaLeave.checkBalance();
aishaLeave.accrueLeave(5);
aishaLeave.requestLeave(10);
aishaLeave.requestLeave(1000);
console.log("===== Exercise 4 (Medium): TeamMemberScores Class ======");

/*
## Exercise 4 (Medium): TeamMemberScores Class (Property That Starts as an Empty Array)

**Scenario:** Practice a property that starts empty and grows over time, plus a method that computes something from that array.

**Requirements:**
1. Create a class called `TeamMemberScores` with a constructor that accepts `name` and `employeeId`, and also sets `this.performanceScores = []` (an empty array, no parameter needed for this one).
2. Add a method `addScore(score)` that pushes `score` into `this.performanceScores`.
3. Add a method `getAverageScore()` that returns the average of all scores in `this.performanceScores` (return `0` if there are no scores yet, to avoid dividing by zero).
4. Create a `TeamMemberScores` for "Raj Verma" (employee id "E101"), add scores 80, 90, and 70, then print the average.
*/

class TeamMemberScores {
  constructor(name, employeeId) {
    this.name = name;
    this.employeeId = employeeId;
    this.performanceScores = []; // starts as an empty array
  }
  addScore(score) {
    this.performanceScores.push(score); //pushes `score` into `this.performanceScores`
  }
  getAverageScore() {
    //returns the average of all scores in `this.performanceScores`
    // (return `0` if there are no scores yet, to avoid dividing by zero).
    if (this.performanceScores.length === 0) {
      return 0;
    }
    let total = 0;
    for (let score of this.performanceScores) {
      total = total + score;
    }
    return total / this.performanceScores.length;
  }
}
//Create a `TeamMemberScores` for "Raj Verma" (employee id "E101"),
//  add scores 80, 90, and 70, then print the average.

const employeeEx3 = new TeamMemberScores("Raj Verma", "E101");

employeeEx3.addScore(80);
employeeEx3.addScore(90);
employeeEx3.addScore(70);

console.log(
  `${employeeEx3.name} average score: ${employeeEx3.getAverageScore()}`,
);
console.log(
  "===== Exercise 5 (Medium-Complex): OnboardingChecklist Class =====",
);
/*
## Exercise 5 (Medium-Complex): OnboardingChecklist Class

**Scenario:** A class that models something closer to real HR work, tracking a status and a list of tasks.

**Requirements:**
1. Create a class called `OnboardingChecklist` with a constructor that accepts `employeeName`, and also sets:
   - `this.status = "PENDING"` (default starting status, no parameter)
   - `this.tasks = []` (empty array, no parameter)
2. Add a method `addTask(task)` that pushes `task` into `this.tasks`.
3. Add a method `run()` that:
   - Prints `"Starting onboarding: <employeeName>"`
   - Loops through `this.tasks` and prints each one as `"  Task <number>: <task>"` (starting from Task 1, not Task 0)
   - Sets `this.status = "COMPLETED"` at the end
4. Add a method `getSummary()` that **returns** the string: `"<employeeName> - <status> (<number of tasks> tasks)"`
5. Create an `OnboardingChecklist` for "Priya Singh", add 3 tasks ("Complete HR paperwork", "Set up email account", "IT equipment handover"), run it, then print the summary.
*/
class OnboardingChecklist {
  constructor(employeeName) {
    this.employeeName = employeeName;
    this.status = "PENDING";
    this.tasks = []; // empty array, no parameter
  }
  addTask(task) {
    this.tasks.push(task);
  }
  run() {
    console.log(`Starting onboarding: ${this.employeeName}`);
    for (let i = 0; i < this.tasks.length; i++) {
      //Loops through `this.tasks` and prints each one as
      // `"  Task <number>: <task>"` (starting from Task 1, not Task 0)
      console.log(`Task${i + 1}: ${this.tasks[i]}`);
    }
    this.status = "COMPLETED";
  }
  getSummary() {
    //that **returns** the string: `"<employeeName> - <status>
    // (<number of tasks> tasks)"`
    return `${this.employeeName} - ${this.status}(${this.tasks.length} tasks)`;
  }
}

//Create an `OnboardingChecklist` for "Priya Singh",
// add 3 tasks ("Complete HR paperwork", "Set up email account", "IT equipment handover"),
//  run it, then print the summary.
// Create onboarding checklist

const onboarding = new OnboardingChecklist("Priya Singh");

// Add tasks
onboarding.addTask("Complete HR paperwork");
onboarding.addTask("Set up email account");
onboarding.addTask("IT equipment handover");
// Run onboarding process
onboarding.run();
// Print summary
console.log(onboarding.getSummary());
console.log(
  "== Exercise 6 (Complex): BenefitsEnrollment Class (Managing a Collection of Objects) ==",
);
/*
## Exercise 6 (Complex): BenefitsEnrollment Class (Managing a Collection of Objects)

**Scenario:** The most advanced exercise here, a class that manages a whole collection of items, including adding, removing, and calculating a total. This uses array methods (`push`, `filter`, `reduce`) INSIDE class methods, still no inheritance or static, just more moving parts.

**Requirements:**
1. Create a class called `BenefitsEnrollment` with a constructor that takes **no parameters** and just sets `this.selections = []`.
2. Add a method `addBenefit(name, cost)` that pushes `{ name: name, cost: cost }` into `this.selections`, and prints `"Added: <name> ($<cost>)"`.
3. Add a method `removeBenefit(name)` that removes the item with that name from `this.selections` (hint: `.filter()`), and prints `"Removed: <name>"`.
4. Add a method `getTotalCost()` that **returns** the sum of all selection costs currently enrolled (hint: `.reduce()`).
5. Add a method `listBenefits()` that prints `"Selected benefits:"` followed by each item as `"  - <name>: $<cost>"`.
6. Create an enrollment, add "Dental Plan" ($40), "Vision Plan" ($20), and "Health Plan" ($150). Remove "Vision Plan". List the remaining benefits, then print the total.
*/

class BenefitsEnrollment {
  constructor() {
    this.selections = [];
  }
  addBenefit(name, cost) {
    this.selections.push({ name: name, cost: cost });
    console.log(`Added: ${name} ($${cost})`);
  }
  removeBenefit(name) {}
  getTotalCost() {}
  listBenefits() {}
}

// Create an enrollment, add "Dental Plan" ($40), "Vision Plan" ($20), and "Health Plan" ($150). Remove "Vision Plan".
// List the remaining benefits, then print the total.
