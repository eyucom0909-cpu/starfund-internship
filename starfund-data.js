/**
 * DAY 5: WEEK 1 MINI-PROJECT
 * File Name: /week1/starfund-data.js
 */

// 1. Array modeling 3 StarFund startups as objects (Checklist requirement)
const startupsCollection = [
    {
      id: 1,
      title: "EcoDrive",
      sector: "GreenTech",
      fundingGoal: 50000,
      raisedAmount: 65000,
      status: "funded"
    },
    {
      id: 2,
      title: "Smart Inventory",
      sector: "Logistics",
      fundingGoal: 30000,
      raisedAmount: 15000,
      status: "active"
    },
    {
      id: 3,
      title: "CyberShield",
      sector: "Cybersecurity",
      fundingGoal: 80000,
      raisedAmount: 5000,
      status: "pending"
    }
  ];
  
  /**
   * Task A: Filter items matching status flags
   * @param {string} status - 'pending' | 'active' | 'funded'
   * @returns {Array} 
   */
  function getStartupsByStatus(status) {
    return startupsCollection.filter(startup => startup.status === status);
  }
  
  /**
   * Task B: Sum aggregate funding raised values safely
   * @returns {number} 
   */
  function getTotalFundingRaised() {
    return startupsCollection.reduce((accumulator, startup) => {
      return accumulator + startup.raisedAmount;
    }, 0);
  }
  
  /**
   * Task C: Find the top funding collector
   * @returns {string} 
   */
  function getMostFundedStartup() {
    if (startupsCollection.length === 0) return "No startups registered.";
  
    const topStartup = startupsCollection.reduce((maxItem, currentItem) => {
      return currentItem.raisedAmount > maxItem.raisedAmount ? currentItem : maxItem;
    }, startupsCollection[0]);
  
    // Object destructuring implemented (Checklist requirement)
    const { title, raisedAmount, fundingGoal } = topStartup;
  
    return `🚀 Top Performer: ${title} has raised $${raisedAmount} out of a $${fundingGoal} target.`;
  }
  
  // =================================================================
  // EXPECTED SYSTEM LOG TEST RUN
  // =================================================================
  console.log("=== RUNNING: starfund-data.js ===");
  console.log("--- TEST 1: getStartupsByStatus('active') ---");
  console.log(getStartupsByStatus("active")); 
  
  console.log("\n--- TEST 2: getTotalFundingRaised() ---");
  console.log(`Total Platform Wealth Accumulated: $${getTotalFundingRaised()}`); 
  
  console.log("\n--- TEST 3: getMostFundedStartup() ---");
  console.log(getMostFundedStartup());
  console.log("=================================");