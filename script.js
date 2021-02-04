import * as table from "/table.js"

// Variables from DOM
var wheelResult_span = document.querySelector("#wheelResult");
var prevResults_span = document.querySelector("#previousResults");
// TODO:  Add betAmount selections
var betSelections = Array.from(document.getElementsByClassName("selection"))

//betSelections.forEach(addEventListener("click", (s) => console.log(s.target.id)))

var displayWindow_p = document.querySelector("#displayWindow")
var messageDisplay_p = document.querySelector("#messageDisplay");
var betDisplay_p = document.querySelector("#betDisplay")
var bankBalance_span = document.querySelector("#bankBalance");
var betAmount = document.querySelector("#betAmount");
var betBtn = document.querySelector("#betBtn");
var spinBtn = document.querySelector("#spinBtn");

//betSelections.addEventListener("click", console.log("clicked"));
spinBtn.addEventListener("click", spinWheel);
betBtn.addEventListener("click", setBetAmount);
betSelections.forEach((selection) => selection.addEventListener("click", selectBetOption))

var bankBalance = 1000;
var wheelResult;
var bettingAllowed = true;

// Select betAmount
function selectBetOption(e) {
    var betSelection = e.target.id
    console.log(`Selected: ${betSelection}`)
}
// Display bet selection

// Select bet amount
function setBetAmount() {
    if (bettingAllowed) {
        betDisplay_p.innerHTML = `Bet:  ${betAmount.value}`
        bankBalance -= betAmount.value;
    } else {
        betDisplay_p.innerHTML = "Betting not currently allowed."
    }
    console.log(`Bet:  ${betAmount.value}`)
}
// Confirm betAmount amount available from bank

// Spin roulette wheel
function spinWheel() {
    spinBtn.removeEventListener("click", spinWheel);
    displayWindow.innerText = "No more bets.";
    bettingAllowed = false;

    console.log(`Bank balance:  ${bankBalance}`)
    bankBalance_span.innerText = bankBalance
    console.log("Spinning wheel...")
    // Get wheel result
    wheelResult = getWheelResult()
    // Display Results
    setTimeout(
        displayWheelResult,
        3000
    );
    setTimeout(resetTable, 6000)

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
    betDisplay_p.innerText = "Place your bet."
    // Re-enable betting
    bettingAllowed = true;
    spinBtn.addEventListener("click", spinWheel);
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