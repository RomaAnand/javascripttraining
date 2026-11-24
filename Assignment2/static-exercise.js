/*
## Exercise 1: TaskTracker - Shared Counters and a Factory Method

**Scenario:** Every task assigned across the whole system should count toward one shared total, not a separate total per task.

**Requirements:**
1. Create a class `TaskTracker` with:
   - `static totalAssigned = 0`
   - `static completedCount = 0`
   - `static cancelledCount = 0`
2. Add a constructor accepting `name`, setting `this.name = name` and `this.status = "PENDING"`.
3. Add an instance method `run(succeeds)` that:
   - Logs `"  Running: <name>"`
   - Increments `TaskTracker.totalAssigned`
   - Sets `this.status` to `"COMPLETED"` if `succeeds` is truthy, otherwise `"CANCELLED"`
   - Increments `TaskTracker.completedCount` or `TaskTracker.cancelledCount` to match
   - Logs `"    Result: <status>"`
4. Add a **static** method `getCompletionRate()` that returns `"0"` if `totalAssigned` is `0`, otherwise returns `(completedCount / totalAssigned * 100).toFixed(1)`.
5. Add a **static** method `printReport()` that logs a small report using `totalAssigned`, `completedCount`, `cancelledCount`, and `getCompletionRate()`.
6. Add a **static factory method** `createUrgent(name)` that logs `'  Factory: Creating urgent task "<name>"'` and returns `new TaskTracker('[URGENT] ' + name)`.
7. Add a **static method** `reset()` that sets all three static counters back to `0` and logs `"  Reset all task counters"`.
8. Create three `TaskTracker` instances ("Performance Review", "Onboarding Call", 
"Benefits Enrollment"). Run them with `run(true)`, `run(false)`, `run(true)`. Print 
`TaskTracker.totalAssigned` and `TaskTracker.completedCount` directly. 
Call `TaskTracker.printReport()`. Then use `createUrgent("Payroll Correction")` to make a
 fourth task, run it with `run(true)`, and call `printReport()` again. 
 Finally call `TaskTracker.reset()` and print `TaskTracker.totalAssigned` once more.
*/
console.log(
  "===== Exercise 1: TaskTracker - Shared Counters and a Factory Method =====",
);
class TaskTracker {
  static totalAssigned = 0;
  static completedCount = 0;
  static cancelledCount = 0;

  constructor(name) {
    this.name = name;
    this.status = "PENDING";
  }

  run(succeeds) {
    console.log(`  Running: ${this.name}`);
    TaskTracker.totalAssigned++;
    if (succeeds) {
      this.status = "COMPLETED";
      TaskTracker.completedCount++;
    } else {
      TaskTracker.cancelledCount++;
    }
    console.log(`    Result: ${this.status}`);
  }
  static getCompletionRate() {
    if (TaskTracker.totalAssigned === 0) {
      return 0;
    } else {
      return (
        (TaskTracker.completedCount / TaskTracker.totalAssigned) *
        100
      ).toFixed(1);
    }
  }
  //5. Add a **static** method `printReport()` that logs a small report using
  // `totalAssigned`, `completedCount`, `cancelledCount`, and `getCompletionRate()`.
  static printReport() {
    console.log("\n  📊 Task Report:");
    console.log(`Total: ${TaskTracker.totalAssigned}`);
    console.log(`Completed: ${TaskTracker.completedCount}`);
    console.log(`Cancelled: ${TaskTracker.cancelledCount}`);
    console.log(`Completion Rate: ${TaskTracker.getCompletionRate()}%`);
  }

  //6. Add a **static factory method** `createUrgent(name)` that logs `'
  //  Factory: Creating urgent task "<name>"'` and returns `new TaskTracker('[URGENT] ' + name)`.
  static createUrgent(name) {
    console.log(`Factory: Creating urgent task ${name}`);
    return new TaskTracker("[URGENT] " + name);
  }
  //7. Add a **static method** `reset()` that sets all three static counters back to `0`
  //  and logs `"  Reset all task counters"`.
  static reset() {
    TaskTracker.totalAssigned = 0;
    TaskTracker.completedCount = 0;
    TaskTracker.cancelledCount = 0;
    console.log("  Reset all task counters");
  }
}
//8. Create three `TaskTracker` instances ("Performance Review", "Onboarding Call",
// "Benefits Enrollment"). Run them with `run(true)`, `run(false)`, `run(true)`.
// Print `TaskTracker.totalAssigned` and `TaskTracker.completedCount` directly.
//  Call `TaskTracker.printReport()`. Then use `createUrgent("Payroll Correction")`
// to make a fourth task, run it with `run(true)`, and call `printReport()` again.
// Finally call `TaskTracker.reset()` and print

const task1 = new TaskTracker("Performance Review");
const task2 = new TaskTracker("Onboarding Call");
const task3 = new TaskTracker("Benefits Enrollment");

// Run tasks

task1.run(true);
task2.run(false);
task3.run(true);

// Print `TaskTracker.totalAssigned` and `TaskTracker.completedCount` directly.
console.log(`TaskTracker.totalAssigned: ${TaskTracker.totalAssigned}`);
console.log(`TaskTracker.completedCount: ${TaskTracker.completedCount}`);
console.log("\nCalling static methods:");
//  Call `TaskTracker.printReport()`.
TaskTracker.printReport();
//Then use `createUrgent("Payroll Correction")` to make a fourth task,
console.log("\nUsing static factory method:");
const urgentTask = TaskTracker.createUrgent("Payroll Correction"); // fourth task
// run it with `run(true)`
urgentTask.run(true);
//  and call `printReport()` again.
TaskTracker.printReport();
console.log();
// Finally call `TaskTracker.reset()` and print
TaskTracker.reset();
console.log(
  `TaskTracker.totalAssigned after reset: ${TaskTracker.totalAssigned}`,
);
console.log(
  "===== Exercise 1: TaskTracker - Shared Counters and a Factory Method =====",
);

/*
## Exercise 2: HRUtils - A Static Utility Class
**Scenario:** Some classes don't need instances at all, they just group together related constants and helper functions.
**Requirements:**
1. Create a class `HRUtils` with:
   - `static DEPARTMENTS = { GENERAL: "general", SALES: "sales", ENGINEERING: "engineering" }`
   - `static DEFAULT_SETTINGS = { meetingDuration: 30, reminderCount: 2 }`
2. Add a **static** method `getDepartmentConfig(department = "general", remindersEnabled = true)` that logs `"  Generating config for: <department>"` and returns `{ department, remindersEnabled, settings: HRUtils.DEFAULT_SETTINGS }`.
3. Add a **static** method `isValidDepartment(department)` that returns `true` if `department` is one of the values in `HRUtils.DEPARTMENTS`.
4. Add a **static** method `getDepartments()` that returns all the values in `HRUtils.DEPARTMENTS` as an array.
5. Print `HRUtils.getDepartments()`. Check whether `"sales"` and `"marketing"` are valid departments and print both results. Call `HRUtils.getDepartmentConfig("sales", false)` and print its `department`, `remindersEnabled`, and `settings.meetingDuration`.
*/
console.log("===== Exercise 2: HRUtils - A Static Utility Class =====");
class HRUtils {
  static DEPARTMENTS = {
    GENERAL: "general",
    SALES: "sales",
    ENGINEERING: "engineering",
  };
  static DEFAULT_SETTINGS = {
    meetingDuration: 30,
    reminderCount: 2,
  };

  static getDepartmentConfig(department = "general", remindersEnabled = true) {
    console.log(`  Generating config for: ${department}`);

    return {
      department,
      remindersEnabled,
      settings: HRUtils.DEFAULT_SETTINGS,
    };
  }
  // 3. Add a **static** method `isValidDepartment(department)` that returns `true` if
  // `department` is one of the values in `HRUtils.DEPARTMENTS`.
  static isValidDepartment(department) {
    return Object.values(HRUtils.DEPARTMENTS).includes(department);
  }
  // 4. Add a **static** method `getDepartments()` that returns all the values in
  // `HRUtils.DEPARTMENTS` as an array.
  static getDepartments() {
    return Object.values(HRUtils.DEPARTMENTS);
  }
}
console.log("HR utility class with static methods:");
//5. Print `HRUtils.getDepartments()`. Check whether `"sales"` and `"marketing"`
//  are valid departments and print both results. Call
console.log("  Supported departments:", HRUtils.getDepartments());

console.log("\n  Validating departments:");
console.log(`    "sales" valid? ${HRUtils.isValidDepartment("sales")}`);
console.log(`    "marketing" valid? ${HRUtils.isValidDepartment("marketing")}`);
//Call `HRUtils.getDepartmentConfig("sales", false)` and print its `department`,
// `remindersEnabled`, and `settings.meetingDuration`.
console.log("\n  Getting config:");
const config = HRUtils.getDepartmentConfig("sales", false);

console.log(`    Department: ${config.department}`);
console.log(`    Reminders enabled: ${config.remindersEnabled}`);

console.log(`    Meeting duration: ${config.settings.meetingDuration}min`);
/*
## Tricky Questions

1. If you write `task1.getCompletionRate()` instead of `TaskTracker.getCompletionRate()`, what happens?
2. `getDepartmentConfig()` returns an object whose `settings` field points directly at `HRUtils.DEFAULT_SETTINGS`, not a copy of it. If the caller does `config.settings.meetingDuration = 999`, what happens to `HRUtils.DEFAULT_SETTINGS.meetingDuration` for every future call?

Ans - 
1. getCompletionRate() is a static method.

Static methods belong to the class, not to objects (instances) created from that class.
TaskTracker.getCompletionRate() --> correct
task1.getCompletionRate() --> wrong

2. Changing config.settings.meetingDuration also changes HRUtils.DEFAULT_SETTINGS.meetingDuration,
 affecting all future calls because the method returns a reference to the same object, not a copy.

Can you explain why `TaskTracker.totalAssigned` and `task1.totalAssigned` give different answers?
 Do you know why calling a static method on an instance throws an error instead of just returning
  `undefined`? Can you explain what a static factory method buys you over just calling `new 
  TaskTracker(...)` directly everywhere?


Ans - because totalAssigned is a static property stored on the class itself.  
task1.totalAssigned --> undefined
because task1 does not have a property named totalAssigned. 
The property exists on the class, not on the object.
TypeError: task1.getCompletionRate is not a function

 */
