import { wheel, column1, column2, column3, green, first12, second12, third12, red, black, even, odd, low, high, numbers } from "./table.js"

// Variables from DOM
const wheelResult_span = document.querySelector("#wheelResult");// TODO:  Add animation

const resultsDisplay_span = document.querySelector("#resultsDisplay")
const prevResults_span = document.querySelector("#resultsList");

const betPlacements = Array.from(document.getElementsByClassName("selection"))

const messageDisplay_p = document.querySelector("#messageDisplay");
const betDisplay_p = document.querySelector("#betDisplay")
const bankBalance_span = document.querySelector("#bankBalance");
const betSelector = document.querySelector("#betAmount");

const betBtn = document.querySelector("#betBtn");
const spinBtn = document.querySelector("#spinBtn");
const resetBtn = document.querySelector("#resetBtn");

// Event Listeners
spinBtn.addEventListener("click", spinWheel);
// betBtn.addEventListener("click", setBetAmount);

betPlacements.forEach((selection) => selection.addEventListener("click", selectBetPlacement))
//betSelections.onclick = (e) => betSelection = e.target.id

resetBtn.addEventListener("click", resetBets)
document.onclick = (e) => console.log(e.target.id)
betSelector.addEventListener("change", () => {
    betAmount = Number(betSelector.value);
    console.log("bet amount: ", betAmount)
    console.log("type: ", typeof(betAmount))
})
// Initiating Variables
let bankBalance = 1000;
let wheelResult;
let bettingAllowed = true;
let betAmount = 0;
let betPlacement
let resultsList = []
const WAITTIME = 5000
const BETLIMIT = 2000
let currentBet = 0;

// Select betAmount
function selectBetPlacement(e) {
    if (!bettingAllowed) return
    betPlacement = e.target.id
    console.log(`Bet placement: ${betPlacement}`)
    // Display bet selection
    betDisplay_p.innerHTML = `<p>You selected <span style="color: ${getResultColor(betPlacement)}">${betPlacement}</span></p>`
    return betPlacement
}

// Select bet amount
// Confirm betAmount amount available from bank
// function setBetAmount() {
//     if (bettingAllowed && betPlacement && betAmount.value <= bankBalance) {
//         let betAmountDisplay = betAmount.value;
//         if (betAmountDisplay[0] == "0") {
//             betAmountDisplay = betAmountDisplay.slice(1)
//         }
//         betDisplay_p.innerHTML = `Bet:  ${betAmountDisplay} on ${betPlacement}`;
//         console.log(`Bet:  ${betAmountDisplay} on ${betPlacement}`);
//     } else if (!bettingAllowed) {
//         betDisplay_p.innerHTML = "Hold your bets."
//     } else if (betAmount.value > bankBalance) {
//         betDisplay_p.innerHTML = "You do not have enough money to make that bet.";
//         betAmount.value = 0;
//     } else {
//         betDisplay_p.innerHTML = "You must select a bet placement."
//     }
// }

function isValidBet() {
    if (betAmount.value > bankBalance) {
        console.log(betAmount.value, bankBalance);
        return false
    }
    if (betAmount.value > BETLIMIT) {
        console.log(betAmount, BETLIMIT);
        return false
    }
    return true
}

function resetBets() {
    if (bettingAllowed) {
        betSelector.value = 0;
        betAmount = 0;
        betPlacement = "";
        betDisplay_p.innerHTML = "Place your bet."
    }
}

// Spin roulette wheel
function spinWheel() {
    if (betAmount.value == 0 || !betPlacement) {
        return
    }
    if (!isValidBet()) {
        console.log("not a valid bet")
        return
    }
    spinBtn.removeEventListener("click", spinWheel);
    betDisplay_p.innerText = "No more bets.";
    spinBtn.innerText = "Spinning..."
    bettingAllowed = false;
    console.log("bet amount: ", betAmount);
    bankBalance -= betAmount;
    bankBalance_span.innerText = bankBalance
    console.log("Spinning wheel...")
    messageDisplay_p.innerText = "Spinning wheel"
    wheelResult = wheel[getWheelResult()]
    console.log("wheelResult:", wheelResult)

    setTimeout(() => {
        displayWheelResult;
        bankBalance_span.innerText = bankBalance                
    }
   ,
        WAITTIME
    );
    setTimeout(resetTable, WAITTIME)
    checkForWins(wheelResult);

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
    console.log(`Bet selection: ${betPlacement}`)
    // Check for inside bets won
    if (betPlacement == result && numbers.includes(betPlacement)) {
        bankBalance += betAmount * 35;
    }
    // Check for outside bets won
    if (["red", "black"].includes(betPlacement)) {
        if (betPlacement == "red" && red.includes(result)) {
            bankBalance += betAmount * 2
        }
        if (betPlacement == "black" && black.includes(result)) {
            bankBalance += betAmount * 2
        }
    }
    if (["even", "odd"].includes(betPlacement)) {
        if (betPlacement == "even" && result % 2 == 0 || betPlacement == "odd" && result % 2 != 0) {
            bankBalance += betAmount * 2            
        }

    }
    console.log("check for wins")
    console.log("new balance: ", bankBalance);
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
    // messageDisplay_p.innerText = "Play again.";

    bankBalance > BETLIMIT ? betSelector.max = BETLIMIT : betSelector.max = bankBalance;
    bettingAllowed = true; // Reenable betting
    resetBets()
    spinBtn.addEventListener("click", spinWheel);
    spinBtn.innerText = "Spin Wheel"
    // betBtn.addEventListener("click", setBetAmount)
    console.log("reset table\n")
}
