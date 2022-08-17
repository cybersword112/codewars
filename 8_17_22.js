/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    //    lowercase all letters in s
       s = s.toLowerCase()
    //     remove all chars not alphanumeric using char codes or regex
       s = s.replace(/[^0-9a-z]/gi, '')
    //     split s into array and reverse array
        let rev = s.split('').reverse().join('')
    //     check if s reversed is equal to s original
        return s === rev ? true : false
    };
    
    // will be provided string of chars ascii chars
    // return true if string is same backwards as forwars after removing all capitals and non-allphanumeric
    
    console.log(isPalindrome("cookies"),false)
    console.log(isPalindrome("racecar"),true)