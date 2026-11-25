console.log("===== Exercise 1: Predict the typeof Output =====");
/*
## Exercise 1: Predict the typeof Output

Before running any code, read each declaration below and write down what you think `typeof` will return. Then copy the code into your file, run it, and compare.

```javascript
let a = "APPROVED";
let b = new String("APPROVED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log(typeof a);  // ?
console.log(typeof b);  // ?
console.log(typeof c);  // ?
console.log(typeof d);  // ?
console.log(typeof e);  // ?
console.log(typeof f);  // ?
```

Write your predictions before running:
```
typeof a → ___
typeof b → ___
typeof c → ___
typeof d → ___
typeof e → ___
typeof f → ___
```

Add a `console.log("Expected: ___")` line above each `typeof` call showing your prediction, then run the file and add a short comment on each line explaining why (primitive vs object).
*/

let a = "APPROVED"; // string -> primitive string
let b = new String("APPROVED"); // object -> String wrapper object created with new

let c = 42; // number -> primitive number
let d = new Number(42); //object -> Number wrapper object created with new

let e = true; // boolean -> primitive boolean
let f = new Boolean(true); // object -> Boolean wrapper object created with new

console.log("Expected: string");
console.log(typeof a); // string -> primitive string

console.log("Expected: object");
console.log(typeof b); // object -> String wrapper object created with new

console.log("Expected: number");
console.log(typeof c); // number -> primitive number

console.log("Expected: object");
console.log(typeof d); // object -> Number wrapper object created with new

console.log("Expected: boolean");
console.log(typeof e); // boolean -> primitive boolean

console.log("Expected: object");
console.log(typeof f); // object -> Boolean wrapper object created with new

console.log("===== Exercise 2: The === Comparison Trap =====");
/*
## Exercise 2: The === Comparison Trap
A helper function compares two transaction status strings. It works fine when both values 
are plain strings, but fails when one comes from a different source, like a legacy system 
that wraps strings in `new String(...)`.

```javascript
function assertStatusMatch(expected, actual) {
    if (expected === actual) {
        console.log("✅ Status matches: " + actual);
    } else {
        console.log("❌ Status mismatch! Expected: " + expected + ", Got: " + actual);
    }
}

// Case 1: Both are primitives, works fine
let status1 = "APPROVED";
let status2 = "APPROVED";
assertStatusMatch(status1, status2);

// Case 2: One is a wrapper object, BREAKS!
let status3 = "APPROVED";
let status4 = new String("APPROVED");
assertStatusMatch(status3, status4);

// Case 3: Two wrapper objects, ALSO BREAKS!
let status5 = new String("APPROVED");
let status6 = new String("APPROVED");
assertStatusMatch(status5, status6);
```

Copy the code and run it to see the broken output. Then:

1. Add `console.log(typeof status3, typeof status4)` to see exactly why Case 2 fails
2. Fix `assertStatusMatch` so it handles both primitives and wrapper objects, hint: `String(value)` converts a wrapper object back to a primitive string

Expected output after your fix:
*/
function assertStatusMatch(expected, actual) {
  if (String(expected) === String(actual)) {
    console.log("✅ Status matches: " + String(actual));
  } else {
    console.log(
      "❌ Status mismatch! Expected: " +
        String(expected) +
        ", Got: " +
        String(actual),
    );
  }
}

// Case 1: Both are primitives
let status1 = "APPROVED";
let status2 = "APPROVED";
assertStatusMatch(status1, status2);

// Case 2: One wrapper object
let status3 = "APPROVED";
let status4 = new String("APPROVED");

console.log(typeof status3, typeof status4);

assertStatusMatch(status3, status4);

// Case 3: Two wrapper objects
let status5 = new String("APPROVED");
let status6 = new String("APPROVED");
assertStatusMatch(status5, status6);
console.log("===== Exercise 3: The Boolean Wrapper Trap =====");
/*
console.log("===== ")
## Exercise 3: The Boolean Wrapper Trap

This is one of the most surprising JavaScript gotchas. A validation function receives a 
Boolean wrapper object and produces the wrong result.

```javascript
function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);   // looks like false...

checkFeatureEnabled(featureA);   // expected: ENABLED
checkFeatureEnabled(featureB);   // expected: DISABLED
checkFeatureEnabled(featureC);   // expected: DISABLED  (but is it?)
```

Run the code and note the surprising output for `featureC`. Then:

1. Add `console.log("typeof featureC:", typeof featureC)` to see why
2. Add `console.log("Boolean(featureC):", Boolean(featureC))` to understand what the object actually evaluates to
3. Fix the call so `featureC` behaves as a real `false`

Keep in mind: `new Boolean(false)` is an object, and any object is truthy in JavaScript, regardless of what value it wraps.
*/
function checkFeatureEnabled(flag) {
  if (flag) {
    console.log("Feature is ENABLED");
  } else {
    console.log("Feature is DISABLED");
  }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);

checkFeatureEnabled(featureA);
checkFeatureEnabled(featureB);
checkFeatureEnabled(featureC);
/*  
## Exercise 4: Normalise Customer Data with String Methods

Your banking system receives customer emails and usernames from different sources, some 
uppercase, some lowercase, some padded with spaces. Normalising them before comparison means 
your checks won't fail due to formatting differences.

Write a function `normaliseEmail(input)` that trims whitespace and converts to lowercase, 
and a function `normaliseUsername(input)` that does the same but also removes a leading `@` 

if present (some customers accidentally include it).

Test with these inputs:

```javascript
let emails = [
    "  AISHA@EXAMPLE.COM  ",
    "Raj@Example.COM",
    "ADMIN@BANKCORP.ORG   "
];

let usernames = [
    "  AishaK  ",
    "@AdminUser",
    "RAJ_VERMA "
];
```

Expected output:
```
Normalised emails:
  aisha@example.com
  raj@example.com
  admin@bankcorp.org

Normalised usernames:
  aishak
  adminuser
  raj_verma
```

Bonus: write `areEmailsEqual(email1, email2)` that normalises both before comparing 
and returns `true` or `false`.
*/
console.log("=== Exercise 4: Normalise Customer Data with String Methods ===");

// Function to normalise email
function normaliseEmail(input) {
  return input.trim().toLowerCase();
}

// Function to normalise username
function normaliseUsername(input) {
  let username = input.trim().toLowerCase();

  // Remove leading @ if present
  if (username.startsWith("@")) {
    username = username.slice(1);
  }

  return username;
}

// Bonus function
function areEmailsEqual(email1, email2) {
  return normaliseEmail(email1) === normaliseEmail(email2);
}

let emails = [
  "  AISHA@EXAMPLE.COM  ",
  "Raj@Example.COM",
  "ADMIN@BANKCORP.ORG   ",
];

let usernames = ["  AishaK  ", "@AdminUser", "RAJ_VERMA "];

console.log("Normalised emails:");
emails.forEach((email) => {
  console.log("  " + normaliseEmail(email));
});

console.log("\nNormalised usernames:");
usernames.forEach((username) => {
  console.log("  " + normaliseUsername(username));
});

// Bonus tests
console.log("\nEmail comparison tests:");
console.log(areEmailsEqual(" AISHA@EXAMPLE.COM ", "aisha@example.com")); // true

console.log(areEmailsEqual("raj@example.com", "admin@bankcorp.org")); // false
/*
## Tricky Questions

1. `Boolean()` called as a plain function (no `new`) converts its argument to a 
primitive boolean. So does `Boolean(new Boolean(false))` return `false`, or does
something else happen?
 Ans - Boolean() as a function converts its argument using JavaScript's truthy/falsy rules.
 new Boolean(false)
 does not create the primitive value false. It creates a Boolean object.
 And all objects are truthy in JavaScript.
 Boolean(new Boolean(false)) --> Boolean(object)
 Since the argument is an object, the result is: true
 console.log(Boolean(false));              // false
console.log(Boolean(new Boolean(false))); // true
let b = new Boolean(false);

console.log(b);          // [Boolean: false]
console.log(typeof b);   // "object"
b contains the internal boolean value false, but the object itself exists,
 and any existing object is truthy:
 Comparison
Expression	Result
Boolean(false)	false
Boolean(0)	false
Boolean("")	false
Boolean(new Boolean(false))	true
Boolean({})	true
Boolean([])	true
Interview-style takeaway

✅ Boolean(value) returns a primitive boolean.

✅ new Boolean(value) returns a Boolean object.

✅ Even new Boolean(false) is truthy, because it is an object.

Q2) 2. `new Number(5) == 5` (loose equality) returns `true`, but 
`new Number(5) === 5` (strict equality) returns `false`.
 What's actually different between the two checks that explains this?
Ans =
The difference is primitive value vs object, and the difference between 
loose equality (==) and strict equality (===).
new Number(5) == 5     // true
new Number(5) === 5    // false
let a = new Number(5);
typeof a;   // "object"
typeof 5;   // "number"
new Number(5)-- creates something conceptually similar to:
{
  value: 5
}
  Why does == return true?
  Loose equality (==) performs type coercion.
When comparing an object with a primitive:
new Number(5) == 5
JavaScript automatically converts the Number object to its primitive value:
5 == 5
Now both sides are primitive numbers, so the result is: true
Why does === return false?
Strict equality (===) does not perform type coercion.
It checks both:
Value
Type
Example:new Number(5) === 5
Left side:object
Right side:number
Since the types differ:false

Loose equality -- new Number(5) == 5
JavaScript does:new Number(5).valueOf() == 5 --- 5 == 5 --- true

Strict equality -- new Number(5) === 5
JavaScript does:object === number --- Types differ immediately: ---false

new String("hello") == "hello"     // true
new String("hello") === "hello"    // false
Same reason:

new String("hello") → object
"hello" → primitive string

== converts the object to a primitive.

=== does not.



