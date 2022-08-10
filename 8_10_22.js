/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    //     create an arr for each string 
        let arr1 = s.split('').sort()
        let arr2 = t.split('').sort()
    //     check lengths first
        if(s.length !== t.length){
            return false
        }
    //     store strings equality
        for (let i=0; i< s.length;i++){
            if(arr1[i] !== arr2[i]){
                return false
            }
        }
        return true
    //     if true return true else return false
    };
    
    // will be provided two strings as input
    // output should be boolean of if the second string has all the same characters as the first
    
    console.log(isAnagram('van','man'),false)
    console.log(isAnagram('caravan','navarac'),true)