import { wheel, column1, column2, column3, green, first12, second12, third12, red, black, even, odd, low, high } from "./table.js"




// Variables from DOM
const wheelResult_span = document.querySelector("#wheelResult");// TODO:  Add animation

const resultsDisplay_span = document.querySelector("#resultsDisplay")
const prevResults_span = document.querySelector("#resultsList");

const betSelections = Array.from(document.getElementsByClassName("selection"))

const messageDisplay_p = document.querySelector("#messageDisplay");
const betDisplay_p = document.querySelector("#betDisplay")
const bankBalance_span = document.querySelector("#bankBalance");
const betAmount = document.querySelector("#betAmount");

const betBtn = document.querySelector("#betBtn");
const spinBtn = document.querySelector("#spinBtn");
const resetBtn = document.querySelector("#resetBtn");

// Event Listeners
spinBtn.addEventListener("click", spinWheel);
betBtn.addEventListener("click", setBetAmount);
betSelections.forEach((selection) => selection.addEventListener("click", selectBetPlacement))
//betSelections.onclick = (e) => betSelection = e.target.id

resetBtn.addEventListener("click", resetBets)
document.onclick = (e) => console.log(e.target.id)

// Initiating Variables
let bankBalance = 1000;
let wheelResult;
let bettingAllowed = true;
let betSelection
console.log(`Bet selection: ${betSelection}`)
let resultsList = []
const WAITTIME = 5000
const BETLIMIT = 2000
let currentBet = 0;

// Select betAmount
function selectBetPlacement(e) {
    if (!bettingAllowed) return
    betSelection = e.target.id
    console.log(`Bet selection: ${betSelection}`)
    // Display bet selection
    betDisplay_p.innerHTML = `<p>You selected <span style="color: ${getResultColor(betSelection)}">${betSelection}</span></p>`
    console.log(`Selected: ${betSelection}`)
    return betSelection
}

// Select bet amount
// Confirm betAmount amount available from bank
function setBetAmount() {
    if (bettingAllowed && betSelection && betAmount.value <= bankBalance) {
        let betAmountDisplay = betAmount.value;
        if (betAmountDisplay[0] == "0") {
            betAmountDisplay = betAmountDisplay.slice(1)
        }
        betDisplay_p.innerHTML = `Bet:  ${betAmountDisplay} on ${betSelection}`;
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
    if (betAmount.value == 0 || !betSelection) {
        return
    }
    spinBtn.removeEventListener("click", spinWheel);
    betDisplay_p.innerText = "No more bets.";
    bettingAllowed = false;

    
    bankBalance -= betAmount.value;
    bankBalance_span.innerText = bankBalance
    console.log("Spinning wheel...")
    messageDisplay_p.innerHTML = `<p>Spinning...</p>`
    wheelResult = wheel[getWheelResult()]
    console.log("wheelResult:", wheelResult)
    // Display Results
    setTimeout(
        displayWheelResult,
        WAITTIME
    );
    setTimeout(resetTable, WAITTIME)
    checkForWins(wheelResult);
    bankBalance_span.innerText = bankBalance
}

function getWheelResult() {
    return Math.floor(Math.random() * wheel.length)
}

// Displays in the console
// TODO:  Scale down
function displayWheelResult() {
    const color = getResultColor(wheelResult);
    // messageDisplay_p.innerText = `${color} ${wheel[wheelResult]}`
    messageDisplay_p.innerHTML = `<p style="color: ${getResultColor(wheelResult)}">${wheelResult}</p>`
    console.log(`${color} ${wheelResult}`)
    displayPreviousResults()
    console.log("display wheel result")
}

function getResultColor(result) {
    if (red.includes(result)) {
        return "red"
    }
    if (black.includes(result)) {
        return "black"
    }
    if (["0", "00"].includes(result)) {
        return "green"
    }
}

// Add result to list of results
function displayPreviousResults() {
    resultsList.push(wheelResult)
    resultsList = resultsList.slice(-10);
    console.log("resultsList: ", resultsList);
    prevResults_span.innerHTML = ""
    // let resultsDisplay = resultsList.forEach((result) => {
    //     prevResults_span.append(` ${result}`)
    // })
    prevResults_span.innerHTML = "";
    resultsList.forEach(result => {
        prevResults_span.innerHTML +=` <span style="color: ${getResultColor(result)}">${result}</span>`
    })
}

// Check for wins by payout (switch message?)
function checkForWins(result) {
    console.log(`Bet selection: ${betSelection}`)
    // Check for inside bets won
    if (result == betSelection) {
        bankBalance += betAmount;
    }
    // Check for outside bets won
    if (["red", "black"].includes(betSelection)) {
        if (betSelection == "red" && red.includes(result)) {
            bankBalance += betAmount * 2
        }
    if (betSelection == "black" && black.includes(result)) {
        bankBalance += betAmount * 2
    }
    }
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
    betBtn.addEventListener("click", setBetAmount)
    console.log("reset table\n")
}
