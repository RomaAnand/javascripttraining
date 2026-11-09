/*
## Exercise 7: Page Text Is Always a String

**Scenario:** When a Playwright test reads text from a web page, it always gets a string, even when the text looks like a number. Practise handling that.

Create a file called `page-text-coercion.js`.

**Requirements:**
1. Start with these values:
   ```javascript
   let consultationFeeText = "500"; // read from the page
   let labFeeText = "250";          // read from the page
   let discount = 50;               // a real number in your test
   ```
2. Write your prediction as a comment, then print `consultationFeeText + labFeeText`.
3. Fix it with `Number()` so the total is `750`, and print it.
4. Write predictions, then print `consultationFeeText + discount` and `consultationFeeText - discount`.
5. Given `let displayedTotal = "750";` and `let expectedTotal = 750;`, print the result of `==`, `===`, and `Number(displayedTotal) === expectedTotal`. Write a comment saying which one a test should use.
6. Given `let waitTimeText = "about 20 mins";`, convert it with `Number()`, print the result, and use `Number.isNaN()` in an `if` to print `"Wait time is not a valid number"`.
7. Store `0.1 + 0.2` in a variable called `copay`. Print it, print whether it `=== 0.3`, and print whether `copay.toFixed(2) === "0.30"`.
*/

let consultationFeeText = "500"; // read from the page
let labFeeText = "250"; // read from the page
let discount = 50; // a real number in your test
//2. Write your prediction as a comment, then print `consultationFeeText + labFeeText`.

console.log("--- Adding two page values ---");
console.log(
  `consultationFeeText + labFeeText -> ${consultationFeeText} + ${labFeeText}`,
);
//Output : consultationFeeText + labFeeText -> 500 + 250
console.log(
  `consultationFeeText + labFeeText -> ${consultationFeeText + labFeeText}`,
);
//Output : consultationFeeText + labFeeText -> 500250

//3. Fix it with `Number()` so the total is `750`, and print it.
//Fixed total → 750
console.log(
  `Fixed total → ${Number(consultationFeeText)} + ${Number(labFeeText)}`,
);
//Output : Fixed total → 500 + 250
console.log(`Fixed total → ${Number(consultationFeeText + labFeeText)}`);
//Output : Fixed total → 500250
console.log(
  `Fixed total → ${Number(consultationFeeText) + Number(labFeeText)}`,
);
//Correct Output : Fixed total → 750
//4. Write predictions, then print `consultationFeeText + discount`
// and `consultationFeeText - discount`.
//--- Mixing a string and a number ---
//consultationFeeText + discount → 50050
//consultationFeeText - discount → 450
console.log(
  `consultationFeeText + discount -> ${Number(consultationFeeText) + Number(discount)}`,
);
//Output : consultationFeeText + discount -> 550
console.log(
  `consultationFeeText + discount -> ${consultationFeeText + discount}`,
);
//Output : consultationFeeText + discount -> 50050
console.log(
  `consultationFeeText - discount -> ${Number(consultationFeeText) - Number(discount)}`,
);
//Output : consultationFeeText - discount -> 450

//5. Given `let displayedTotal = "750";` and `let expectedTotal = 750;`,
// print the result of `==`, `===`, and `Number(displayedTotal) === expectedTotal`.
// Write a comment saying which one a test should use.

let displayedTotal = "750";
let expectedTotal = 750;
console.log("==  :", displayedTotal == expectedTotal);
//Output : ==  : true
console.log("=== :", displayedTotal === expectedTotal);
//Output : === : false
console.log(
  "Number(displayedTotal) === expectedTotal :",
  Number(displayedTotal) === expectedTotal,
);
//Output : Number(displayedTotal) === expectedTotal : true

/* Note to learn -
In JavaScript, both == and === compare values, but they behave differently.

== (Loose Equality)
Compares values after type conversion (coercion).
JavaScript may automatically convert one data type to another before comparing.
Ex- console.log("750" == 750); Output : true
=== (Strict Equality)
Compares both value and data type.
No automatic type conversion.
Ex- console.log("750" === 750); Output : false
*/

//6. Given `let waitTimeText = "about 20 mins";`, convert it with `Number()`,
// print the result, and use `Number.isNaN()` in an `if` to print `"Wait time is not a valid number"`.

let waitTimeText = "about 20 mins";
let waitTime = Number(waitTimeText);

console.log(waitTime);

if (Number.isNaN(waitTime)) {
  // which returns true
  console.log("Wait time is not a valid number");
}
/* Output -
NaN   // which stands for Not a Number.
Wait time is not a valid number
*/

//7. Store `0.1 + 0.2` in a variable called `copay`.
// Print it, print whether it `=== 0.3`,
// and print whether `copay.toFixed(2) === "0.30"`.

let copay = 0.1 + 0.2;

console.log("Copay:", copay); //Output : Copay: 0.30000000000000004
console.log("copay === 0.3:", copay === 0.3); //print whether it `=== 0.3`, which is false
console.log(
  'copay.toFixed(2) === "0.30":', //print whether `copay.toFixed(2) === "0.30"` which is true
  copay.toFixed(2) === "0.30",
);
