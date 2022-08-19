String.prototype.toJadenCase = function () {
// split string by space
    let arr = this.split(' ')
//   map over and for each item, change first char to  capital
    return arr.map(word=>{
    word = word.split('')
    word[0] = word[0].toUpperCase()
    return word.join('')
    }).join(' ')
//   return the new string
};
// will be provided a string, sentence. 
// first letter of every word needs to be made capital

console.log("help me lick this popsicle".toJadenCase(),"Help Me Lick My Popsicle")