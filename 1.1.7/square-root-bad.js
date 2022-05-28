
function getAverage(a, b){
    console.log('get average: ', ((a + b) / 2))
    return (a + b) / 2
}

function getQuotient( radicand, guess ){
    console.log('getQuotient: ', ( radicand / guess ))
    return radicand / guess
}

function getDifference(num1, num2){
    console.log('diff: ', Math.abs(num1 - num2))
    return Math.abs(num1 - num2)
}

function squareRootOf(radicand){
    let guess = 1
    for(let i = 0; i < 1000; i++){
        let quotient = getQuotient(radicand, guess)
        let average = getAverage(guess, quotient)
        let difference = getDifference(guess, average)
        if(difference < 0.0000001) return average
        guess = average
    }
}

console.log('Result is: ' + squareRootOf(121))