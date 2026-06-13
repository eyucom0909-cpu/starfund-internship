# StarFund — Week 1: Programming Fundamentals

Welcome to the foundational module for the StarFund Startup Crowdfunding Platform. This repository serves as the structural backbone for our mock data structures, algorithmic tracking loops, and core evaluation scripts. 

The primary focus this week was mastering JavaScript execution parameters, strict logical branching, and declarative higher-order array manipulations without modifying base source models.
## 📂 Project Architecture
All daily deliverables and mini-project logic are securely isolated inside the week1/ directory to maintain clean workspace compliance:
* **week1/day1.js (Environment & Basic Iteration)**
  Verifies the local Node.js engine environment. Features a standard loop to systematically handle repetitive console logs and includes an age-gate verification rule (>= 18) to evaluate simple permissions.
* **week1/day2.js (Conditional Logic & Gates)**
  Implements a score grader that correctly assigns grade tiers using clear, logical boundaries. It also contains a strict authentication simulator that handles exact string and numeric matching parameters for administrative access checks (username === 'admin' && password === '1234').
* **week1/day3.js (Metrics & Functional Architecture)**
  Houses the calculation function calculateFunding(goal, raised). It returns a data object showing an asset's funding progression as a percentage alongside a boolean indicating if the target goal was fully met. Tested across multiple functional edge inputs.
* **week1/day4.js (Array Pipelines)**
  Demonstrates clean transformations on collections of campaign mock data. It chains .map() to inject progress attributes, .filter() to drop items failing minimum investment thresholds, and .sort() to output records in descending sequence.
* **week1/day5.js & starfund-data.js (Mini-Project Data Architecture)**
  Models our local pseudo-database prototype using an array of detailed startup objects. Instead of generic shortcuts, fields are named descriptively (e.g., startupName, fundingGoal) and include three functional query methods:
  * getStartupsByStatus(status): Isolates matching startups by processing state parameters.
  * getTotalFundingRaised(): Accumulates numerical capital data across the entire platform.
  * getMostFundedStartup(): Scans tracking metrics to surface the current platform-leading asset.
## ⚙️ How to Run the Scripts Locally
Ensure you have [Node.js](https://nodejs.org/) installed on your machine. Open your command terminal and execute any file directly with the following commands:
`bash
# Run Day 1 verification tasks
node week1/day1.js
# Run the strict authentication and grading blocks
node week1/day2.js
# Run the funding calculations and testing metrics
node week1/day3.js
# Run the advanced array pipeline scripts
node week1/day4.js
# Execute the core mini-project pseudo-database queries
node week1/starfund-data.js
## 💡 Key Takeaways from Week 1

* Memory Integrity: Learned to leverage immutable array methods (.map(), .filter()) to transform dataset collections safely without mutating or accidentally corrupting the original source arrays.
* Scope Discipline: Avoided legacy var bindings completely, relying strictly on modern lexical let and const keywords to prevent scope bleed or hoisting bugs.
* Functional Modularity: Embraced the principle that functions should return clean data objects rather than just logging a flat terminal line, allowing processing logic to remain highly reusable for the upcoming frontend view stages.
