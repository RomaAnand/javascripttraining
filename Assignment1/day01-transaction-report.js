/*
### Part 2: Print a Transaction Report (10 min)

Create a new file called `day01-transaction-report.js` and write code to print a daily transaction report for a bank branch.

**Requirements:**
1. Print a report title (for example, "Daily Transaction Report")
2. Print 5 transactions, each with a transaction ID and an amount
3. Give each transaction a status: APPROVED, DECLINED, or PENDING. Use each status at least once
4. Use blank lines to make it readable
5. Print a summary at the end (for example, "3 Approved, 1 Declined, 1 Pending")

**Example Output:**
```
==========================================
        DAILY TRANSACTION REPORT
==========================================

Transaction 1: TXN-101, Amount: 5000
Status: APPROVED

Transaction 2: TXN-102, Amount: 12000
Status: DECLINED

Transaction 3: TXN-103, Amount: 800
Status: PENDING

Transaction 4: TXN-104, Amount: 25000
Status: APPROVED

Transaction 5: TXN-105, Amount: 3000
Status: APPROVED

==========================================
        SUMMARY
==========================================
Total Transactions: 5
Approved: 3
Declined: 1
Pending: 1
==========================================
```

**Hints:**
- Use `console.log("")` for blank lines
- Use `console.log("==========")` for borders
*/

console.log("==========================================");
console.log("     DAILY TRANSACTION REPORT    ");
console.log("==========================================");
console.log("");
console.log("Transaction 1: TXN-101, Amount: 5000");
console.log("Status: APPROVED");
console.log("");
console.log("Transaction 2: TXN-102, Amount: 12000");
console.log("Status: DECLINED");
console.log("");
console.log("Transaction 3: TXN-103, Amount: 800");
console.log("Status: PENDING");
console.log("");
console.log("Transaction 4: TXN-104, Amount: 25000");
console.log("Status: APPROVED");
console.log("");
console.log("Transaction 5: TXN-105, Amount: 3000");
console.log("Status: APPROVED");
console.log("");
console.log("==========================================");
console.log("               SUMMARY            ");
console.log("==========================================");
console.log("Total Transactions: 5");
console.log("Approved: 3");
console.log("Declined: 1");
console.log("Pending: 1");
console.log("==========================================");
