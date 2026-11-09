/*
### Part 4: Predict, Then Run (5 min)

Create a new file called `day01-scope-predictions.js` and copy the four snippets below into it, 
in this order.
**Before you run the file**, write what you think each snippet will print as a comment above it.
 Then run the file and compare. If a prediction was wrong, write one line explaining why.

*/
//```javascript
// Snippet A
/*let branchCode = "MUM-01"; //A variable branchCode is created in the outer (global) scope
if (true) {
  let branchCode = "PUN-02";
  console.log("Inside:", branchCode); //This does not modify the outer variable.
  //It creates a new variable that exists only inside the block { ... }.
}
console.log("Outside:", branchCode); //The inner branchCode no longer exists
//because its scope was limited to the if block.

/*Output will be 
  Inside: PUN-02
  Outside: MUM-01
*/

// Snippet B
/*function showServiceFee() {
  console.log("Fee before:", serviceFee);
  var serviceFee = 250; // variable declaration is hoisted but value assignment stays here
  console.log("Fee after:", serviceFee);
}
showServiceFee();

/*
Output -
Fee before: undefined // variable declaration is hoisted but value assignment done afterward so its undefined yet
Fee after:  250 
*/

// Snippet C
/*
function checkLimitWithVar() {
  if (true) {
    var dailyLimit = 50000;                // var → Function Scope
  console.log("Limit with var:", dailyLimit);
}
checkLimitWithVar();
/*
Output -
Limit with var: 50000              //      var → Function Scope
*/

// Snippet D
function checkLimitWithLet() {
  if (true) {
    let dailyLimit = 50000; //Variables declared with let are block-scoped,
    // they only exist inside the pair of braces { ... }
  }
  console.log("Limit with let:", dailyLimit);
}
checkLimitWithLet();

/*
Output -
ReferenceError: dailyLimit is not defined             //      let → Block Scope
*/
