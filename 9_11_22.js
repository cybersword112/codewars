/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // create 2 new map variables
        let map1 = new Map()
        let map2 = new Map()
    //    check that the length of s and t is equal return false if not
        if(s.length != t.length){
            return false
        }
        
    //     loop over length of s or t and store letters in map with count as value
        for(let i = 0; i<s.length; i++){
            map1.get(s[i]) ? map1.set(s[i],map1.get(s[i])+1) : map1.set(s[i],1)
            map2.get(t[i]) ? map2.set(t[i],map2.get(t[i])+1) : map2.set(t[i],1)
        }
        for(let i =0;i<s.length;i++){
            if(map2.get(s[i]) !== map1.get(s[i])){
                return false
            }
        }
        return true
    
    };
    
    // will be provided two strings as input
    // output should be boolean of if the second string has all the same characters as the first
    
    console.log(isAnagram('van','man'),false)
    console.log(isAnagram('caravan','navarac'),true)