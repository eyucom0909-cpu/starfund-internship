// ==========================================
// TASK 1: FILTERING DATA (Even Numbers Only)
// ==========================================
const numbers = [12, 5, 8, 130, 44, 7, 21, 14];

// Using .filter() to isolate numbers divisible by 2
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("--- Task 1: Filter Even Numbers ---");
console.log("Original Numbers:", numbers);
console.log("Even Numbers:    ", evenNumbers); 
// Output: [12, 8, 130, 44, 14]
console.log("\n");


// ==========================================
// TASK 2: MAPPING DATA (Calculating 15% Tax)
// ==========================================
const itemPrices = [20, 50, 100, 250];
const TAX_RATE = 0.15;

// Using .map() to return a new array where each item includes a 15% tax
const pricesWithTax = itemPrices.map(price => price + (price * TAX_RATE));

console.log("--- Task 2: Map Prices with 15% Tax ---");
console.log("Original Prices: ", itemPrices);
console.log("Prices with Tax: ", pricesWithTax); 
// Output: [23, 57.5, 115, 287.5]
console.log("\n");


// ==========================================
// TASK 3: REDUCING DATA (Total Investments Sum)
// ==========================================
const investmentPledges = [500, 1250, 3000, 150, 4500];

// Using .reduce() to aggregate individual amounts into a single total value
// The '0' at the end specifies the initial value of the accumulator
const totalInvestedAmount = investmentPledges.reduce((accumulator, currentPledge) => {
    return accumulator + currentPledge;
}, 0);

console.log("--- Task 3: Reduce Total Investments ---");
console.log("Investment Pledges:   ", investmentPledges);
console.log("Total Amount Invested:", totalInvestedAmount); 
// Output: 9400
// 1. GIVEN: Original array of mock StarFund campaign objects
const campaigns = [
    { title: "EcoCharge Battery", raised: 4500, goal: 10000 },
    { title: "Fintech Ledger App", raised: 12000, goal: 15000 },
    { title: "Smart Irrigation Tech", raised: 2000, goal: 8000 },
    { title: "HealthTrack Wearable", raised: 9500, goal: 10000 },
    { title: "AgriDrone Logistics", raised: 1500, goal: 3000 }
];

console.log("--- Original Campaigns Array ---");
console.log(campaigns);
console.log("\n");


// 2. PROCESSING: Chaining higher-order functional methods
// Step 1: .map() dynamically calculates and attaches 'percentFunded' without mutating originals
// Step 2: .filter() keeps only campaigns with percentFunded >= 50
// Step 3: .sort() orders the remaining items by percentFunded in descending order
const processedCampaigns = campaigns
    .map(campaign => {
        // Use spread operator to safely copy properties and add the new field
        return {
            ...campaign,
            percentFunded: (campaign.raised / campaign.goal) * 100
        };
    })
    .filter(campaign => campaign.percentFunded >= 50)
    .sort((a, b) => b.percentFunded - a.percentFunded);


// 3. EXPECTED OUTPUT: Print the final processed result
console.log("--- Processed Campaigns (Chained Map -> Filter -> Sort) ---");
console.log(processedCampaigns);
console.log("\n");


// 4. NON-MUTATION CHECK: Verifying the original source array was left untouched
console.log("--- Verification: Original Array Untouched? ---");
console.log(campaigns[0].hasOwnProperty('percentFunded') ? "FAILED: Mutated" : "PASSED: Safe and Immutable");