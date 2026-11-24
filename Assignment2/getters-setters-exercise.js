/*
## Exercise 1: TeamConfiguration - Validation and Computed Properties

**Scenario:** A team's meeting configuration needs to look like plain properties from the outside, `config.meetingDuration = 45`, but actually validate what comes in.

**Requirements:**
1. Create a class `TeamConfiguration` with a constructor (no parameters) that sets:
   - `this._meetingDuration = 30`
   - `this._reminderCount = 2`
   - `this._defaultDepartment = "general"`

2. Add a getter `meetingDuration` that logs `"  Getting meeting duration: <value>min"` and returns `_meetingDuration`.

3. Add a setter `meetingDuration(value)` that:
   - If `value < 10`, logs `"  ❌ Meeting too short! Minimum is 10min"` and sets `_meetingDuration` to `10`
   - If `value > 120`, logs `"  ❌ Meeting too long! Maximum is 120min"` and sets `_meetingDuration` to `120`
   - Otherwise, logs `"  ✓ Setting meeting duration to: <value>min"` and sets `_meetingDuration` to `value`

4. Add a getter `reminderCount` that returns `_reminderCount` (no logging this time), and a setter `reminderCount(value)` that:
   - If `value < 0`, logs `"  ❌ Reminder count cannot be negative!"` and sets it to `0`
   - If `value > 5`, logs `"  ⚠️  Too many reminders! Setting to maximum: 5"` and sets it to `5`
   - Otherwise, logs `"  ✓ Setting reminder count to: <value>"` and sets it to `value`

5. Add a getter `meetingDurationInHours` (no setter) that returns `_meetingDuration / 60`, a computed property.

6. Add a getter `defaultDepartment` (no setter, this one is read-only) that returns `_defaultDepartment.toUpperCase()`.

7. Create a `TeamConfiguration`. Print `meetingDuration`, `meetingDurationInHours`, and `defaultDepartment` using plain property access (no parentheses, they're getters). Set `meetingDuration = 45` and print it again. Then try setting `meetingDuration = 5` (too short) and `meetingDuration = 300` (too long), printing the actual value after each attempt. Then set `reminderCount` to `3`, `-1`, and `10` in sequence. Finally print `defaultDepartment` one more time.

*/

console.log(
  `=== Exercise 1: TeamConfiguration - Validation and Computed Properties ===`,
);
class TeamConfiguration {
  constructor() {
    this._meetingDuration = 30;
    this._reminderCount = 2;
    this._defaultDepartment = "general";
  }
  // Getter for meeting duration
  get meetingDuration() {
    console.log(` Getting meeting duration: ${this._meetingDuration}min`);
    return this._meetingDuration;
  }

  // Setter for meeting duration
  set meetingDuration(value) {
    if (value < 10) {
      console.log("❌ Meeting too short! Minimum is 10min");
      this._meetingDuration = 10;
    } else if (value > 10) {
      console.log("❌ Meeting too long! Minimum is 120min");
      this._meetingDuration = 120;
    } else {
      console.log(`✓ Setting meeting duration to: ${value}min `);
      this._meetingDuration = value;
    }
  }
  // Getter for reminder count
  get reminderCount() {
    return this._reminderCount;
  }
  set reminderCount(value) {
    if (value < 0) {
      console.log("  ❌ Reminder count cannot be negative!");
      this._reminderCount = 0;
    } else if (value > 5) {
      console.log(" ⚠️  Too many reminders! Setting to maximum: 5");
      this._reminderCount = 5;
    } else {
      console.log(` ✓ Setting reminder count to: ${value}`);
      this._reminderCount = value;
    }
  }
  // Computed property
  get meetingDurationInHours() {
    return this._meetingDuration / 60;
  }
  // Read-only property
  get defaultDepartment() {
    return this._defaultDepartment.toUpperCase();
  }
}

const config = new TeamConfiguration();
//Create a `TeamConfiguration`. Print `meetingDuration`,
// `meetingDurationInHours`, and `defaultDepartment` using plain property access
//  (no parentheses, they're getters). Set `meetingDuration = 45` and print it again.
// Then try setting `meetingDuration = 5` (too short) and `meetingDuration = 300`
// (too long), printing the actual value after each attempt. Then set `reminderCount` to `3`,
// `-1`, and `10` in sequence. Finally print `defaultDepartment` one more time.
console.log("Creating team configuration:");
console.log("Using getters (looks like property access):");
console.log(`config.meetingDuration = ${config.meetingDuration}`);
console.log(
  `config.meetingDurationInHours = ${config.meetingDurationInHours}h`,
);
console.log(`config.defaultDepartment = ${config.defaultDepartment}`);
console.log(`\nUsing setters (looks like assignment):`);
config.meetingDuration = 45;
console.log(`After setting: ${config._meetingDuration}`);
console.log("\nSetter validation in action:");
config.meetingDuration = 5;
console.log(`Actual meeting duration: ${config.meetingDuration}`);
config.meetingDuration = 300;
console.log(`Actual meeting duration: ${config.meetingDuration}`);
console.log("\nReminders with validation:");
config.reminderCount = 3;
config.reminderCount = -1;
config.reminderCount = 10;
console.log("\nRead-only property:");
console.log(`config.defaultDepartment: ${config._defaultDepartment}`);
console.log(
  "config.defaultDepartment = 'sales' would fail silently (no setter)",
);
console.log("=== Exercise 2: TaskOutcome - Computed Boolean Properties =====");
/*
## Exercise 2: TaskOutcome - Computed Boolean Properties

**Scenario:** Instead of separately tracking "is this done" and "is this cancelled" as their own fields that could drift out of sync with `status`, derive them from `status` itself every time they're read.

**Requirements:**
1. Create a class `TaskOutcome` with a constructor accepting `name`, setting `this.name = name`, `this._startTime = null`, `this._endTime = null`, and `this.status = "PENDING"`.
2. Add a getter `duration` that returns `0` if either `_startTime` or `_endTime` is missing, otherwise returns `(this._endTime - this._startTime) / 1000` (seconds).
3. Add a getter `completed` that returns `true` if `status === "COMPLETED"`.
4. Add a getter `cancelled` that returns `true` if `status === "CANCELLED"`.
5. Add a method `start()` that sets `_startTime = Date.now()`, sets `status = "IN_PROGRESS"`, and logs `"  Started: <name>"`.
6. Add a method `complete()` that sets `_endTime = Date.now()`, sets `status = "COMPLETED"`, and logs `"  ✓ <name> completed in <duration.toFixed(2)>s"`.
7. Add a method `cancel()` that sets `_endTime = Date.now()`, sets `status = "CANCELLED"`, and logs `"  ✗ <name> cancelled after <duration.toFixed(2)>s"`.
8. Create a `TaskOutcome` for "Performance Review", `start()` then `complete()` it, then print `completed` and `cancelled`. Then create a second one for "Follow-up Sync", `start()` then `cancel()` it, then print `completed` and `cancelled` for that one too.

(`duration` will print as `0.00` since `start()` and `complete()` run back to back with no real delay between them, that's expected here, not a bug.)
*/

class TaskOutcome {
  constructor(name) {
    this.name = name;
    this._startTime = null;
    this._endTime = null;
    this.status = "PENDING";
  }
  //2. Add a getter `duration` that returns `0` if either `_startTime` or
  //  `_endTime` is missing, otherwise returns `(this._endTime - this._startTime) / 1000` (seconds).
  get duration() {
    if (this._startTime === null || this._endTime === null) {
      return 0;
    } else {
      return this._endTime - this._startTime / 1000;
    }
  }
  get completed() {
    if (this.status === "COMPLETED") {
      return true;
    } else {
      return false;
    }
  }

  get cancelled() {
    if (this.status === "CANCELLED") {
      return true;
    } else {
      return false;
    }
  }
  //5. Add a method `start()` that sets `_startTime = Date.now()`,
  // sets `status = "IN_PROGRESS"`, and logs `"  Started: <name>"`.

  start() {
    this.startTime = Date.now();
    this.status = "IN_PROGRESS";
    console.log(`  Started: ${this.name}`);
  }
  //6. Add a method `complete()` that sets `_endTime = Date.now()`,
  // sets `status = "COMPLETED"`, and logs `"  ✓ <name> completed in <duration.toFixed(2)>s"`.

  complete() {
    this.endTime = Date.now();
    this.status = "COMPLETED";
    console.log(`✓ ${this.name} completed in ${this.duration.toFixed(2)}s`);
  }

  //7. Add a method `cancel()` that sets `_endTime = Date.now()`,
  // sets `status = "CANCELLED"`, and logs `"  ✗ <name> cancelled after
  // <duration.toFixed(2)>s"`.

  cancel() {
    this.endTime = Date.now();
    this.status = "CANCELLED";
    console.log(`✗ ${this.name} cancelled after ${this.duration.toFixed(2)}s`);
  }
}

/*8. Create a `TaskOutcome` for "Performance Review", `start()` then `complete()` it,
then print `completed` and `cancelled`. Then create a second one for "Follow-up Sync", 
`start()` then `cancel()` it, then print `completed` and `cancelled` for that one too.
(`duration` will print as `0.00` since `start()` and `complete()` run back to back with 
   no real delay between them, that's expected here, not a bug.)
*/

const reviewTask = new TaskOutcome("Performance Review"); // 1st task
reviewTask.start();
reviewTask.complete();
console.log();
console.log(`Completed? ${reviewTask.completed}`);
console.log(`Completed? ${reviewTask.cancelled}`);
console.log();
console.log("A cancelled task:");
// Second task
const followUpTask = new TaskOutcome("Follow-up Sync"); // 2nd task
followUpTask.start();
followUpTask.cancel();
console.log(`Completed? ${followUpTask.completed}`);
console.log(`Completed? ${followUpTask.cancelled}`);

/*
Can you explain what makes a getter/setter pair different from just writing 
`getValue()`/`setValue(x)` methods? Do you know what happens if you try to write 
to a property that only has a getter? Can you name one reason to prefer a computed 
getter over storing the same value in a second field?
Ans - A getter/setter pair lets an object property look like a normal field, 
even though code runs behind the scenes.
The difference is mostly how they're used:

Methods require parentheses:
acc.getBalance()
acc.setBalance(200)
Getters/setters behave like properties:
acc.balance
acc.balance = 200

This often makes code cleaner and more natural.


*/
