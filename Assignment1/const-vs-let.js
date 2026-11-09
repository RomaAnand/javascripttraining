/*
const or let?

**Scenario:** A clinic's waiting-room screen shows four values. Some never change during the day, and some change all the time. Pick the right keyword for each one.

Create a file called `const-vs-let.js`.

**Requirements:**
1. Declare these four values. Use `const` or `let` for each, and add a short comment saying why:
   - The clinic's phone number: `"022-4000-1234"`
   - The maximum patients per day: `40`
   - The number of patients waiting: `4`
   - The current token number: `12`
2. Print all four. Then one more patient arrives and the next token is called: update the two values that change to `5` and `13`, and print them again.
3. Try giving the maximum patients per day a new value. Run the file, copy the error message into a comment, then comment the line out.
4. Try writing `const clinicCode;` with no value. Run it, copy the error into a comment, then comment it out.
5. Try declaring `let` for patients waiting a second time. Run it, copy the error into a comment, then comment it out.

*/
"use strict";
const chinicPhoneNo = "022-4000-1234";
//const clinicCode; //SyntaxError: Missing initializer in const declaration
const maxPatientPerDay = 40;
//maxPatientPerDay = 60;      //TypeError: Assignment to constant variable.
let patientWaiting = 4;
//let patientWaiting = 6;   //SyntaxError: Identifier 'patientWaiting' has already been declared
let currentToken = 12;
//Print all four values
console.log("Clinic phone:", chinicPhoneNo);
console.log("Max patients per day:", maxPatientPerDay);
console.log("Patients waiting:", patientWaiting);
console.log("Current token:", currentToken);
//one more patient arrives and the next token is called
patientWaiting = 5;
currentToken = 13;
//Print all four values
console.log("\nUpdate After One more patient arrives");
console.log("Patients waiting:", patientWaiting);
console.log("Current token:", currentToken);
