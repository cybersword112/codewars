// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by five
function makeChange(coins, total) {
    let ind = 0
    let sum = 0
    target = total
    while (sum != target) {
        if (total >= coins[2]) {
            sum += coins[2]
            total -= coins[2]
            ind++
        } else if (total >= coins[1] && total < coins[2]) {
            sum += coins[1]
            total -= coins[1]
            ind++
        } else if (total >= coins[0] && total < coins[1]) {
            sum += coins[0]
            total -= coins[0]
            ind++
        }
    }
    return ind
}

// coin values: 5, 10, 25

console.log(makeChange([5, 10, 25], 40))
console.log(makeChange([5, 10, 25], 35))
console.log(makeChange([1, 6, 10], 12)) //greedy ass slut



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 