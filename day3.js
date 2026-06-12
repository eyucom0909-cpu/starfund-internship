// Multiplication Table Function
function printMultiplicationTable(number) {
    console.log(`--- Multiplication Table for ${number} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Test the function with a number (e.g., 7)
printMultiplicationTable(7);
// Prime Number Checker Function
function isPrime(number) {
    // Numbers less than or equal to 1 are not prime
    if (number <= 1) {
        return false;
    }

    // Check for divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If a divisor is found, it's not prime. 
            // The return statement breaks out of the loop and function immediately.
            return false; 
        }
    }

    // If no divisors were found, the number is prime
    return true;
}

// Test cases to verify outputs
const testNumbers = [2, 4, 7, 15, 23];

testNumbers.forEach(num => {
    console.log(`Is ${num} a prime number? ${isPrime(num)}`);
});
/**
 * StarFund Day 3 Assignment: Campaign Funding Calculator
 * * Non-negotiable Rules Applied:
 * - Meaningful variable names are used[cite: 572].
 * - Functions use the 'return' keyword instead of relying solely on logs[cite: 696, 729].
 * - No magic numbers; constants are leveraged for constraints[cite: 572].
 */

const MIN_SUCCESS_PERCENT = 100; // Success threshold constant [cite: 572]

/**
 * Calculates funding completion and victory status for StarFund campaigns.
 * @param {number} goal - The financial goal of the crowdfunding campaign.
 * @param {number} raised - The actual amount funded/raised.
 * @returns {object} An object containing the funding percentage and success status.
 */
function calculateFunding(goal, raised) {
    // Edge case handling: Prevent division by zero if an empty goal is evaluated
    if (goal <= 0) {
        return {
            percentFunded: 0,
            isSuccessful: false
        };
    }

    // Process calculations
    const percentFunded = (raised / goal) * 100;
    const isSuccessful = percentFunded >= MIN_SUCCESS_PERCENT;

    // Return properties explicitly as values [cite: 696, 729]
    return {
        percentFunded: parseFloat(percentFunded.toFixed(2)), // Clean decimal precision
        isSuccessful: isSuccessful
    };
}


// ==========================================
// INTEGRATED TESTING & EXPECTED OUTPUTS
// ==========================================
// The handbook requires testing the function with 5 different inputs.

const testingDatasets = [
    { label: "Test Case 1: Underfunded Campaign", goal: 50000, raised: 25000 },
    { label: "Test Case 2: Exact Goal Hit", goal: 100000, raised: 100000 },
    { label: "Test Case 3: Overfunded (Super Successful)", goal: 20000, raised: 35000 },
    { label: "Test Case 4: Zero Funds Raised", goal: 75000, raised: 0 },
    { label: "Test Case 5: Micro-Campaign Active", goal: 1000, raised: 1250 }
];

console.log("============= RUNNING STARFUND TEST DATA =============");

testingDatasets.forEach((dataset, index) => {
    // Run the utility calculation function
    const evaluation = calculateFunding(dataset.goal, dataset.raised);
    
    // Log outputs cleanly to match handbook review criteria 
    console.log(`\n[${index + 1}] ${dataset.label}`);
    console.log(`    Goal: $${dataset.goal} | Raised: $${dataset.raised}`);
    console.log(`    Result -> Percent Funded: ${evaluation.percentFunded}%`);
    console.log(`    Result -> Campaign Successful? ${evaluation.isSuccessful ? "✔ YES" : "❌ NO"}`);
});

console.log("\n======================================================");