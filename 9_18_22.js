function createPhoneNumber(numbers){
    //   enclose index 0-2 in parenthesis
        numbers.splice (0,0,'(')
        numbers.splice (4,0,')')
    //   add dash after second trio
        numbers.splice(8,0,('-'))
    //   copy first parenthesis group to a new array and remove from old
        let first3 = numbers.splice(0,5)
    //   join the orginal and the copy with a space
     return first3.join('') + ' ' +numbers.join('') 
    }