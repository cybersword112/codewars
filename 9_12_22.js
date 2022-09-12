/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // check the length of s and t return false if not equal
        if (s.length !== t.length){
            return false
        }
    //     sort s and t
        s = s.split('').sort().join('')
        t = t.split('').sort().join('')
    //     loop over and check that s[i] === t[i]
        for(let i=0;i<s.length;i++){
            if(s[i] !== t[i]){
                return false
            }
        }
    //     return if all were equal
        return true
    };
    
    // will be provided two strings as input
    // output should be boolean of if the second string has all the same characters as the first
    
    console.log(isAnagram('van','man'),false)
    console.log(isAnagram('caravan','navarac'),true)