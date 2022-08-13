/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
 var customSortString = function(order, s) {
    
    s = s.split('')
    order = order.split('')
    
    s.sort((a,b)=>{
        if(order.includes(a) && order.includes(b)){
            return (order.indexOf(a)+1) - (order.indexOf(b)+1)
        }else if(order.includes(a)){
            return -1
        }else{
            return 0
        }
    })
    
    return s.join('')
};

// will be provided two strings 
// order chars are unique and have been sorted
//  the return should be chars in s sorted by the order.


console.log(customSortString('abc','bca'),('abc'))
console.log(customSortString('hirl','ltghy'),('hltgy'))