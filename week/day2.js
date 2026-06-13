// 1. String: Textual data
const internName = "Alex Star";

// 2. Number: Integer or floating-point number
let currentScore = 85.5;

// 3. Boolean: Logical true or false value
const isPassing = true;

// 4. Null: Explicitly empty / intentional absence of a value
let disciplinaryAction = null;

// 5. Undefined: Declared but not yet assigned a value
let pendingReviewNotes; 

// Let's use the typeof operator to verify their types
console.log(typeof internName);       // Output: "string"
console.log(typeof currentScore);     // Output: "number"
console.log(typeof isPassing);        // Output: "boolean"
console.log(typeof disciplinaryAction);// Output: "object" (Note: This is a well-known JS legacy behavior)
console.log(typeof pendingReviewNotes);// Output: "undefined"
// Grade Calculator Logic
if (currentScore >= 90) {
    console.log("Grade: A - Excellent performance!");
} else if (currentScore >= 80) {
    console.log("Grade: B - Very good job, keep it up.");
} else if (currentScore >= 70) {
    console.log("Grade: C - Satisfactory. Room for improvement.");
} else if (currentScore >= 60) {
    console.log("Grade: D - Needs immediate attention.");
} else {
    console.log("Grade: F - Failed to meet requirements.");
}
// User input variables to test
let inputUsername = "admin";
let inputPassword = "1234";

// Strict validation condition using logical AND (&&)
if (inputUsername === "admin" && inputPassword === "1234") {
    console.log("Access Granted: Welcome back, Administrator.");
} else {
    console.log("Access Denied: Invalid username or password.");
}

