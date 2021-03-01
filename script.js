import * as table from "/table.js"

// Variables from DOM
var wheelResult_span = document.querySelector("#wheelResult");// TODO:  Add animation

var resultsDisplay_span = document.querySelector("#resultsDisplay")
var prevResults_span = document.querySelector("#resultsList");

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

// Initiating Variables
var bankBalance = 1000;
var wheelResult;
var bettingAllowed = true;
var betSelection 
var resultsList = []
const WAITTIME = 5000
const BETLIMIT = 2000

// Select betAmount
function selectBetPlacement(e) {
    if (!bettingAllowed) return
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
    } else if (!bettingAllowed) {
        betDisplay_p.innerHTML = "Hold your bets."
    } else if (betAmount.value > bankBalance) {
        betDisplay_p.innerHTML = "You do not have enough money to make that bet.";
        betAmount.value = 0;
    } else {
        betDisplay_p.innerHTML = "You must select a bet placement."
    }
}

function resetBets() {
    if (bettingAllowed) {
        betAmount.value = 0;
        betSelection = "";
        betDisplay_p.innerHTML = "Place your bet."
    }
}

// Spin roulette wheel
function spinWheel() {
    spinBtn.removeEventListener("click", spinWheel);
    betDisplay_p.innerText = "No more bets.";
    bettingAllowed = false;

    bankBalance_span.innerText = bankBalance
    console.log("Spinning wheel...")
    wheelResult = getWheelResult()
    // Display Results
    setTimeout(
        displayWheelResult,
        WAITTIME
    );
    setTimeout(resetTable, WAITTIME)
}

function getWheelResult() {
    return Math.floor(Math.random() * table.wheel.length)
    console.log("retrieved wheel result")
}

// Displays in the console
// TODO:  Scale down
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
    resultsList.push(table.wheel[wheelResult])
    //Remove oldest result if more than 10
    while (resultsList.length > 10) {
        console.log(`Removed ${resultsList.shift()}`)
    }
    prevResults_span.innerHTML = ""
    var resultsDisplay = resultsList.forEach((result) => {
        prevResults_span.append(` ${result}`)
    })
}

//TODO:  Fix this!!
// Changes the font color depending in connection with the winning spot to display
function setDisplayColor(result) {
    if (table.red.includes(parseInt(result))) {
        return `<span style.color="red">${result}</span>`
    }
}

// Check for wins by payout (switch message?)
function checkForWins() {
    // Check for inside bets won
    if (table.wheelResult == betSelection) console.log (`You won on ${betSelection}!`)
    // Check for outside bets won

    console.log("check for wins")
}

/**
 * If bet selection matches the wheel result,
 * award payout.
 * 
 * If bet is outside 1-to-1 payout (red, black, odd, even, low, high),
 * add betAmount * 2 to bankBalance
 * 
 * if bet is outside 1-to-2 payout (1st12, 2nd12, 3rd12, column1, )
 * 
 * 
 * 
 */



function manageBetting() {

    console.log("managed betting")
}

// Award bets
function payOutWins() {

    console.log("pay out wins")
}

// Display win or lost


// Reset table
function resetTable() {

    betDisplay_p.innerText = "Place your bet."


    bankBalance > BETLIMIT ? betAmount.max = BETLIMIT : betAmount.max = bankBalance;
    bettingAllowed = true; // Reenable betting
    resetBets()
    spinBtn.addEventListener("click", spinWheel);
    console.log("reset table\n")
}
