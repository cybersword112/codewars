function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? nextSq(sq) : -1 
}

function nextSq(n){
    n++
    while(!Number.isInteger(Math.sqrt(n))){
    n++
    } 
    return n
}
