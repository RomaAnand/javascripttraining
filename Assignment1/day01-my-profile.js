/*
### Part 1: Create Your Profile (5 min)

Create a new file called `day01-my-profile.js`. Store your profile details in variables, then print them. Use a banking job title as your role.

**Requirements:**
- Create one variable for each detail: name, role, years of experience, one banking tool you use, and why you're learning JavaScript
- Declare each variable with `let`
- Use camelCase names, for example `fullName` and `yearsOfExperience`
- Print each detail with a label in front, for example `"Name: " + fullName`

**Example Output:**
```
Name: Priya Sharma
Role: Loan Officer
Experience: 3 years
Tool: Core Banking System
Learning Goal: To automate repetitive account checks
```

**Hints:**
- Declare all your variables at the top of the file, then print them below
- Use `+` to join a label and a variable: `console.log("Role: " + jobRole);`
- Text values need quotes. Numbers don't: `let yearsOfExperience = 3;`

*/

let firstName = "Roma";
let lastName = "Anand";
let jobRole = "Automation Test Engineer";
let experience = 16;
let toolName = "Mobius System";
let goal = "To automate generated statement verification";
console.log("Name: " + firstName + " " + lastName);
console.log("Role: " + jobRole);
console.log("Experience: " + experience);
console.log("Tool: " + toolName);
console.log("Learning Goal: " + goal);
