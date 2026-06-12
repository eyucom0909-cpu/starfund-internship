// 1. Setup using the standard process module directly to avoid require blocks crashing
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Execution Logic
rl.question('Please enter your age: ', (userInput) => {
    // Trim any accidental spaces the user might have typed
    const age = parseInt(userInput.trim(), 10);

    if (isNaN(age)) {
        console.log("Error: Please enter a valid numerical value.");
    } else if (age >= 18) {
        console.log("You can vote.");
    } else {
        console.log("You cannot vote yet.");
    }

    // Safely exit the process completely
    rl.close();
    process.exit(0);
});