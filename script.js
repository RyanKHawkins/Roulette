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

let bankBalance = 1000;
let wheelResult;
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
    bankBalance <= betAmount ? bankBalance -= betAmount : displayWindow.innerText = "You don't have enough money";
    bankBalance -= betAmount;
    wheelResult = Math.floor(Math.random() * table.wheel.length)
    
    wheelResult_span.innerHTML = wheelResult;
}
// Get result from wheel
console.log(table.wheel[wheelResult])
if (table.red.includes(table.wheel[wheelResult])) {
    bank += 10;
    console.log("red")
} else if (table.black.includes(table.wheel[wheelResult])) {
    console.log("black")
}