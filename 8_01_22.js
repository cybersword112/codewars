/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const vals = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000, 
    } 
    let sum = 0
    s = s.split('')
    let i = 0
    while(i <s.length){
        console.log(s[i],vals[s[i]])
        if(s[i] === 'I' && (s[i+1] === 'X' || s[i+1] ==='V')){
            console.log('case 1',sum)
            sum = sum +( vals[s[i+1]] - vals[s[i]])
            i+=2
            console.log(sum)
        }else if(s[i] === 'X' && (s[i+1] === 'L' || s[i+1] ==='C')){
            console.log('case 2',sum)
            sum = sum +( vals[s[i+1]] - vals[s[i]])
            i+=2
            console.log(sum)
        }else if(s[i] === 'C' && (s[i+1] === 'D' || s[i+1] ==='M')){
            console.log('case 3',sum)
            sum = sum +( vals[s[i+1]] - vals[s[i]])
            i+= 2
            console.log(sum)
        }else{
            sum += vals[s[i]]
            i++
        }
        console.log(sum)
    }
    return sum
};