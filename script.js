//import { wheel, column1, column2, column3, green, first12, second12, third12, red, black, even, odd, low, high } from "./table.js"

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
//betSelections.onclick = (e) => betSelection = e.target.id

resetBtn.addEventListener("click", resetBets)
document.onclick = (e) => console.log(e.target.id)

// Initiating Variables
var bankBalance = 1000;
var wheelResult;
var bettingAllowed = true;
var betSelection
console.log(`Bet selection: ${betSelection}`)
var resultsList = []
const WAITTIME = 5000
const BETLIMIT = 2000

// Select betAmount
function selectBetPlacement(e) {
    if (!bettingAllowed) return
    betSelection = e.target.id
    console.log(`Bet selection: ${betSelection}`)
    // Display bet selection
    betDisplay_p.innerHTML = `Selected ${betSelection}`
    console.log(`Selected: ${betSelection}`)
    return betSelection
}

// Select bet amount
// Confirm betAmount amount available from bank
function setBetAmount() {
    if (bettingAllowed && betSelection && betAmount.value <= bankBalance) {
        var betAmountDisplay = betAmount.value;
        if (betAmountDisplay[0] == "0") {
            betAmountDisplay = betAmountDisplay.slice(1)
        }
        betDisplay_p.innerHTML = `Bet:  ${betAmountDisplay} on ${betSelection}`;
        bankBalance -= betAmount.value;
        console.log(`Bet:  ${betAmountDisplay} on ${betSelection}`);
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
        console.log(`Bet selection: ${betSelection}`)
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
    return Math.floor(Math.random() * wheel.length)
    console.log("retrieved wheel result")
}

// Displays in the console
// TODO:  Scale down
function displayWheelResult() {
    var color
    if (red.includes(wheel[wheelResult])) {
        color = "Red";
    } else if (black.includes(wheel[wheelResult])) {
        color = "Black"
    } else color = "Green"
    messageDisplay_p.innerText = `${color} ${wheel[wheelResult]}`
    console.log(`${color} ${wheel[wheelResult]}`)
    displayPreviousResults()
    console.log("display wheel result")
}

// Add result to list of results
function displayPreviousResults() {
    resultsList.push(wheel[wheelResult])
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
    if (red.includes(parseInt(result))) {
        return `<span style.color="red">${result}</span>`
    }
}

// Check for wins by payout (switch message?)
function checkForWins() {
    console.log(`Bet selection: ${betSelection}`)
    // Check for inside bets won
    if (wheelResult == betSelection) console.log (`You won on ${betSelection}!`)
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
