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

const col1 = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"]
const col2 = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"]
const col3 = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"]
const green = ["0", "00"]

const red = ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"]
const black = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"]

const wheel = [
    "0", "28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34",
    "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29", "12", "8",
    "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2"
]

low = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
high = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]


// Retrieve bet placement(s)

// Retrieve bet amount(s)
// Verify player has total in bank.
// Remove bet amount total from bank

// Spin roulette wheel
ballPosition = Math.floor(Math.random() * wheel.length)
// Get result from wheel
console.log(wheel[ballPosition])
if (red.includes(wheel[ballPosition])) {
    console.log("red")
} else if (black.includes(wheel[ballPosition])) {
    console.log("black")
}

// add result to prevResults (total of 5 or 10?)
// Check for wins
// Check bet placement(s)

// Award wins, depending on selection group payout
