/*
"use strict";

let account-holder = "Meera Joshi";
let 2ndAccountId = "ACC-305";
let accountBalance = 15000;
acountBalance = 20000;
console.log("Holder:", account-holder);
console.log("Second account:", 2ndAccountId);
console.log("Balance:", accountBalance);

**Requirements:**
1. Run the file. Read the error, fix that line, and run it again. Repeat until it runs
2. Rename any invalid variable names to valid camelCase names. Update every line that uses them
3. Fix the typo so the balance is really updated to 20000
4. Once it works, put the typo back and delete the `"use strict";` line. Run it again. Write a comment at the top of the file explaining what changed and why that's dangerous
5. Put `"use strict";` back and fix the typo again before you submit
*/
"use strict";
let accountHolder = "Meera Joshi"; //hyphen (-) is not allowed in a variable name,
//Change variable name to camelCase
let secondAccountId = "ACC-305"; // Variable names cannot start with a number"2ndAccountId",Change it
let accountBalance = 15000;
accountBalance = 20000; // acountBalance and accountBalance are 2 different variables
console.log("Holder:", accountHolder); // Update variable name here also
console.log("Second account:", secondAccountId); // Change variable name here also
console.log("Balance:", accountBalance);
