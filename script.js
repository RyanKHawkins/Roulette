import * as table from "/table.js"

// Variables from DOM
var wheelResult_span = document.querySelector("#wheelResult");
var prevResults_span = document.querySelector("#previousResults");
// TODO:  Add betAmount selections
var betSelections = document.querySelectorAll(".red");

var displayWindow_p = document.querySelector("#displayWindow")
var messageDisplay_p = document.querySelector("#messageDisplay");
var betDisplay_p = document.querySelector("#betDisplay")
var bankBalance_span = document.querySelector("#bankBalance");
var betAmount = document.querySelector("#betAmount");
var betBtn = document.querySelector("#betBtn");
var spinBtn = document.querySelector("#spinBtn");

// Event Listeners
//TODO:  Add betAmount selections

spinBtn.addEventListener("click", spinWheel);
betBtn.addEventListener("click", setBetAmount);

// Use for evaluations
//document.addEventListener("click", (e) => console.log(`Target ID:  ${e.target.id}\nClass(es):  ${e.target.className}`))

var bankBalance = 1000;
var wheelResult;
var bettingAllowed = true;

// Select betAmount
function selectBetOption(e) {
    console.log(e)
    console.log("selected bet option")
}
// Display bet selection

// Select bet amount
function setBetAmount() {
    if (bettingAllowed) betDisplay_p.innerHTML = betAmount.value
    console.log("set bet amount")
}
// Confirm betAmount amount available from bank

// Spin roulette wheel
function spinWheel() {
    displayWindow.innerText = "No more bets.";
    bettingAllowed = false;
    bankBalance -= betAmount.value;
    console.log(`Bank balance:  ${bankBalance}`)
    bankBalance_span.innerText = bankBalance
    // Get wheel result
    wheelResult = getWheelResult()
    // Display Results
    setTimeout(
        displayWheelResult,
        3000
        );
    setTimeout(resetTable, 6000)
    console.log("Spinning wheel...")
}


// Add result to list of results
// Remove oldest result from list of results
// Update results list display
// Display win or lost

// Check for wins by payout (switch message?)
function checkForWins() {
    // Check for inside bets won

    // Check for outside bets won

    console.log("check for wins")
}

function manageBetting() {

    console.log("managed betting")
}

// Award bets
function payOutWins() {

    console.log("pay out wins")
}

// Reset table
function resetTable() {
    // Reset betAmount selection
    // Reset betAmount amount
    betAmount.value = 0;
    betDisplay_p.innerHTML = "Place your bet."
    // Re-enable betting
    bettingAllowed = true;
    //updateBalance();
    console.log("reset table")
}

function getWheelResult() {
    return Math.floor(Math.random() * table.wheel.length)
    console.log("got wheel result")
}

function displayWheelResult() {
    var color
    if (table.red.includes(table.wheel[wheelResult])) {
        color = "Red";
    } else if (table.black.includes(table.wheel[wheelResult])) {
        color = "Black"
    } else color = "Green"
    displayWindow.innerText = `${color} ${table.wheel[wheelResult]}`
    console.log(`${color} ${table.wheel[wheelResult]}`)
    console.log("display wheel result")
}

// updateBalance