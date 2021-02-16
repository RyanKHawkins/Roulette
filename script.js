import * as table from "/table.js"

// Variables from DOM
var wheelResult_span = document.querySelector("#wheelResult");
var resultsList_span = document.querySelector("#resultsList")
var prevResults_span = document.querySelector("#previousResults");

var betSelections = Array.from(document.getElementsByClassName("selection"))

var messageDisplay_p = document.querySelector("#messageDisplay");
var betDisplay_p = document.querySelector("#betDisplay")
var bankBalance_span = document.querySelector("#bankBalance");
var betAmount = document.querySelector("#betAmount");
var betBtn = document.querySelector("#betBtn");
var spinBtn = document.querySelector("#spinBtn");
var resetBtn = document.querySelector("#resetBtn");

// Event Listeners
spinBtn.addEventListener("click", spinWheel);
betBtn.addEventListener("click", setBetAmount);
betSelections.forEach((selection) => selection.addEventListener("click", selectBetPlacement))
resetBtn.addEventListener("click", resetBets)

var bankBalance = 1000;
var wheelResult;
var bettingAllowed = true;
var betSelection
var previousResults = []
var WAITTIME = 5000

// Select betAmount
function selectBetPlacement(e) {
    betSelection = e.target.id
    // Display bet selection
    betDisplay_p.innerHTML = `Selected ${betSelection}`
    console.log(`Selected: ${betSelection}`)
}

// Select bet amount
// Confirm betAmount amount available from bank
function setBetAmount() {
    if (bettingAllowed && betSelection && betAmount.value <= bankBalance) {
        betDisplay_p.innerHTML = `Bet:  ${betAmount.value} on ${betSelection}`;
        bankBalance -= betAmount.value;
        console.log(`Bet:  ${betAmount.value} on ${betSelection}`);
    } else if (betAmount.value > bankBalance) {
        betDisplay_p.innerHTML = "You do not have enough money to make that bet.";
        betAmount.value = 0;
    } else if (!bettingAllowed) {
        betDisplay_p.innerHTML = "Hold your bets."
    } else {
        betDisplay_p.innerHTML = "You must select a bet placement."
    }
}

// Spin roulette wheel
function spinWheel() {
    spinBtn.removeEventListener("click", spinWheel);
    betDisplay_p.innerText = "No more bets.";
    bettingAllowed = false;

    console.log(`Bank balance:  ${bankBalance}`)
    bankBalance_span.innerText = bankBalance
    console.log("Spinning wheel...")
    // Get wheel result
    wheelResult = getWheelResult()
    // Display Results
    setTimeout(
        displayWheelResult,
        WAITTIME
    );
    setTimeout(resetTable, WAITTIME)
}

function resetBets() {
    if (bettingAllowed) {
        betAmount.value = 0;
        betSelection = "";
        betDisplay_p.innerHTML = "Place your bet."
    }
}

function getWheelResult() {
    return Math.floor(Math.random() * table.wheel.length)
    console.log("got wheel result")
}

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

function displayWheelResult() {
    var color
    if (table.red.includes(table.wheel[wheelResult])) {
        color = "Red";
    } else if (table.black.includes(table.wheel[wheelResult])) {
        color = "Black"
    } else color = "Green"
    messageDisplay_p.innerText = `${color} ${table.wheel[wheelResult]}`
    console.log(`${color} ${table.wheel[wheelResult]}`)
    displayPreviousResults()
    console.log("display wheel result")
}

// Add result to list of results
function displayPreviousResults() {
    previousResults.push(table.wheel[wheelResult])
    //Remove oldest result if more than 10
    while (previousResults.length > 10) {
        console.log(`Removed ${previousResults.shift()}`)
    }
    prevResults_span.innerHTML = ""
    previousResults.forEach((result) => {
        prevResults_span.append(` ${result} `)
    })
}

//TODO:  Fix this!!
function setDisplayColor(result) {
    if (table.red.includes(parseInt(result))) {
        return `<span style.color="red">${result}</span`
    }
}

// Display win or lost
// Reset table
function resetTable() {
    // Reset betAmount selection
    // Reset betAmount amount
    betAmount.value = 0;
    betDisplay_p.innerText = "Place your bet."
    // Re-enable betting
    betSelection = ""
    bankBalance > 2000 ? betAmount.max = 2000 : betAmount.max = bankBalance;
    bettingAllowed = true;
    spinBtn.addEventListener("click", spinWheel);
    console.log("reset table\n")
}
