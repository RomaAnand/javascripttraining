console.log("===== Exercise 1: Base Class and Two Child Classes =====");
/*
## Exercise 1: Base Class and Two Child Classes
**Scenario:** Every task an HR system tracks shares some behavior (starting, cancelling, completing), but a meeting and a remote call each need something extra.
**Requirements:**
1. Create a base class `Task` with:
   - A constructor accepting `name`, setting `this.name = name`, `this.status = "PENDING"`, and `this.notes = []`
   - A method `start()` that logs `"  Starting: <name>"` and sets `status` to `"IN_PROGRESS"`
   - A method `cancel(reason)` that pushes `reason` into `notes`, sets `status` to `"CANCELLED"`, and logs `"  ✗ <name> CANCELLED: <reason>"`
   - A method `complete()` that sets `status` to `"COMPLETED"` and logs `"  ✓ <name> COMPLETED"`

2. Create a child class `MeetingTask extends Task` with:
   - A constructor accepting `name`, `location`, `room`, calling `super(name)` first, then setting `this.location` and `this.room`
   - A method `arrive()` that logs `"    Arriving at: <location>"`
   - A method `enterRoom()` that logs `"    Entering: <room>"`
   - An **overridden** `start()` that calls `super.start()`, then calls `this.arrive()`

3. Create a child class `RemoteTask extends Task` with:
   - A constructor accepting `name`, `platform`, `duration` (default `20`), calling `super(name)` first, then setting `this.platform` and `this.duration`
   - A method `connectCall()` that logs `"    Connecting via: <platform>"` and `"    Expected duration: <duration>min"`
   - An **overridden** `start()` that calls `super.start()`, then calls `this.connectCall()`

4. Create `performanceReview = new MeetingTask("Performance Review", "Conference Room B", "Room 204")` and `onboardingCall = new RemoteTask("Onboarding Call", "SecureVideo", 30)`. For `performanceReview`: call `start()`, `enterRoom()`, `complete()`. For `onboardingCall`: call `start()`, `complete()`.

5. Print `instanceof` checks: is `performanceReview` an instance of `MeetingTask`? Of `Task`? Of `Object`? Is `onboardingCall` an instance of `RemoteTask`? Of `Task`?

6. Create a third `MeetingTask` called "Follow-up Sync" (location `"Conference Room A"`, room `"Room 101"`), `start()` it, then `cancel("Manager unavailable")` it. Print its `notes` and `status` afterward.
/*
## Exercise 1: Base Class and Two Child Classes

**Scenario:** Every task an HR system tracks shares some behavior (starting, cancelling, completing), but a meeting and a remote call each need something extra.

**Requirements:**
1. Create a base class `Task` with:
   - A constructor accepting `name`, setting `this.name = name`, `this.status = "PENDING"`, and `this.notes = []`
   - A method `start()` that logs `"  Starting: <name>"` and sets `status` to `"IN_PROGRESS"`
   - A method `cancel(reason)` that pushes `reason` into `notes`, sets `status` to `"CANCELLED"`, and logs `"  ✗ <name> CANCELLED: <reason>"`
   - A method `complete()` that sets `status` to `"COMPLETED"` and logs `"  ✓ <name> COMPLETED"`

2. Create a child class `MeetingTask extends Task` with:
   - A constructor accepting `name`, `location`, `room`, calling `super(name)` first, then setting `this.location` and `this.room`
   - A method `arrive()` that logs `"    Arriving at: <location>"`
   - A method `enterRoom()` that logs `"    Entering: <room>"`
   - An **overridden** `start()` that calls `super.start()`, then calls `this.arrive()`

3. Create a child class `RemoteTask extends Task` with:
   - A constructor accepting `name`, `platform`, `duration` (default `20`), calling `super(name)` first, then setting `this.platform` and `this.duration`
   - A method `connectCall()` that logs `"    Connecting via: <platform>"` and `"    Expected duration: <duration>min"`
   - An **overridden** `start()` that calls `super.start()`, then calls `this.connectCall()`

4. Create `performanceReview = new MeetingTask("Performance Review", "Conference Room B", "Room 204")` and `onboardingCall = new RemoteTask("Onboarding Call", "SecureVideo", 30)`. For `performanceReview`: call `start()`, `enterRoom()`, `complete()`. For `onboardingCall`: call `start()`, `complete()`.

5. Print `instanceof` checks: is `performanceReview` an instance of `MeetingTask`? Of `Task`? Of `Object`? Is `onboardingCall` an instance of `RemoteTask`? Of `Task`?

6. Create a third `MeetingTask` called "Follow-up Sync" (location `"Conference Room A"`, room `"Room 101"`), `start()` it, then `cancel("Manager unavailable")` it. Print its `notes` and `status` afterward.

*/
console.log("Creating child class instances:");
// Base class
class Task {
  constructor(name) {
    this.name = name;
    this.status = "PENDING";
    this.notes = [];
  }
  start() {
    console.log(`  Starting: ${this.name}`);
    this.status = "IN_PROGRESS";
  }

  cancel(reason) {
    this.notes.push(reason);
    this.status = "CANCELLED";
    console.log(`  ✓ ${this.name} CANCELLED: ${reason}`);
  }
  complete() {
    this.status = "COMPLETED";
    console.log(`  ✓ ${this.name} COMPLETED`);
  }
}
// Child class 1
class MeetingTask extends Task {
  constructor(name, location, room) {
    super(name);
    this.location = location;
    this.room = room;
  }

  arrive() {
    console.log(`    Arriving at: ${this.location}`);
  }
  enterRoom() {
    console.log(`    Entering: ${this.room}`);
  }
  start() {
    super.start();
    this.arrive();
  }
}
// Child class 2
class RemoteTask extends Task {
  constructor(name, platform, duration = 20) {
    super(name);
    this.platform = platform;
    this.duration = duration;
  }
  connectCall() {
    console.log(`    Connecting via: ${this.platform}`);
    console.log(`    Expected duration: ${this.duration}min`);
  }
  start() {
    super.start();
    this.connectCall();
  }
}
//4. Create `performanceReview = new MeetingTask("Performance Review", "Conference Room B",
//  "Room 204")` and `onboardingCall = new RemoteTask("Onboarding Call", "SecureVideo", 30)`.
// For `performanceReview`: call `start()`, `enterRoom()`, `complete()`.
// For `onboardingCall`: call `start()`, `complete()`.

const performanceReview = new MeetingTask(
  "Performance Review",
  "Conference Room B",
  "Room 204",
);
const onboardingCall = new RemoteTask("Onboarding Call", "SecureVideo", 30);
console.log("Running meeting task:");
performanceReview.start();
performanceReview.enterRoom();
performanceReview.complete();

console.log("\nRunning remote task:");
onboardingCall.start();
onboardingCall.complete();

//5. Print `instanceof` checks: is `performanceReview` an instance of `MeetingTask`?
// Of `Task`? Of `Object`?
// Is `onboardingCall` an instance of `RemoteTask`? Of `Task`?
console.log("Inheritance checks:");
console.log(
  `performanceReview instanceof MeetingTask: ${performanceReview instanceof MeetingTask}`,
);
console.log(
  `performanceReview instanceof Task: ${performanceReview instanceof Task}`,
);
console.log(
  `performanceReview instanceof Object: ${performanceReview instanceof Object}`,
);
console.log("");
//6. Create a third `MeetingTask` called "Follow-up Sync" (location `"Conference Room A"`,
// room `"Room 101"`), `start()` it, then `cancel("Manager unavailable")` it.
// Print its `notes` and `status` afterward.
console.log(
  `onboardingCall instanceof RemoteTask: ${onboardingCall instanceof RemoteTask}`,
);
console.log(
  `  onboardingCall instanceof Task: ${onboardingCall instanceof Task}`,
);
console.log("");
// Third MeetingTask
const followUpSync = new MeetingTask(
  "Follow-up Sync",
  "Conference Room A",
  "Room 101",
);

followUpSync.start();
followUpSync.cancel("Manager unavailable");

console.log("  notes:", followUpSync.notes);
console.log("  status:", followUpSync.status);

console.log("===== Exercise 2: Multi-Level Inheritance Chain =====");
/*
**Scenario:** An employee's record starts as a plain record, becomes a digital record once it's in a system, and becomes a secure record once that system encrypts it, each level building on the one before.
**Requirements:**
1. Create a class `EmployeeRecord` with a constructor accepting `employeeName`, and a method `access()` that logs `"  Accessing record for <employeeName>"`.
2. Create `DigitalRecord extends EmployeeRecord` with a constructor accepting `employeeName` and `system` (calling `super(employeeName)`), and a method `connectSystem()` that logs `"  Connecting to <system> system"`.
3. Create `SecureRecord extends DigitalRecord` with a constructor accepting `employeeName`, `system`, and `encrypted` (default `true`, calling `super(employeeName, system)`), and a method `secureLink()` that logs `"  Establishing secure link (encrypted: <encrypted>)"`.
4. Create `ashaRecord = new SecureRecord("Aisha Khan", "PeopleHub", true)`.
5. Print `instanceof` checks against all three classes plus `Object`.
6. Call `secureLink()`, then `connectSystem()`, then `access()` on `ashaRecord`, in that order, this proves a `SecureRecord` has access to every method up the whole chain, not just its own.
*/
class EmployeeRecord {
  constructor(employeeName) {
    this.employeeName = employeeName;
  }
  access() {
    console.log(`  Accessing record for ${this.employeeName}`);
  }
}
//1st Child Class
class DigitalRecord extends EmployeeRecord {
  constructor(employeeName, system) {
    super(employeeName);
    this.system = system;
  }
  connectSystem() {
    console.log(`  Connecting to ${this.system} system`);
  }
}
//Grandchild class
class SecureRecord extends DigitalRecord {
  constructor(employeeName, system, encrypted = true) {
    super(employeeName, system);
    this.encrypted = encrypted;
  }
  secureLink() {
    console.log(`  Establishing secure link (encrypted: ${this.encrypted})`);
  }
}
// Create object
//4. Create `ashaRecord = new SecureRecord("Aisha Khan", "PeopleHub", true)`.
const ashaRecord = new SecureRecord("Aisha Khan", "PeopleHub", true);
console.log("\ninstanceof checks:");
//5. Print `instanceof` checks against all three classes plus `Object`.
console.log(
  `ashaRecord instanceof SecureRecord: ${ashaRecord instanceof SecureRecord}`,
);
console.log(
  `ashaRecord instanceof DigitalRecord: ${ashaRecord instanceof DigitalRecord}`,
);
console.log(
  `ashaRecord instanceof EmployeeRecord: ${ashaRecord instanceof EmployeeRecord}`,
);
console.log(`ashaRecord instanceof Object: ${ashaRecord instanceof Object}`);
console.log("\nAccessing the record:");
//6. Call `secureLink()`, then `connectSystem()`, then `access()` on `ashaRecord`, in that
//  order, this proves a `SecureRecord` has access to every method up the whole chain, not
// just its own.
ashaRecord.secureLink();
ashaRecord.connectSystem();
ashaRecord.access();

/*
## Tricky Questions

1. If `RemoteTask` did NOT define its own `constructor` at all, would 
`new RemoteTask("Call", "Zoom", 15)` still work, and what would `this.platform` be?
2. `MeetingTask.start()` calls `super.start()` first, then `this.arrive()`. What would change 
in the printed output if those two lines were swapped?

Ans - Yes, it would still work.

When a child class doesn't have its own constructor, JavaScript automatically creates one 
like this:

JavaScript
constructor(...args) {
    super(...args);
}
    Key idea: The object can still be created, but any child-specific properties that were
     supposed to be assigned in the child's constructor will not exist.

2. MeetingTask.start() calls super.start() first, then this.arrive(). What would change if 
those two lines were swapped?
start() {
    super.start();
    this.arrive();
}
    Swapped:
    start() {
    this.arrive();
    super.start();
}
    o/p - Arriving at meeting room
Task started
Both methods still run.

✅ The only difference is the order of execution, so the printed messages appear in a 
different order.

Rule to remember: JavaScript executes statements from top to bottom, so swapping the 
lines swaps the output order.
*/
