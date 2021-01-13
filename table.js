// board.js

// American Roulette Wheel
export const wheel = [
    "0", "28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34",
    "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29", "12", "8",
    "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2"
]

/**
 * Inside Bets
 * - Straight up (35 to 1 payout) - any single number, including 0 and 00
 * - Split (17 to 1 payout) - any two adjoining numbers vertical or horizontal
 * - Basket (11 to 1 payout) - 0, 00, 1, 2, 3
 * - Street (11 to 1 payout) - any three numbers horizontal (1, 2, 3, or 4, 5, 6, etc.)
 * - Corner (8 to 1 payout) - any four adjoining numbers in a block (eg 17, 18, 20, 21)
 * - Six Line (5 to 1) - any six numbers from two rows (eg 28, 29, 30, 31, 32, 33)
 */

/**
 * Outside Bets - 2 to 1 payouts
 * - column1, column2, column3
 * - dozen1, dozen2, dozen3
 * 
 * Outside Bets - 1 to 1 payouts
 * - red, black
 * - even, odd
 * - low (1 through 18), high (19 through 36) 
 */
export const column1 = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"]
export const column2 = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"]
export const column3 = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"]
export const green = ["0", "00"]

export const first12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const second12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
export const third12 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

export const red = ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"]
export const black = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"]

export const even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
export const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]

export const low = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
export const high = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]



