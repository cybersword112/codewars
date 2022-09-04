/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    //     split string into array
        s = s.trim().split(' ')
    //     return length property of last array item
        return s[s.length-1].length
    };
    
    
    // will be provided a string of space seperated words.
    // output should be the length of the last word in the string
    
    console.log(lengthOfLastWord('here lies david'),5)
    console.log(lengthOfLastWord('jebedia done did david in'),2)