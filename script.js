import * as table from "/table.js"

/*  Display:
    - last 5 spots landed - w/ colored background
    - Current money
    - Selection options
        - Specific spot
        - 1st 12
        - 2nd 12
        - 3rd 12
        - 1st column
        - 2nd column
        - 3rd column
        - Odd/Even
        - Red/Black
    - Roulette wheel?? Later version
*/


// Roulette game logic
// Place bet
// - Retrieve bet amount
// - Retrieve location/type of bet

// Confirm bank has enough for the net bets.
// Remove net bets from bank.

// Spin wheel
// - 15 second delay? - Display "No more bets."
//   - Disable betting options
// - 20 second delay? - Get result from wheel:  number/color
// - Check for wins by payout ratios
// - ?? second delay? - Add net wins to bank
// Add result to previous results list/display
// Remove oldest (5th? 10th?) result from previous results list/display
// Reenable betting


let bank = 1000

// Spin roulette wheel
let wheelResult = Math.floor(Math.random() * table.wheel.length)
// Get result from wheel
console.log(table.wheel[wheelResult])
if (table.red.includes(table.wheel[wheelResult])) {
    bank += 10;
    console.log("red")
} else if (table.black.includes(table.wheel[wheelResult])) {
    console.log("black")
}

// add result to prevResults (total of 5 or 10?)
// Check for wins
// Check bet placement(s)

// Award wins, depending on selection group payout

