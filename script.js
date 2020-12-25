import * as board from "/board.js"

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




// Retrieve bet placement(s)

// Get bet type for payout

// Retrieve bet amount(s)

// Verify player has total in bank.
let balance = 1000
// Get balance.

// Remove bet amount total from bank

// Spin roulette wheel
let ballPosition = Math.floor(Math.random() * board.wheel.length)
// Get result from wheel
console.log(board.wheel[ballPosition])
if (board.red.includes(board.wheel[ballPosition])) {
    balance += 10;
    console.log("red")
} else if (board.black.includes(board.wheel[ballPosition])) {
    console.log("black")
}

// add result to prevResults (total of 5 or 10?)
// Check for wins
// Check bet placement(s)

// Award wins, depending on selection group payout

