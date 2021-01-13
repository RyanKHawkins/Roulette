import * as table from "/table.js"

// Variables from DOM
var wheelResult_span = document.querySelector("#wheelResult");
var prevResults_span = document.querySelector("#previousResults");
// TODO:  Add bet selections
var displayWindow = document.querySelector("#displayWindow");
var bankBalance_span = document.querySelector("#bankBalance");
var betAmount = document.querySelector("#betAmount");
var betBtn = document.querySelector("#betBtn");
var spinBtn = document.querySelector("#spinBtn");

// Event Listeners
//TODO:  Add bet selections

spinBtn.addEventListener("click", spinWheel);
document.addEventListener("click", (e) => console.log(`Target clicked:  ${e.target.id}`))

var bankBalance = 1000;
var wheelResult;
var bettingAllowed = true;

// Select bet
    // Display bet selection
// Select bet amount
    // Confirm bet amount available from bank

// Get wheel result
// Display result
    // Add result to list of results
    // Remove oldest result from list of results
    // Update results list display
    // Display win or lost

// Check for wins by payout (switch message?)
    // Check for inside bets won
    // Check for outside bets won
// Award bets

// Reset table
    // Reset bet selection
    // Reset bet amount
    // Re-enable betting
    //

// Spin roulette wheel
function spinWheel() {
    displayWindow.innerText = "No more bets.";
    bettingAllowed = false;
    bankBalance -= betAmount;
    wheelResult = Math.floor(Math.random() * table.wheel.length)
    
    wheelResult_span.innerHTML = wheelResult;
    console.log(table.wheel[wheelResult])
}
// Get result from wheel

if (table.red.includes(table.wheel[wheelResult])) {
    bank += 10;
    console.log("red")
} else if (table.black.includes(table.wheel[wheelResult])) {
    console.log("black")
}