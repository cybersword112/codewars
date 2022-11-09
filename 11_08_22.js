// Task 1: Without peeking, write your own recursive factorial method
function joinElements(array,joinString){
    let res =''
    function recurse(index,res){
        res += array[index]
        if(index !== array.length -1){
            return recurse(index+1,res+joinString)
        }else if(index === array.length -1){
            return res
        }
    }
    return recurse(0,'')
}
// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memoize = (cb) => {
    let cache = {}
    function memoizedFunc(...args){
        if(args in cache){
            console.log('cached val')
            return cache[args]
        }else{
            console.log('calced val')
            let result = cb(...args)
            cache[args] = result
            return result
        }
    }
    return memoizedFunc
}

// returned function from memoizedAdd
const memoizedJoinElements= memoize(joinElements);
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
  console.log('Task 4 calculated value:', memoizedJoinElements(['s','cr','t cod',' :) :)'],'e'));	// calculated
  console.log('Task 4 cached value:', memoizedJoinElements(['s','cr','t cod',' :) :)'],'e'));	// cached
} catch(e) {
  console.error('Task 4:', e)
}