/**
 * DAY 5: Objects Practical Assignment
 * File Name: /week1/day5.js
 */

// 1. Model a single Startup as an object
const sampleStartup = {
    id: 101,
    title: "EcoDrive",
    sector: "GreenTech",
    fundingGoal: 50000,
    raisedAmount: 35000,
    isVerified: true
  };
  
  /**
   * Task: Returns a formatted summary string of the startup
   * @param {Object} startupObj 
   * @returns {string} 
   */
  function generateStartupSummary(startupObj) {
    // Uses Object Destructuring to grab properties cleanly (Checklist requirement)
    const { title, sector, fundingGoal, raisedAmount } = startupObj;
    
    // Uses ES6 Template Literals for formatting
    return `The startup "${title}" operates in the ${sector} industry sector. It has currently acquired $${raisedAmount} out of its total $${fundingGoal} target goal.`;
  }
  
  // Execution block for local testing
  console.log("=== RUNNING: day5.js ===");
  console.log(generateStartupSummary(sampleStartup));
  console.log("========================\n");
